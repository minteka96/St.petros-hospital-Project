import React, { useEffect, useState } from "react";
import applicantService from "../../../../Services/applicant.service";
import getAllJobs from "../../../../Services/jobs.service";
import { useAuth } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { FaCheck, FaTimes, FaEye } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { ToastContainer, toast } from "react-toastify"; // For success toast
import "react-toastify/dist/ReactToastify.css"; // Toast CSS

const ApplicantsPage = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const navigate = useNavigate();

  const [applicants, setApplicants] = useState([]);
  const [filteredApplicants, setFilteredApplicants] = useState([]);
  const [vacancies, setVacancies] = useState([]);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const [showApplicantModal, setShowApplicantModal] = useState(false);
  const [applicantCounts, setApplicantCounts] = useState({});

  const applicantsPerPage = 10;
  const api_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchVacanciesAndApplicants = async () => {
      try {
        setLoading(true);
        const [vacanciesResponse, applicantsResponse] = await Promise.all([
          getAllJobs.getAllJobs(token),
          applicantService.getAllApplicants(token),
        ]);

        // Filter active jobs
        const activeVacancies = vacanciesResponse.filter(
          (vacancy) => vacancy.status === 1
        );

        setVacancies(activeVacancies);

        // Filter applicants for active jobs
        const filteredApplicants = applicantsResponse.data.filter((applicant) =>
          activeVacancies.some(
            (vacancy) => vacancy.job_title === applicant.position_applied_for
          )
        );

        setApplicants(filteredApplicants);
        setFilteredApplicants(filteredApplicants);

        // Calculate counts for active jobs and applicants
        const counts = activeVacancies.reduce((acc, vacancy) => {
          const count = filteredApplicants.filter(
            (applicant) => applicant.position_applied_for === vacancy.job_title
          ).length;
          acc[vacancy.job_title] = count;
          return acc;
        }, {});
        setApplicantCounts(counts);

        // Calculate stats
        const accepted = filteredApplicants.filter(
          (applicant) => applicant.Status === "Approved"
        ).length;
        const rejected = filteredApplicants.filter(
          (applicant) => applicant.Status === "Rejected"
        ).length;
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVacanciesAndApplicants();
  }, [token, navigate]);

  const handleJobTitleChange = (e) => {
    const jobTitle = e.target.value;
    setSelectedJobTitle(jobTitle);
    setCurrentPage(1);

    if (jobTitle) {
      // Filter applicants based on the selected job title and active vacancies
      const filtered = applicants.filter(
        (applicant) =>
          applicant.position_applied_for.toLowerCase() ===
          jobTitle.toLowerCase()
      );

      const uniqueFiltered = [
        ...new Map(
          filtered.map((applicant) => [applicant.id, applicant])
        ).values(),
      ];

      setFilteredApplicants(uniqueFiltered);

      // Calculate stats for the selected job
    } else {
      // If no job title is selected, show all applicants for active jobs
      const filteredApplicantsForActiveJobs = applicants.filter((applicant) =>
        activeVacancies.some(
          (vacancy) => vacancy.job_title === applicant.position_applied_for
        )
      );

      const uniqueApplicants = [
        ...new Map(
          filteredApplicantsForActiveJobs.map((applicant) => [
            applicant.id,
            applicant,
          ])
        ).values(),
      ];
      setFilteredApplicants(uniqueApplicants);

      // Reset stats for all applicants
    }
  };

  const totalPages = Math.ceil(filteredApplicants.length / applicantsPerPage);
  const currentApplicants = filteredApplicants.slice(
    (currentPage - 1) * applicantsPerPage,
    currentPage * applicantsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewApplicant = (applicant) => {
    setSelectedApplicant(applicant);
    setShowApplicantModal(true);
  };

  const handleAction = async (applicantId, action) => {
    setLoading(true);
    try {
      const status = action === "approve" ? "Approved" : "Rejected";

      // Update status in the database
      await applicantService.updateApplicantStatus(applicantId, status, token);

      // Show success toast
      toast.success(`Applicant ${status.toLowerCase()} successfully!`);

      // Fetch the updated applicants list from the backend
      const applicantsResponse = await applicantService.getAllApplicants(token);
      const vacanciesResponse = await getAllJobs.getAllJobs(token);

      // Filter active vacancies (only active jobs)
      const activeVacancies = vacanciesResponse.filter(
        (vacancy) => vacancy.status === 1
      );

      // Filter applicants for active jobs
      const filteredApplicants = applicantsResponse.data.filter((applicant) =>
        activeVacancies.some(
          (vacancy) => vacancy.job_title === applicant.position_applied_for
        )
      );

      // Set applicants and filtered applicants with active jobs only
      setApplicants(filteredApplicants);
      setFilteredApplicants(filteredApplicants);

      // Recalculate stats for active job applicants
      const accepted = filteredApplicants.filter(
        (applicant) => applicant.Status === "Approved"
      ).length;
      const rejected = filteredApplicants.filter(
        (applicant) => applicant.Status === "Rejected"
      ).length;
    } catch (error) {
      console.error(`Error ${action}ing applicant:`, error);
      toast.error(`Error ${action}ing applicant!`);
    } finally {
      setConfirmationModal(null);
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Applicants List</h2>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <label className="form-label me-2">Filter by Job Title:</label>
          <select
            className="form-select"
            value={selectedJobTitle}
            onChange={handleJobTitleChange}
          >
            <option value="">All Job Titles</option>
            {vacancies.map((vacancy) => (
              <option key={vacancy.id} value={vacancy.job_title}>
                {vacancy.job_title}
              </option>
            ))}
          </select>
        </div>
      </div>
      {loading && (
        <div className="text-center mb-3">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-light">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Position Applied For</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentApplicants.length > 0 ? (
              currentApplicants.map((applicant, index) => (
                <tr key={applicant.id}>
                  <td>{(currentPage - 1) * applicantsPerPage + index + 1}</td>
                  <td>{`${applicant.first_name} ${applicant.last_name}`}</td>
                  <td>{applicant.email_address || "N/A"}</td>
                  <td>{applicant.phone_number || "N/A"}</td>
                  <td>{applicant.position_applied_for || "N/A"}</td>
                  <td>
                    <span
                      className={`badge ${
                        applicant.Status === "Approved"
                          ? "bg-success"
                          : applicant.Status === "Rejected"
                          ? "bg-danger"
                          : "bg-primary"
                      }`}
                    >
                      {applicant.Status || "Pending"}
                    </span>
                  </td>
                  <td className="text-center">
                    <FaEye
                      className="text-primary me-2 cursor-pointer"
                      title="View Details"
                      onClick={() => handleViewApplicant(applicant)}
                      style={{ fontSize: "1.2rem" }}
                    />
                    {applicant.Status !== "Approved" && (
                      <FaCheck
                        className="text-success me-2 cursor-pointer"
                        title="Approve"
                        onClick={() =>
                          setConfirmationModal({
                            id: applicant.id,
                            action: "approve",
                          })
                        }
                        style={{ fontSize: "1.2rem" }}
                      />
                    )}
                    {applicant.Status !== "Rejected" && (
                      <FaTimes
                        className="text-danger cursor-pointer"
                        title="Reject"
                        onClick={() =>
                          setConfirmationModal({
                            id: applicant.id,
                            action: "reject",
                          })
                        }
                        style={{ fontSize: "1.2rem" }}
                      />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No applicants found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <Pagination className="justify-content-center mt-3">
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
      {showApplicantModal && selectedApplicant && (
        <Modal
          show={showApplicantModal}
          onHide={() => setShowApplicantModal(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Applicant Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>
              Name: {selectedApplicant.first_name} {selectedApplicant.last_name}
            </h5>
            <p>
              <strong>Email:</strong> {selectedApplicant.email_address}
            </p>
            <p>
              <strong>Phone:</strong> {selectedApplicant.phone_number}
            </p>
            <p>
              <strong>Position Applied For:</strong>{" "}
              {selectedApplicant.position_applied_for}
            </p>
            <p>
              <strong>Status:</strong> {selectedApplicant.status}
            </p>
            <p>
              <strong>Additional Info:</strong>{" "}
              {selectedApplicant.additional_information || "N/A"}
            </p>
            <p>
              <strong>CV:</strong>{" "}
              <a
                href={`${api_url}${selectedApplicant.cv_file_path}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </p>
            <p>
              <strong>Testimonials:</strong>{" "}
              <a
                href={selectedApplicant.other_testimonials}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Testimonials
              </a>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowApplicantModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {confirmationModal && (
        <Modal show={true} onHide={() => setConfirmationModal(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              {confirmationModal.action === "approve" ? "Approve" : "Reject"}{" "}
              Applicant
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to{" "}
            {confirmationModal.action === "approve" ? "approve" : "reject"} this
            applicant?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setConfirmationModal(null)}
            >
              Cancel
            </Button>
            <Button
              variant={
                confirmationModal.action === "approve" ? "success" : "danger"
              }
              onClick={() =>
                handleAction(confirmationModal.id, confirmationModal.action)
              }
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <ToastContainer /> {/* Toast container for success and error messages */}
    </div>
  );
};

export default ApplicantsPage;
