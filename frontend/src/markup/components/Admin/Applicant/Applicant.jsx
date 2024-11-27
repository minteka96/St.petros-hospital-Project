// src/components/Dashboard/ApplicantsTable.tsx
import { useEffect, useState } from "react";
// import className from "./applicant.module.css"
import applicantService from "../../../../Services/applicant.service";
import { useAuth } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router";

const ApplicantsTable = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  
 const navigate = useNavigate();
  const [applicants, setApplicants] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
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

  const deleteAll=async()=>{
    if(confirmDelete){
      setLoading(true);
      try {
        await applicantService.deleteAllApplicants();
        const response = await applicantService.getAllApplicants();
        setLoading(false);
        setApplicants(response.data);
      } catch (error) {
        console.error(error);
      }
      
    }
    setConfirmDelete(!confirmDelete);
  }

  return (
    <div className="p-4">
        <h2 className="text-gray">Applicants</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
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
                <button onClick={ () => navigate(`/admin/applicant/${applicant.id}`)} className=" btn  btn-sm">View</button>
              </td>
            </tr>
          ))}
          {applicants.length === 0 && <tr><td colSpan="6">No Applicants Found</td></tr>}
          {applicants.length !== 0 &&<button onClick={deleteAll} className="btn btn-danger">{loading ? "loading.." :confirmDelete ? "sure to delete" : "Delete All Applicants"}</button>}
          {confirmDelete && <button className="btn btn-danger" onClick={()=>{setConfirmDelete(false)}}>no</button>}
        </tbody>
      </table>
    </div>
  );

};

export default ApplicantsTable;
