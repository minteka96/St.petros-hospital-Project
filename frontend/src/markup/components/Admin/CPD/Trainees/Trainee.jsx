import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
const api_url = import.meta.env.VITE_API_URL
import { Link } from 'react-router-dom';

function Trainee() {
const{schedule_id}=useParams();
const [trainees, setTrainees] = useState([]);
console.log("trainees", trainees);
useEffect(() => {
 const fetchTrainees = async () => {
  try {
   const response = await axios.get(`${api_url}/api/trainees/${schedule_id}`);
   setTrainees(response.data);
  } catch (error) {
   console.error('Error fetching trainees:', error);
  }
 };

 fetchTrainees();
}, []);

if (trainees.length === 0) {
 return (
   <div className="py-5">
     <p className="text-center fs-5">No trainees found</p>
   </div>
 );
}

  return (
    <div className="py-5">
      <h1>Trainees</h1>
      <div>
        <table
          className="table table-bordered table-hover table-striped mx-auto"
          style={{ width: "fit-content" }}
        >
          <thead>
            <tr>
              <th className="px-3">S/N</th>
              <th className="px-3">Full Name</th>
              <th className="px-3">Sex</th>
              <th className="px-3">Phone</th>
              <th className="px-3">Profession</th>
              <th className="px-3">CBE info</th>
              <th className="px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {trainees
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by created_at
              .map((trainee, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{`${trainee.first_name} ${trainee.last_name} ${trainee.middle_name}`}</td>
                  <td>{trainee.sex}</td>
                  <td>{trainee.phone}</td>
                  <td
                  >
                    {trainee.profession}
                  </td>
                  <td>{ trainee.account_number}</td>
                  <td className="d-flex gap-2">
                      {/* <>
                        <button
                         
                          className="btn bg-white border border-1 "
                        >
                          <img
                            src="https://img.icons8.com/?size=100&id=114092&format=png&color=000000"
                            alt=""
                            style={{
                              maxWidth: "20px",
                              minWidth: "20px",
                              height: "20px",
                            }}
                          />
                        </button>
                        <button
                         
                          className="btn bg-white border border-1"
                        >
                          <img
                            src="https://img.icons8.com/?size=100&id=gjhtZ8keOudc&format=png&color=000000"
                            alt=""
                            style={{
                              maxWidth: "20px",
                              minWidth: "20px",
                              height: "20px",
                            }}
                          />
                        </button>
                      </> */}

                      <Link  to={`/admin/training/${trainee.trainee_id}`}
                      className="btn bg-white border border-1"
                    >
                      <img
                        src="https://img.icons8.com/?size=100&id=47863&format=png&color=000000"
                        alt=""
                        style={{
                          maxWidth: "20px",
                          minWidth: "20px",
                          height: "20px",
                        }}
                      />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Trainee