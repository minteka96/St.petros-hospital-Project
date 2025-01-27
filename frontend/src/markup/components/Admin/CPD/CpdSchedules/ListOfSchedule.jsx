import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useAuth } from "../../../../../contexts/AuthContext";
import { Button, Modal, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const api_url = import.meta.env.VITE_API_URL;

function ListOfSchedule() {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [updateSchedule, setUpdateSchedule] = useState(false);
  const [editSchedule, setEditSchedule] = useState({});
  const [showSchedule, setShowSchedule] = useState(false);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [schedulesPerPage] = useState(5); // Number of items per page

  // Handle schedule change for editing
  const handleScheduleChange = (e) => {
    const { name, value } = e.target;
    setEditSchedule((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fetch schedules from API
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    const fetchSchedule = async () => {
      try {
        const response = await axios.get(`${api_url}/api/cpd/schedule`, {
          headers: {
            "x-access-token": token,
          },
        });
        setSchedule(response.data);
      } catch (error) {
        console.error("Error fetching CPD schedule:", error);
      }
    };
    fetchSchedule();
  }, [refresh, token, navigate]);

  // Filter schedule by ID for editing
  const handleFilter = (id) => {
    setEditSchedule(schedule.find((item) => item.schedule_id === id));
  };

  const handleCloseSchedule = () => {
    setShowSchedule(false);
    setUpdateSchedule(false);
  };

  const handleShowSchedule = (id) => {
    setShowSchedule(true);
    handleFilter(id);
  };

  // Delete schedule
  const handleDeleteSchedule = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this schedule?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`${api_url}/api/cpd/schedule/${id}`, {
        headers: {
          "x-access-token": token,
        },
      });
      if (response.status === 200) {
        setRefresh(!refresh);
      }
    } catch (error) {
      console.error("Error deleting CPD schedule:", error);
    }
  };

  // Update schedule
  const handleUpdateSchedule = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("course_name", editSchedule.course_name);
    formData.append(
      "registration_start_date",
      editSchedule.registration_start_date
    );
    formData.append(
      "registration_end_date",
      editSchedule.registration_end_date
    );
    formData.append("course_start_date", editSchedule.course_start_date);
    formData.append("course_end_date", editSchedule.course_end_date);

    try {
      const response = await axios.put(
        `${api_url}/api/cpd/schedule/${editSchedule?.schedule_id}`,
        formData,
        {
          headers: {
            "x-access-token": token,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setUpdateSchedule(!updateSchedule);
        setRefresh(!refresh);
        setTimeout(() => {
          handleCloseSchedule();
        }, 1500);
      }
    } catch (error) {
      console.error("Error updating CPD schedule:", error);
    }
  };

  // Format dates
  const formatDateToYearMonthDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  // Update formatted dates in schedule
  schedule.forEach((item) => {
    item.registration_start_date = formatDateToYearMonthDate(
      item.registration_start_date
    );
    item.registration_end_date = formatDateToYearMonthDate(
      item.registration_end_date
    );
    item.course_start_date = formatDateToYearMonthDate(item.course_start_date);
    item.course_end_date = formatDateToYearMonthDate(item.course_end_date);
  });

  // Pagination logic
  const indexOfLastSchedule = currentPage * schedulesPerPage;
  const indexOfFirstSchedule = indexOfLastSchedule - schedulesPerPage;
  const currentSchedules = schedule.slice(
    indexOfFirstSchedule,
    indexOfLastSchedule
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container py-5">
      <h2 className="text-gray">List of Schedule</h2>
      <div id="printable-area">
        <table className="table table-bordered table-hover table-striped mx-auto">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Course Name</th>
              <th>Registration Start Date</th>
              <th>Registration End Date</th>
              <th>Registration</th>
              <th>Training Start Date</th>
              <th>Training End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentSchedules
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
              .map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.course_name}</td>
                  <td>{formatDate(item.registration_start_date)}</td>
                  <td>{formatDate(item.registration_end_date)}</td>
                  <td
                    className={
                      item.registration_status ? "text-danger" : "text-success"
                    }
                  >
                    {item.registration_status ? "Closed" : "Open"}
                  </td>
                  <td>{formatDate(item.course_start_date)}</td>
                  <td>{formatDate(item.course_end_date)}</td>
                  <td className="d-flex gap-2">
                    {!item.registration_status && (
                      <>
                        <button
                          onClick={() => handleShowSchedule(item.schedule_id)}
                          className="btn bg-white border"
                        >
                          <img
                            src="https://img.icons8.com/?size=100&id=114092&format=png&color=000000"
                            alt="Edit"
                            style={{
                              maxWidth: "20px",
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </button>
                        <button
                          onClick={() => handleDeleteSchedule(item.schedule_id)}
                          className="btn bg-white border"
                        >
                          <img
                            src="https://img.icons8.com/?size=100&id=gjhtZ8keOudc&format=png&color=000000"
                            alt="Delete"
                            style={{
                              maxWidth: "20px",
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </button>
                      </>
                    )}
                    <Link
                      to={`/admin/cpd/check-exam/${item.schedule_id}/${item.course_name}`}
                      className="btn bg-white border border-1 "
                    >
                      <img
                        src="https://img.icons8.com/?size=100&id=zo9eHF24MB3R&format=png&color=000000"
                        alt="Check Exam"
                        style={{
                          maxWidth: "20px",
                          minWidth: "20px",
                          height: "20px",
                        }}
                      />
                    </Link>
                    <Link
                      to={`/admin/cpd/trainees/${item.schedule_id}`}
                      className="btn bg-white border border-1"
                    >
                      <img
                        src="https://img.icons8.com/?size=100&id=47863&format=png&color=000000"
                        alt="Trainees"
                        style={{
                          maxWidth: "20px",
                          width: "20px",
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

      {/* Modal for editing schedule */}
      <Modal
        show={showSchedule}
        onHide={handleCloseSchedule}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Schedule for {editSchedule.course_name || "N/A"} Course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdateSchedule}>
            <div className="mb-3">
              {updateSchedule && (
                <div className="alert alert-success py-1">
                  Schedule updated successfully
                </div>
              )}
              <label className="form-label">Registration Start Date</label>
              <input
                type="date"
                className="form-control"
                name="registration_start_date"
                onChange={handleScheduleChange}
                min={new Date().toISOString().split("T")[0]}
              />
              <label className="form-label">Registration End Date</label>
              <input
                type="date"
                className="form-control"
                name="registration_end_date"
                onChange={handleScheduleChange}
                min={new Date().toISOString().split("T")[0]}
              />
              <label className="form-label">Training Start Date</label>
              <input
                type="date"
                className="form-control"
                name="course_start_date"
                onChange={handleScheduleChange}
                min={new Date().toISOString().split("T")[0]}
              />
              <label className="form-label">Training End Date</label>
              <input
                type="date"
                className="form-control"
                name="course_end_date"
                onChange={handleScheduleChange}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update Schedule
            </button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Pagination Controls */}
      <nav>
        <ul className="pagination justify-content-center">
          {[...Array(Math.ceil(schedule.length / schedulesPerPage))].map(
            (_, index) => (
              <li className="page-item" key={index}>
                <button
                  className="page-link"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
}

export default ListOfSchedule;
