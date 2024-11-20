// src/components/Dashboard/ApplicantsTable.tsx
import { useEffect, useState } from "react";
// import className from "./applicant.module.css"
import applicantService from "../../../../Services/applicant.service";
import { useNavigate } from "react-router";

const ApplicantsTable = () => {
 const navigate = useNavigate();
  const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await applicantService.getAllApplicants();
        setApplicants(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApplicants();
  }, []);

  console.log("Applicants:", applicants);

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
        </tbody>
      </table>
    </div>
  );

};

export default ApplicantsTable;
