import { useEffect, useState } from "react";
import applicantService from "../../../../Services/applicant.service";
import { useAuth } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router";

const ApplicantsTable = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uniquePosition, setUniquePosition] = useState([]);
  const [filteredApplicants, setFilteredApplicants] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // Fetch all applicants
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchApplicants = async () => {
      try {
        const response = await applicantService.getAllApplicants(token);
        setApplicants(response.data);
        setFilteredApplicants(response.data);

        const uniquePositions = response.data.map(
          (applicant) => applicant?.position_applied_for
        );
        setUniquePosition([...new Set(uniquePositions)]);
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };

    fetchApplicants();
  }, [token, navigate, refresh]);

  // Decide deletion option
  const deleteOption = (option) => {
    if (option.length === applicants.length) {
      deleteAll();
    } else {
      deleteApplicantByJobTitle(option[0].position_applied_for);
    }
  };

  // Delete all applicants
  const deleteAll = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all applicants?"
    );
    if (confirmDelete) {
      setLoading(true);
      try {
        await applicantService.deleteAllApplicants(token);
        const response = await applicantService.getAllApplicants(token);
        setApplicants(response.data);
        setFilteredApplicants(response.data);
        setRefresh(!refresh);
      } catch (error) {
        console.error("Error deleting all applicants:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Delete applicants by vacancy ID
  const deleteApplicantByJobTitle = async (jobTitle) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete applicants for this position?"
    );
    if (confirmDelete) {
      setLoading(true);
      try {
        await applicantService.deleteApplicantByJobTitle(jobTitle, token);
        const response = await applicantService.getAllApplicants(token);
        setApplicants(response.data);
        setFilteredApplicants(response.data);
        setRefresh(!refresh);
      } catch (error) {
        console.error("Error deleting applicants by vacancy ID:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Filter applicants by position
  const filterApplicants = (position) => {
    const filtered = applicants.filter(
      (applicant) => applicant.position_applied_for === position
    );
    setFilteredApplicants(filtered);
  };

  // Print functionality
  const handlePrint = () => {
    const printContent = document.getElementById("printable-area").innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // Reset view after print
  };

  return (
    <div className="p-4">
      <h2 className="text-gray">Applicants</h2>
      <div className="d-flex justify-content-between mb-3">
        <div>
          <button
            className="btn me-2"
            style={{
              width: "150px",
              color: "black",
              fontSize: "14px",
              backgroundColor: "#DFEEED",
              border: "1px solid #2A8C84",
            }}
            onClick={() => setFilteredApplicants(applicants)}
          >
            All Applicants
          </button>
          {uniquePosition?.length > 1 &&
            uniquePosition.map((position) => (
              <button
                key={position}
                className="btn me-2"
                style={{
                  width: "150px",
                  color: "black",
                  fontSize: "14px",
                  backgroundColor: "#DFEEED",
                  border: "1px solid #2A8C84",
                }}
                onClick={() => filterApplicants(position)}
              >
                {position}
              </button>
            ))}
        </div>
        <button className="btn btn-primary" onClick={handlePrint}>
          Print Report
        </button>
      </div>
      <div id="printable-area">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Position</th>
              <th>CV File</th>
              <th>Other Testimonials</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplicants.map((applicant, index) => (
              <tr key={applicant.id}>
                <td>{index + 1}</td>
                <td>
                  {applicant.first_name} {applicant.last_name}
                </td>
                <td>{applicant.email_address}</td>
                <td>{applicant.phone_number}</td>
                <td>{applicant.position_applied_for}</td>
                <td>
                  {applicant.cv_file_path ? (
                    <span className="badge bg-success">Attached</span>
                  ) : (
                    <span className="badge bg-danger">Not Attached</span>
                  )}
                </td>
                <td>
                  {applicant.other_testimonials ? (
                    <span className="badge bg-success">Attached</span>
                  ) : (
                    <span className="badge bg-danger">Not Attached</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => navigate(`/admin/applicant/${applicant.id}`)}
                    className="btn btn-primary btn-sm"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {filteredApplicants.length > 0 && (
        <button
          onClick={() => deleteOption(filteredApplicants)}
          className="btn btn-danger mt-3"
        >
          {loading ? "Loading..." : "Delete Selected Applicants"}
        </button>
      )} */}
    </div>
  );
};

export default ApplicantsTable;
