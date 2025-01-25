import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // import useParams to get the URL parameters
import applicantService from "../../../../Services/applicant.service";
import { useAuth } from "../../../../contexts/AuthContext";
const api_url = import.meta.env.VITE_API_URL;

function ApplicantDetail() {
   const { user } = useAuth();
   const token = user ? user.token : null;
  const [applicant, setApplicant] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); // useParams to extract the 'id' from the URL
  const navigate = useNavigate(); // For the 'Close' button functionality

  useEffect(() => {
    // Get applicant by id
    const fetchApplicant = async () => {
      try {
        const response = await applicantService.getApplicantById(id, token);
        setApplicant(response.data);
      } catch (error) {
        console.error("Error fetching applicant data:", error);
      }
    };
    fetchApplicant();
  }, [id]); // Make sure the effect runs when the id changes

  // use delete comfirmation alert
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this applicant?"
    );
    if (confirmDelete) {
      try {
        setLoading(true);
        await applicantService.deleteApplicant(id, token);
        navigate("/admin/applicant"); // Redirect to the applicants page after deletion
      } catch (error) {
        console.error("Error deleting applicant:", error);
      }
    }
  };


  return (
    <div className="container py-5">
      <div className="card shadow-lg">
        <div className="card-header text-white">
          <h3 className="mb-0 text-black">
            {applicant.first_name} {applicant.last_name}'s Details
          </h3>
        </div>
        <div className="card-body">
          <h5>Personal Details</h5>
          <p>
            <strong>Email:</strong> {applicant.email_address}
          </p>
          <p>
            <strong>Phone:</strong> {applicant.phone_number}
          </p>
          <p>
            <strong>Position:</strong> {applicant.position_applied_for}
          </p>
          
          <p>
            <strong>Additional Information:</strong> {applicant.additional_information}
          </p>

          <p>
            <strong>CV:</strong>{" "}
            {applicant.cv_file_path ? (
              <a
                href={`${api_url}${applicant.cv_file_path}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
              </a>
            ) : (
              "Not attached"
            )}
          </p>

          <p>
            <strong>Other Testimonials:</strong>{" "}
            {applicant.other_testimonials ? (
              <a
                href={`${api_url}${applicant.other_testimonials}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Testimonials
              </a>
            ) : (
              "Not attached"
            )}
          </p>
        </div>
        <div className="card-footer text-end">
          <div className="d-flex gap-2">
            {/* <button onClick={() => handleDelete(applicant.id)} className="btn">
              {loading ? "Deleting..." : "Delete"}
              
            </button> */}
            <button
              onClick={() => navigate(-1)} // navigate back to the previous page
              className="btn btn-danger"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicantDetail;
