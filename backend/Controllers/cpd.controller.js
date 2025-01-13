const cpdservice = require("../Services/cpd.service");

// Create a new CPD course
async function createCpdCourse(req, res) {
  try {
    const {
      course_name,
      course_level,
      pri_duration,
      post_duration,
      min_score,
    } = req.body;
    // Validate required fields
    if (
      !course_name ||
      !course_level ||
      !pri_duration ||
      !post_duration ||
      !min_score
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Get file paths from Multer
    const pri_file_path = req.files.pri_test
      ? `/uploads/cpd/pri_test/${req.files.pri_test[0].filename}`
      : null;
    const post_file_path = req.files.post_test
      ? `/uploads/cpd/post_test/${req.files.post_test[0].filename}`
      : "";

    // Prepare applicant data
    const courseData = {
      course_name,
      course_level,
      pri_test: pri_file_path,
      pri_test_duration: pri_duration,
      post_test: post_file_path,
      post_test_duration: post_duration,
      minimum_score: min_score,
    };

    // Create applicant in the database
    await cpdservice.createCpdCourse(courseData);
    res
      .status(201)
      .json({ message: "CPD course created successfully", status: 201 });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Update a specific CPD course by ID
async function updateCpdCourse(req, res) {
  try {
    const { id } = req.params;
    const {
      course_name,
      course_level,
      pri_duration,
      post_duration,
      min_score,
    } = req.body;

    // Get file paths from Multer
    const pri_file_path = req.files.pri_test
      ? `/uploads/cpd/pri_test/${req.files.pri_test[0].filename}`
      : req.body.pri_test;
    const post_file_path = req.files.post_test
      ? `/uploads/cpd/post_test/${req.files.post_test[0].filename}`
      : req.body.post_test;

    // Prepare applicant data
    const courseData = {
      course_name,
      course_level,
      pri_test: pri_file_path,
      pri_test_duration: pri_duration,
      post_test: post_file_path,
      post_test_duration: post_duration,
      minimum_score: min_score,
    };
    console.log("courseData", courseData);
    const updatedCpdCourse = await cpdservice.updateCpdCourseById(
      id,
      courseData
    );
    if (!updatedCpdCourse) {
      return res.status(404).json({ error: "CPD course not found" });
    }
    res.status(200).json(updatedCpdCourse);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get a specific CPD course by ID
async function getCpdCourseById(req, res) {
  try {
    const { id } = req.params;
    const cpdCourse = await cpdservice.getCpdCourseById(id);
    if (!cpdCourse) {
      return res.status(404).json({ error: "CPD course not found" });
    }
    res.status(200).json(cpdCourse);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get all CPD courses
async function getAllCpdCourses(req, res) {
  try {
    const cpdCourses = await cpdservice.getAllCpdCourses();
    res.status(200).json(cpdCourses);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Delete a specific CPD course by ID
async function deleteCpdCourse(req, res) {
  try {
    const { id } = req.params;
    const deletedCpdCourse = await cpdservice.deleteCpdCourseById(id);
    if (!deletedCpdCourse) {
      return res.status(404).json({ error: "CPD course not found" });
    }
    res.status(200).json({ message: "CPD course deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function getAvailableCpdCourses(req, res) {
  try {
    const cpdCourses = await cpdservice.AvailableCpdCourses();
    res.status(200).json(cpdCourses);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function apply(req, res) {
  try {
    // Destructure necessary fields from the request body
    const { trainee_id, schedule_id, course_name, pri_score, post_score } =
      req.body;

    // Check if all required fields are present
    if (!trainee_id || !schedule_id || !course_name) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Call service to apply for the course
    const applyResult = await cpdservice.ApplyCourses(
      trainee_id,
      schedule_id,
      course_name,
      pri_score,
      post_score
    );
    // If the ApplyCourses service fails
    if (!applyResult.success) {
      if (
        applyResult.message === "You are already registered for this course."
      ) {
        return res.status(409).json({ error: applyResult.message }); // Conflict status for duplicate registration
      }
      return res.status(500).json({ error: applyResult.message }); // Internal server error
    }

    // If insertion was successful, return a success response with the new application ID
    return res.status(201).json({
      message: "Application successfully submitted.",
      applicationId: applyResult.result.insertId, // Get the insertId from the result of ApplyCourses
    });
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error applying for the course:", error);
    return res.status(500).json({
      error: "An error occurred. Please try again later.",
    });
  }
}
async function IsApply(req, res) {
  try {
    // Extract trainee_id from request parameters
    const { trainee_id } = req.params;

    if (!trainee_id) {
      return res.status(400).json({ error: "Trainee ID is required." }); // Bad request
    }

    // Call the service to fetch applied courses
    const applyResult = await cpdservice.IsApply(trainee_id);

    if (!applyResult.success) {
      return res.status(500).json({ error: applyResult.message }); // Internal server error
    }

    // Return the list of applied courses
    return res.status(200).json({
      success: true,
      data: applyResult.data,
    });
  } catch (error) {
    console.error("Error fetching applied courses:", error);

    // Return a generic internal server error message
    return res.status(500).json({
      error: "An unexpected error occurred. Please try again later.",
    });
  }
}

//get cpd_trainings by course_name
async function getCpdCourseByName(req, res) {
  try {
    const { course_name } = req.params;
    const cpdCourse = await cpdservice.getCpdCourseByName(course_name);
    if (!cpdCourse) {
      return res.status(404).json({ error: "CPD course not found" });
    }
    res.status(200).json(cpdCourse);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  createCpdCourse,
  getAllCpdCourses,
  getCpdCourseById,
  deleteCpdCourse,
  updateCpdCourse,
  getCpdCourseByName,
  getAvailableCpdCourses,
  apply,
  IsApply,
};
