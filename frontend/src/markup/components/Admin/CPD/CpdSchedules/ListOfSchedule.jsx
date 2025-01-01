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
  const [filteredSchedule, setFilteredSchedule] = useState({});
  const [updateSchedule, setUpdateSchedule] = useState(false);
  const [EditSchedule, setEditSchedule] = useState({});

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
  }, []);

  // collect data with filter by id
  const handleFilter = (id) => {
    setEditSchedule(schedule.find((schedule) => schedule.schedule_id === id));
  };

  const [showSchedule, setShowSchedule] = useState(false);

  const handleCloseSchedule = () => setShowSchedule(false);
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
  // format dates
  schedule.map((schedule) => {
    schedule.registration_start_date = new Date(
      schedule.registration_start_date
    ).toLocaleDateString();
    schedule.registration_end_date = new Date(
      schedule.registration_end_date
    ).toLocaleDateString();
    schedule.course_start_date = new Date(
      schedule.course_start_date
    ).toLocaleDateString();
    schedule.course_end_date = new Date(
      schedule.course_end_date
    ).toLocaleDateString();
  });

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
              <th className="px-3">Training Start Date</th>
              <th className="px-3">Training End Date</th>
              <th className="px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((schedule, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{schedule.course_name}</td>
                <td>{schedule.registration_start_date}</td>
                <td>{schedule.registration_end_date}</td>
                <td>{schedule.course_start_date}</td>
                <td>{schedule.course_end_date}</td>
                <td className="d-flex gap-2">
                  <button
                    onClick={() => handleShowSchedule(schedule.schedule_id)}
                    className="btn bg-white border border-1 "
                  >
                    <img
                      src="https://img.icons8.com/?size=100&id=114092&format=png&color=000000"
                      alt=""
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                  <button className="btn bg-white border border-1">
                    <img
                      src="https://img.icons8.com/?size=100&id=gjhtZ8keOudc&format=png&color=000000"
                      alt=""
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
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
              Schedule {EditSchedule.course_name} Course
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="" onSubmit={handleSchedule}>
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
                  value={EditSchedule.registration_start_date}
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
