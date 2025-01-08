const conn = require("../Config/db.config");

// create a new applicant
async function createCpdCourse(courseData) {
  const sql = `INSERT INTO cpd_trainings ( course_name, course_level, pri_test, pri_test_duration, post_test, post_test_duration, minimum_score) VALUES (?, ?, ?, ?, ?, ? , ?)`;
  const {
    course_name,
    course_level,
    pri_test,
    pri_test_duration,
    post_test,
    post_test_duration,
    minimum_score,
  } = courseData;
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [
      course_name,
      course_level,
      pri_test,
      pri_test_duration,
      post_test,
      post_test_duration,
      minimum_score,
    ]);
    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
}

// get all cpd courses
async function getAllCpdCourses() {
  const sql = `SELECT * FROM cpd_trainings`;
  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

// get cpd course by id
async function getCpdCourseById(courseId) {
  const sql = `SELECT * FROM cpd_trainings WHERE training_id = ?`;
  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql, [courseId]);
    return rows[0];
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

// delete cpd course by id
async function deleteCpdCourseById(courseId) {
  const sql = `DELETE FROM cpd_trainings WHERE training_id = ?`;
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [courseId]);
    await connection.commit();
    return result.affectedRows > 0;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
}

// update cpd course by id
async function updateCpdCourseById(id, courseData) {
  const sql = `UPDATE cpd_trainings SET course_name = ?, course_level = ?, pri_test = ?, pri_test_duration = ?, post_test = ?, post_test_duration = ?, minimum_score = ? WHERE training_id = ?`;
  const {
    course_name,
    course_level,
    pri_test,
    pri_test_duration,
    post_test,
    post_test_duration,
    minimum_score,
  } = courseData;
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [
      course_name,
      course_level,
      pri_test,
      pri_test_duration,
      post_test,
      post_test_duration,
      minimum_score,
      id,
    ]);
    await connection.commit();
    return result.affectedRows > 0;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
}

async function AvailableCpdCourses() {
  const sql = `
    SELECT 
      ts.*, -- Fetch all columns from training_schedule
      ct.course_name,
      ct.course_level,
      ct.pri_test,
      ct.pri_test_duration,
      ct.post_test,
      ct.post_test_duration,
      ct.minimum_score
    FROM 
      training_schedule ts
    LEFT JOIN 
      cpd_trainings ct
    ON 
      ts.training_id = ct.training_id
    WHERE 
      ts.registration_status = false
    ORDER BY 
      ts.training_id, ts.registration_start_date ASC;
  `;

  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql);
    return rows; // Returns all training schedules with `registration_status = false`
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

async function ApplyCourses(
  trainee_id,
  schedule_id,
  course_name,
  pri_score,
  post_score
) {
  try {
    // Check if all required parameters are provided
    if (!trainee_id || !schedule_id || !course_name) {
      throw new Error("Missing required fields");
    }

    // Check if the trainee is already registered for the course
    const checkQuery =
      "SELECT * FROM courses WHERE trainee_id = ? AND course_name = ?";
    const existingRegistration = await conn.query(checkQuery, [
      trainee_id,
      course_name,
    ]);

    if (existingRegistration.length > 0) {
      // Trainee is already registered for the course
      console.log("You are already registered for this course.");
      return {
        success: false,
        message: "You are already registered for this course.",
      };
    }

    // Insert the application data into the database
    const insertQuery =
      "INSERT INTO courses (trainee_id, schedule_id, course_name, pri_score, post_score) VALUES (?, ?, ?, ?, ?)";
    const values = [
      trainee_id,
      schedule_id,
      course_name,
      pri_score,
      post_score,
    ];

    // Perform the query to insert the data
    const result = await conn.query(insertQuery, values);

    const statusQuery =
      "INSERT INTO trainees_status (status_id, trainee_id, course_name, registration, pri_test, post_test, certificate, created_at, updated_at) " +
      "VALUES (UUID(), ?, ?, 'registered', ?, ?, 'no', NOW(), NOW())";
    await conn.query(statusQuery, [
      trainee_id,
      course_name,
      pri_score,
      post_score,
    ]);

    // Return success if insertion was successful
    return {
      success: true,
      message: "Application submitted successfully.",
      result,
    };
  } catch (error) {
    // Handle any errors that may occur during the database operation
    console.error("Error applying for the course:", error);

    // Return an error response
    return {
      success: false,
      message: "An error occurred while applying. Please try again later.",
    };
  }
}

async function IsApply(trainee_id) {
  try {
    console.log("Trainee ID:", trainee_id);

    // Fetch all courses the trainee has applied for
    const appliedCourses = await conn.query(
      "SELECT * FROM courses WHERE trainee_id = ?",
      [trainee_id]
    );

    if (appliedCourses.length > 0) {
      // Return the list of applied courses
      return {
        success: true,
        data: appliedCourses,
      };
    } else {
      // Return an empty list if no courses are found
      return {
        success: true,
        data: [],
      };
    }
  } catch (error) {
    console.error("Error in IsApply service:", error);
    // Handle unexpected errors
    return {
      success: false,
      data: null,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}

// export the functions
module.exports = {
  createCpdCourse,
  getAllCpdCourses,
  getCpdCourseById,
  deleteCpdCourseById,
  updateCpdCourseById,
  AvailableCpdCourses,
  ApplyCourses,
  IsApply,
};
