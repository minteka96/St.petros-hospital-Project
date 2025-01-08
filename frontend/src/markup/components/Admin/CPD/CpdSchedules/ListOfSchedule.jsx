import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useAuth } from "../../../../../contexts/AuthContext";
import { Button, Modal } from "react-bootstrap";
const api_url = import.meta.env.VITE_API_URL;

function ListOfSchedule() {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [updateSchedule, setUpdateSchedule] = useState(false);
  const [EditSchedule, setEditSchedule] = useState({});
  console.log("EditSchedule", EditSchedule);
  const handleScheduleChange = (e) => {
    const { name, value } = e.target;
    setEditSchedule((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
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

  // collect data with filter by id
  const handleFilter = (id) => {
    setEditSchedule(schedule.find((schedule) => schedule.schedule_id === id));
  };

  const [showSchedule, setShowSchedule] = useState(false);

  const handleCloseSchedule = () => {
    setShowSchedule(false);
    setUpdateSchedule(false);
  };
  const handleShowSchedule = (id) => {
    setShowSchedule(true);
    handleFilter(id);
  };

  const handleSchedule = (e) => {
    const { name, value } = e.target;
    setEditSchedule((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDeleteSchedule = async (id) => {
    // confirm delete by alert
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this schedule?"
    );
    if (!confirmDelete) {
      return;
    }

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

  const handleUpdateSchedule = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("course_name", EditSchedule.course_name);
    formData.append(
      "registration_start_date",
      EditSchedule.registration_start_date
    );
    formData.append(
      "registration_end_date",
      EditSchedule.registration_end_date
    );
    formData.append("course_start_date", EditSchedule.course_start_date);
    formData.append("course_end_date", EditSchedule.course_end_date);
    try {
      console.log("EditSchedule", EditSchedule);
      const response = await axios.put(
        `${api_url}/api/cpd/schedule/${EditSchedule?.schedule_id}`,
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
  // format dates like December 1, 2023
  const formatDateToYearMonthDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  schedule.map((schedule) => {
    schedule.registration_start_date = formatDateToYearMonthDate(
      schedule.registration_start_date
    );
    schedule.registration_end_date = formatDateToYearMonthDate(
      schedule.registration_end_date
    );
    schedule.course_start_date = formatDateToYearMonthDate(
      schedule.course_start_date
    );
    schedule.course_end_date = formatDateToYearMonthDate(
      schedule.course_end_date
    );
  });

  const formatdate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="container py-5">
      <h2 className="text-gray">List of Schedule</h2>
      <div className="d-flex justify-content-between mb-3"></div>
      <div id="printable-area">
        <table
          className="table table-bordered table-hover table-striped mx-auto"
          style={{ width: "fit-content" }}
        >
          <thead>
            <tr>
              <th className="px-3">S/N</th>
              <th className="px-3">Course Name</th>
              <th className="px-3">Registration Start Date</th>
              <th className="px-3">Registration End Date</th>
              <th className="px-3">Registration Expiry</th>
              <th className="px-3">Training Start Date</th>
              <th className="px-3">Training End Date</th>
              <th className="px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {schedule
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by created_at
              .map((schedule, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{schedule.course_name}</td>
                  <td>{formatdate(schedule.registration_start_date)}</td>
                  <td>{formatdate(schedule.registration_end_date)}</td>
                  <td
                    className={
                      schedule.registration_status
                        ? "text-danger"
                        : "text-success"
                    }
                  >
                    {schedule.registration_status ? "Closed" : "Open"}
                  </td>
                  <td>{formatdate(schedule.course_start_date)}</td>
                  <td>{formatdate(schedule.course_end_date)}</td>
                  <td className="d-flex gap-2">
                    {!schedule?.registration_status ? (
                      <>
                        <button
                          onClick={() =>
                            handleShowSchedule(schedule.schedule_id)
                          }
                          className="btn bg-white border border-1 "
                        >
                          <img
                            src="https://img.icons8.com/?size=100&id=114092&format=png&color=000000"
                            alt=""
                            style={{ width: "20px", height: "20px" }}
                          />
                        </button>
                        <button
                          onClick={() =>
                            handleDeleteSchedule(schedule.schedule_id)
                          }
                          className="btn bg-white border border-1"
                        >
                          <img
                            src="https://img.icons8.com/?size=100&id=gjhtZ8keOudc&format=png&color=000000"
                            alt=""
                            style={{ width: "20px", height: "20px" }}
                          />
                        </button>
                      </>
                    ) : null}

                    <button className="btn bg-white border border-1">
                      <img
                        src="https://img.icons8.com/?size=100&id=47863&format=png&color=000000"
                        alt=""
                        style={{ width: "20px", height: "20px" }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Modal
          show={showSchedule}
          onHide={handleCloseSchedule}
          backdrop={true}
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Schedule for {EditSchedule.course_name} Course
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="" onSubmit={handleUpdateSchedule}>
              <div className="mb-3">
                {updateSchedule && (
                  <div className="alert alert-success py-1">
                    Schedule created successfully
                  </div>
                )}
                <label htmlFor="" className="form-label">
                  Registration start date{" "}
                  <span className="text-muted text-sm">
                    (leave blank to use existing date)
                  </span>
                </label>
                <input
                  type="date"
                  className="form-control mb-3"
                  name="registration_start_date"
                  onChange={handleScheduleChange}
                  min={new Date().toISOString().split("T")[0]}
                />

                <label htmlFor="" className="form-label">
                  Registration end date{" "}
                  <span className="text-muted text-sm">
                    (leave blank to use existing date)
                  </span>
                </label>
                <input
                  type="date"
                  className="form-control mb-3"
                  name="registration_end_date"
                  onChange={handleScheduleChange}
                  min={new Date().toISOString().split("T")[0]}
                />
                <label htmlFor="" className="form-label">
                  Training start date{" "}
                  <span className="text-muted text-sm">
                    (leave blank to use existing date)
                  </span>
                </label>
                <input
                  type="date"
                  className="form-control mb-3"
                  name="course_start_date"
                  onChange={handleScheduleChange}
                  min={new Date().toISOString().split("T")[0]}
                />
                <label htmlFor="" className="form-label">
                  Training end date{" "}
                  <span className="text-muted text-sm">
                    (leave blank to use existing date)
                  </span>
                </label>
                <input
                  type="date"
                  className="form-control mb-3"
                  name="course_end_date"
                  onChange={handleScheduleChange}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <button className="btn " variant="primary" type="submit">
                Save
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseSchedule}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default ListOfSchedule;
