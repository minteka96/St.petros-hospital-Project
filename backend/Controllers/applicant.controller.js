const applicantService = require("../Services/applicant.service");

// Controller to create a new applicant
// const applicantService = require("../Services/applicant.service");

async function createApplicant(req, res) {
  try {
    const {
      first_name,
      last_name,
      email_address,
      position_applied_for,
      additional_information,
    } = req.body;

    const cv_file_path = req.files.cv_file
      ? `/uploads/cv/${req.files.cv_file[0].filename}`
      : null;
    const other_testimonials = req.files.testimonials
      ? `/uploads/testimonials/${req.files.testimonials[0].filename}`
      : null;

    const applicantData = {
      first_name,
      last_name,
      email_address,
      position_applied_for,
      additional_information,
      cv_file_path,
      other_testimonials,
    };

    const result = await applicantService.createApplicant(applicantData);

    // Include full backend URLs
    const baseUrl = `${req.protocol}://${req.get("host")}`;

    res.status(201).json({
      message: "Applicant created successfully",
      data: {
        id: result.insertId,
        ...applicantData,
        cv_file_url: cv_file_path ? `${baseUrl}${cv_file_path}` : null,
        testimonials_url: other_testimonials
          ? `${baseUrl}${other_testimonials}`
          : null,
      },
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}



// Controller to get all applicants
async function getAllApplicants(req, res) {
 try{
  const applicants = await applicantService.getAllApplicants();
  res.status(200).json({ data: applicants });
 } catch (error) {
  console.error("Error:", error);
  res.status(500).json({ error: "Internal Server Error" });
 }
}

// Controller to get an applicant by ID
async function getApplicantById(req, res) {
 try{
  const applicant = await applicantService.getApplicantById(req.params.id);
  if(!applicant){
   return res.status(404).json({ error: "Applicant not found" });
  }
  res.status(200).json({ data: applicant });
 } catch (error) {
  console.error("Error:", error);
  res.status(500).json({ error: "Internal Server Error" });
 }
}


// Controller to delete an applicant by ID
async function deleteApplicant(req, res) {
 try{
  const deletedApplicant = await applicantService.deleteApplicant(req.params.id);
  if(!deletedApplicant){
   return res.status(404).json({ error: "Applicant not found" });
  }
  res.status(200).json({ message: "Applicant deleted successfully" });
 } catch (error) {
  console.error("Error:", error);
  res.status(500).json({ error: "Internal Server Error" });
 }
}

//controller to delete all applicants
async function deleteAllApplicants(req, res) {
 try{
  const deletedApplicants = await applicantService.deleteAllApplicants();
  res.status(200).json({ message: "All applicants deleted successfully" });
 } catch (error) {
  console.error("Error:", error);
  res.status(500).json({ error: "Internal Server Error" });
 }
}
// Export the createApplicant function

module.exports = { createApplicant, getAllApplicants, getApplicantById, deleteApplicant, deleteAllApplicants };