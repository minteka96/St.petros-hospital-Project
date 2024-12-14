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

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    const fetchApplicants = async () => {
      try {
        const response = await applicantService.getAllApplicants(token);
        setApplicants(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApplicants();
  }, [token]);

  const deleteAll = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all applicants?"
    );
    if (confirmDelete) {
      try {
        await applicantService.deleteAllApplicants();
        const response = await applicantService.getAllApplicants();
        setLoading(false);
        setApplicants(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handlePrint = () => {
    const printContent = document.getElementById("printable-area").innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // Reload to reset the original view
  };

  return (
    <div className="p-4">
      <h2 className="text-gray">Applicants</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={handlePrint}>
          Print Report
        </button>
      </div>
      <div id="printable-area">
        <h3 className="print-title"></h3>
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
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
            {applicants.map((applicant) => (
              <tr key={applicant.id}>
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
            {applicants.length === 0 && (
              <tr>
                <td colSpan="7">No Applicants Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {applicants.length !== 0 && (
        <button onClick={deleteAll} className="btn btn-danger mt-3">
          {loading ? "Loading.." : "Delete All Applicants"}
        </button>
      )}
    </div>
  );
};

export default ApplicantsTable;
