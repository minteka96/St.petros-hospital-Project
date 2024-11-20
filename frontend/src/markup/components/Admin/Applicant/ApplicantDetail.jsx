import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // import useParams to get the URL parameters
import applicantService from "../../../../Services/applicant.service";
const api_url = import.meta.env.VITE_API_URL;

function ApplicantDetail() {
  const [applicant, setApplicant] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); // useParams to extract the 'id' from the URL
  const navigate = useNavigate(); // For the 'Close' button functionality

  useEffect(() => {
    // Get applicant by id
    const fetchApplicant = async () => {
      try {
        const response = await applicantService.getApplicantById(id);
        setApplicant(response.data);
      } catch (error) {
        console.error("Error fetching applicant data:", error);
      }
    };
    fetchApplicant();
  }, [id]); // Make sure the effect runs when the id changes

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    const printableContent = `
      <html>
      <head>
        <title>Print Applicant Details</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }
          .section {
            margin-bottom: 20px;
          }
          .section h5 {
            margin-bottom: 10px;
          }
          .link {
            text-decoration: none;
            color: blue;
          }
        </style>
      </head>
      <body>
        <h1>${applicant.first_name} ${applicant.last_name}'s Details</h1>
        <div class="section">
          <h5>Personal Details</h5>
          <p><strong>Email:</strong> ${applicant.email_address || "N/A"}</p>
          <p><strong>Position:</strong> ${applicant.position_applied_for || "N/A"}</p>
        </div>
        <div class="section">
          <h5>CV File</h5>
          ${
            applicant.cv_file_path
              ? `<a class="link" href="${api_url}${applicant.cv_file_path}" target="_blank">View CV</a>`
              : "Not attached"
          }
        </div>
        <div class="section">
          <h5>Other Testimonials</h5>
          ${
            applicant.other_testimonials
              ? `<a class="link" href="${api_url}${applicant.other_testimonials}" target="_blank">View Testimonials</a>`
              : "Not attached"
          }
        </div>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(printableContent);
    printWindow.document.close();
    printWindow.print();
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await applicantService.deleteApplicant(id);
      navigate("/admin/applicant"); // Redirect to the applicants page after deletion
    } catch (error) {
      console.error("Error deleting applicant:", error);
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-header text-white">
          <h3 className="mb-0">
            {applicant.first_name} {applicant.last_name}'s Details
          </h3>
        </div>
        <div className="card-body">
          <h5>Personal Details</h5>
          <p>
            <strong>Email:</strong> {applicant.email_address}
          </p>
          <p>
            <strong>Position:</strong> {applicant.position_applied_for}
          </p>

          <h5 className="mt-4">CV File</h5>
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

          <h5 className="mt-4">Other Testimonials</h5>
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
            <button onClick={handlePrint} className="btn">
              Print
            </button>
            <button onClick={() => handleDelete(applicant.id)} className="btn">
              {loading ? "Deleting..." : "Delete"}
              
            </button>
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
