
const cpdservice = require("../Services/cpd.service");

// Create a new CPD course
async function createCpdCourse(req, res) {
  try {
    const {
      course_name,
      course_level,
      pri_duration,
      post_duration,
      min_score
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
      minimum_score: min_score      
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


module.exports = {
  createCpdCourse,
  getAllCpdCourses,
  getCpdCourseById,
  deleteCpdCourse,
  updateCpdCourse  
};