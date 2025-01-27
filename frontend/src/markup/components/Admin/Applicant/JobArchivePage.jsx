import React, { useEffect, useState } from "react";
import { Tab, Nav, Button, Table, Pagination, Modal } from "react-bootstrap";
import { FaArchive, FaExclamationCircle, FaInfoCircle } from "react-icons/fa"; // Icons
import jobService from "../../../../Services/jobs.service"; // Job service
import applicantService from "../../../../Services/applicant.service"; // Applicant service
import { useAuth } from "../../../../contexts/AuthContext"; // Auth context

const JobArchivePage = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;

  const [allJobs, setAllJobs] = useState([]);
  const [activeJobs, setActiveJobs] = useState([]);
  const [archivedJobs, setArchivedJobs] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [reportData, setReportData] = useState(null);
  const [jobDetails, setJobDetails] = useState(null);
  const [jobToArchive, setJobToArchive] = useState(null);

  const fetchJobsAndApplicants = async () => {
    if (!token) return; // If not logged in, do nothing
    setLoading(true);
    try {
      const [jobResponse, applicantResponse] = await Promise.all([
        jobService.getAllJobs(token), // Fetch all jobs
        applicantService.getAllApplicants(token), // Fetch all applicants
      ]);
      setAllJobs(jobResponse);
      setApplicants(applicantResponse.data);

      // Separate active and archived jobs based on status
      const active = jobResponse.filter((job) => job.status === 0);
      const archived = jobResponse.filter((job) => job.status !== 0);

      setActiveJobs(active);
      setArchivedJobs(archived);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobsAndApplicants();
  }, [token]);

  const handleArchiveJob = async (jobId) => {
    setLoading(true);
    try {
      const response = await jobService.archiveJob(jobId, token);
      if (response) {
        // Refresh jobs data automatically after archiving
        await fetchJobsAndApplicants();
        setShowConfirmModal(false); // Close confirmation modal
      } else {
        console.error("Failed to archive job:", response.message);
      }
    } catch (err) {
      console.error("Error archiving job:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleShowReport = (jobId, jobTitle) => {
    if (!jobTitle) {
      console.warn("Invalid job title for report generation.");
      return;
    }

    const filteredApplicants = applicants.filter(
      (applicant) => applicant.position_applied_for === jobTitle
    );

    setReportData({
      totalApplicants: filteredApplicants.length,
      acceptedApplicants: filteredApplicants.filter(
        (applicant) => applicant.Status === "Approved"
      ).length,
      rejectedApplicants: filteredApplicants.filter(
        (applicant) => applicant.Status === "Rejected"
      ).length,
    });

    setShowReportModal(true);
  };

  const handleShowInfo = (job) => {
    setJobDetails(job);
    setShowInfoModal(true);
  };

  const handleCloseReport = () => setShowReportModal(false);
  const handleCloseInfo = () => setShowInfoModal(false);
  const handleCloseConfirm = () => setShowConfirmModal(false);

  const openConfirmModal = (job) => {
    setJobToArchive(job);
    setShowConfirmModal(true);
  };

  const paginate = (array, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return array.slice(startIndex, endIndex);
  };

  const activeJobsPaginated = paginate(activeJobs, currentPage, jobsPerPage);
  const archivedJobsPaginated = paginate(
    archivedJobs,
    currentPage,
    jobsPerPage
  );

  const totalPagesActive = Math.ceil(activeJobs.length / jobsPerPage);
  const totalPagesArchived = Math.ceil(archivedJobs.length / jobsPerPage);

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Manage Job Archives</h2>
      <Tab.Container defaultActiveKey="activeJobs">
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="activeJobs">Active Jobs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="archivedJobs">Archived Jobs</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="activeJobs">
            <h4>Active Jobs</h4>
            {loading && <div>Loading...</div>}
            {!loading && (
              <>
                <Table responsive hover bordered>
                  <thead>
                    <tr>
                      <th>Job Title</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeJobsPaginated.map((job) => (
                      <tr key={job.id}>
                        <td>{job.job_title}</td>
                        <td>
                          <Button
                            variant="info"
                            onClick={() => handleShowInfo(job)}
                          >
                            <FaInfoCircle /> Info
                          </Button>
                          <Button
                            variant="warning"
                            onClick={() => openConfirmModal(job)}
                          >
                            <FaArchive /> Archive
                          </Button>
                          <Button
                            variant="info"
                            onClick={() =>
                              handleShowReport(job.id, job?.job_title)
                            }
                          >
                            <FaExclamationCircle /> Report
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Pagination>
                  {Array.from({ length: totalPagesActive }, (_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === currentPage}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                </Pagination>
              </>
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="archivedJobs">
            <h4>Archived Jobs</h4>
            {loading && <div>Loading...</div>}
            {!loading && (
              <>
                <Table responsive hover bordered>
                  <thead>
                    <tr>
                      <th>Job Title</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {archivedJobsPaginated.map((job) => (
                      <tr key={job.id}>
                        <td>{job.job_title}</td>
                        <td>
                          <Button
                            variant="info"
                            onClick={() => handleShowInfo(job)}
                          >
                            <FaInfoCircle /> Info
                          </Button>
                          <Button
                            variant="info"
                            onClick={() =>
                              handleShowReport(job.id, job.job_title)
                            }
                          >
                            <FaExclamationCircle /> Report
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Pagination>
                  {Array.from({ length: totalPagesArchived }, (_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === currentPage}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                </Pagination>
              </>
            )}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      {/* Info Modal */}
      <Modal show={showInfoModal} onHide={handleCloseInfo}>
        <Modal.Header closeButton>
          <Modal.Title>Job Information</Modal.Title>
        </Modal.Header>
        <Modal.Body className="overflow-auto" style={{ maxHeight: "70vh" }}>
          {jobDetails ? (
            <>
              <p>
                <strong>Job Title:</strong> {jobDetails.job_title}
              </p>
              <p>
                <strong>Description:</strong> {jobDetails.job_description}
              </p>
              <p>
                <strong>Address:</strong> {jobDetails.address}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(jobDetails.created_at).toLocaleString()}
              </p>
              <p>
                <strong>Deadline:</strong>{" "}
                {new Date(jobDetails.deadline).toLocaleString()}
              </p>
              <p>
                <strong>Grade:</strong> {jobDetails.job_grade}
              </p>
              <p>
                <strong>Requirements:</strong> {jobDetails.job_requirements}
              </p>
              <p>
                <strong>Qualifications:</strong> {jobDetails.qualifications}
              </p>
              <p>
                <strong>Salary:</strong> {jobDetails.salary}
              </p>
              <p>
                <strong>Terms:</strong> {jobDetails.terms}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {jobDetails.status === 0 ? "Active" : "Archived"}
              </p>
              <p>
                <strong>Last Updated:</strong>{" "}
                {new Date(jobDetails.updated_at).toLocaleString()}
              </p>
            </>
          ) : (
            <p>No job details available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInfo}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Report Modal */}
      <Modal show={showReportModal} onHide={handleCloseReport}>
        <Modal.Header closeButton>
          <Modal.Title>Job Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {reportData ? (
            <>
              <p>
                <strong>Total Applicants:</strong> {reportData.totalApplicants}
              </p>
              <p className="text-success">
                <strong>Accepted Applicants:</strong>{" "}
                {reportData.acceptedApplicants}
              </p>
              <p className="text-danger">
                <strong>Rejected Applicants:</strong>{" "}
                {reportData.rejectedApplicants}
              </p>
            </>
          ) : (
            <p>No report data available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReport}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirm Archive Modal */}
      <Modal show={showConfirmModal} onHide={handleCloseConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Archive</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to archive the job titled{" "}
          <strong>{jobToArchive?.job_title}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirm}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => handleArchiveJob(jobToArchive?.vacancy_id)}
          >
            Yes, Archive
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default JobArchivePage;
