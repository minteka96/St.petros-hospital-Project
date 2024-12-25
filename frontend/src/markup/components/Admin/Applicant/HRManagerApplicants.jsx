import React, { useEffect, useState, useRef } from "react";
import applicantService from "../../../../Services/applicant.service";
import getAllJobs from "../../../../Services/jobs.service";
import { useAuth } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { FaEye, FaPrint } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";

const HRManagerApplicants = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const navigate = useNavigate();

  const tableRef = useRef(); // Ref for the table

  const [vacancies, setVacancies] = useState([]); // Active jobs list
  const [applicants, setApplicants] = useState([]);
  const [filteredApplicants, setFilteredApplicants] = useState([]);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [viewMode, setViewMode] = useState("all"); // Modes: "all", "accepted", "rejected"
  const [showModal, setShowModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Display 10 applicants per page
  const api_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const [vacanciesResponse, applicantsResponse] = await Promise.all([
          getAllJobs.getAllJobs(token),
          applicantService.getAllApplicants(token),
        ]);

        // Filter active jobs where status === 1 (active jobs)
        const activeVacancies = vacanciesResponse.filter(
          (vacancy) => vacancy.status === 1
        );

        setVacancies(activeVacancies);
        setApplicants(applicantsResponse.data);

        // Filter applicants by matching job title
        const filtered = applicantsResponse.data.filter((applicant) =>
          activeVacancies.some(
            (vacancy) => vacancy.job_title === applicant.position_applied_for
          )
        );
        setFilteredApplicants(filtered);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [token, navigate]);

  const handleJobTitleChange = (e) => {
    const jobTitle = e.target.value;
    setSelectedJobTitle(jobTitle);
    filterApplicants(jobTitle, viewMode);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    filterApplicants(selectedJobTitle, mode);
    setCurrentPage(1); // Reset to first page when mode changes
  };

  const filterApplicants = (jobTitle, mode) => {
    let filtered = applicants;

    // Filter applicants by position matching the job titles of active jobs
    if (vacancies.length > 0) {
      filtered = filtered.filter((applicant) =>
        vacancies.some(
          (vacancy) => vacancy.job_title === applicant.position_applied_for
        )
      );
    }

    if (jobTitle) {
      filtered = filtered.filter(
        (applicant) =>
          applicant.position_applied_for.toLowerCase() ===
          jobTitle.toLowerCase()
      );
    }

    if (mode === "accepted") {
      filtered = filtered.filter(
        (applicant) => applicant.Status === "Approved"
      );
    } else if (mode === "rejected") {
      filtered = filtered.filter(
        (applicant) => applicant.Status === "Rejected"
      );
    }

    // Set status to "Pending" if not "Approved" or "Rejected"
    filtered = filtered.map((applicant) => {
      if (applicant.Status !== "Approved" && applicant.Status !== "Rejected") {
        applicant.Status = "Pending"; // Assign "Pending" if status is not "Approved" or "Rejected"
      }
      return applicant;
    });

    setFilteredApplicants(filtered);
  };

  const handleViewApplicant = (applicant) => {
    setSelectedApplicant(applicant);
    setShowModal(true);
  };

  const downloadFile = (filePath) => {
    if (filePath) {
      const url = api_url + filePath;
      window.open(url, "_blank");
    } else {
      alert("No file available.");
    }
  };

  const handlePrint = () => {
    if (tableRef.current) {
      const printContent = tableRef.current.innerHTML;
      const originalContent = document.body.innerHTML;

      document.body.innerHTML = printContent;
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload(); // Refresh the page to restore state
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredApplicants.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredApplicants.length / itemsPerPage);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">HR Manager - Applicants</h2>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <label className="form-label me-2">Filter by Job Title:</label>
          <select
            className="form-select"
            value={selectedJobTitle}
            onChange={handleJobTitleChange}
          >
            <option value="">All Active Job Titles</option>
            {vacancies.map((vacancy) => (
              <option key={vacancy.id} value={vacancy.job_title}>
                {vacancy.job_title}
              </option>
            ))}
          </select>
        </div>
        <div className="btn-group">
          <button
            className={`btn ${
              viewMode === "all" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => handleViewModeChange("all")}
          >
            All
          </button>
          <button
            className={`btn ${
              viewMode === "accepted" ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => handleViewModeChange("accepted")}
          >
            Accepted
          </button>
          <button
            className={`btn ${
              viewMode === "rejected" ? "btn-danger" : "btn-outline-danger"
            }`}
            onClick={() => handleViewModeChange("rejected")}
          >
            Rejected
          </button>
        </div>
        <button className="btn btn-info" onClick={handlePrint}>
          <FaPrint /> Print
        </button>
      </div>

      <div className="table-responsive" ref={tableRef}>
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
            {currentItems.length > 0 ? (
              currentItems.map((applicant, index) => (
                <tr key={applicant.id}>
                  <td>{index + 1 + indexOfFirstItem}</td>
                  <td>
                    {applicant.first_name} {applicant.last_name}
                  </td>
                  <td>{applicant.email_address}</td>
                  <td>{applicant.phone_number}</td>
                  <td>{applicant.position_applied_for}</td>
                  <td>
                    <span
                      className={`badge ${
                        applicant.Status === "Approved"
                          ? "bg-success"
                          : applicant.Status === "Rejected"
                          ? "bg-danger"
                          : "bg-warning" // Using "bg-warning" for "Pending" status
                      }`}
                    >
                      {applicant.Status}
                    </span>
                  </td>
                  <td className="text-center">
                    <FaEye
                      className="text-primary cursor-pointer"
                      title="View Details"
                      onClick={() => handleViewApplicant(applicant)}
                      style={{ fontSize: "1.2rem" }}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No applicants found for the selected job title.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination className="justify-content-center">
        {[...Array(totalPages).keys()].map((page) => (
          <Pagination.Item
            key={page + 1}
            active={page + 1 === currentPage}
            onClick={() => setCurrentPage(page + 1)}
          >
            {page + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      {showModal && selectedApplicant && (
        <Modal show={true} onHide={() => setShowModal(false)} centered>
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
              <strong>Status:</strong>{" "}
              <span
                className={`badge ${
                  selectedApplicant.Status === "Approved"
                    ? "bg-success"
                    : selectedApplicant.Status === "Rejected"
                    ? "bg-danger"
                    : "bg-warning" // If status is neither "Approved" nor "Rejected", show "Pending"
                }`}
              >
                {selectedApplicant.Status === "Approved" ||
                selectedApplicant.Status === "Rejected"
                  ? selectedApplicant.Status
                  : "Pending"}{" "}
                {/* If not approved or rejected, show "Pending" */}
              </span>
            </p>
            <p>
              <strong>Additional Information:</strong>{" "}
              {selectedApplicant.additional_information}
            </p>
            <p>
              <strong>CV/Resume:</strong>{" "}
              <button
                className="btn btn-link"
                onClick={() => downloadFile(selectedApplicant.cv_file_path)}
              >
                View CV
              </button>
            </p>
            <p>
              <strong>Other Testimonials:</strong>{" "}
              <button
                className="btn btn-link"
                onClick={() =>
                  downloadFile(selectedApplicant.other_testimonials)
                }
              >
                View Testimonials
              </button>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default HRManagerApplicants;
