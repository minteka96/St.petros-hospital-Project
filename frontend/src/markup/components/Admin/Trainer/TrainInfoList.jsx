
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router";
import trainInfoService from "../../../../Services/trainInfo.service";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { ToastContainer, toast } from "react-toastify";

const TrainInfoList = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const navigate = useNavigate();

  const [trainees, setTrainees] = useState([]);
  const [filteredTrainees, setFilteredTrainees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedTrainee, setSelectedTrainee] = useState(null);
  const [showTraineeModal, setShowTraineeModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    sex: "",
    phone: "",
    profession: "",
    account_number: ""
  });

  const traineesPerPage = 10;

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchTrainees = async () => {
      try {
        setLoading(true);
        const response = await trainInfoService.getAllTraineesInfo(token);
        const traineeData = response.data ? response.data : response;
        
        if (Array.isArray(traineeData)) {
          setTrainees(traineeData);
          setFilteredTrainees(traineeData);
        } else {
          setTrainees([]);
          setFilteredTrainees([]);
          toast.error("Invalid data format received");
        }
      } catch (err) {
        console.error("Error fetching trainees:", err);
        toast.error("Failed to fetch trainees");
        setTrainees([]);
        setFilteredTrainees([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainees();
  }, [token, navigate]);

  const handleViewTrainee = (trainee) => {
    setSelectedTrainee(trainee);
    setShowTraineeModal(true);
  };

  const handleEditTrainee = (trainee) => {
    setSelectedTrainee(trainee);
    setEditFormData(trainee);
    setShowEditModal(true);
  };

  const handleDeleteTrainee = async (traineeId) => {
    if (window.confirm("Are you sure you want to delete this trainee?")) {
      try {
        await trainInfoService.deleteTrainee(traineeId, token);
        toast.success("Trainee deleted successfully!");
        // Refresh the trainees list
        const response = await trainInfoService.getAllTraineesInfo(token);
        setTrainees(response.data);
        setFilteredTrainees(response.data);
      } catch (error) {
        toast.error("Failed to delete trainee");
        console.error("Delete error:", error);
      }
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await trainInfoService.updateTrainee(selectedTrainee.id, editFormData, token);
      toast.success("Trainee updated successfully!");
      setShowEditModal(false);
      // Refresh the trainees list
      const response = await trainInfoService.getAllTraineesInfo(token);
      setTrainees(response.data);
      setFilteredTrainees(response.data);
    } catch (error) {
      toast.error("Failed to update trainee");
      console.error("Update error:", error);
    }
  };

  const totalPages = Math.ceil(filteredTrainees.length / traineesPerPage);
  const currentTrainees = filteredTrainees.slice(
    (currentPage - 1) * traineesPerPage,
    currentPage * traineesPerPage
  );

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Trainees List</h2>
      
      {loading && (
        <div className="text-center mb-3">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-light">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Profession</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTrainees.map((trainee, index) => (
              <tr key={trainee.id}>
                <td>{(currentPage - 1) * traineesPerPage + index + 1}</td>
                <td>{`${trainee.first_name} ${trainee.last_name}`}</td>
                <td>{trainee.email || "N/A"}</td>
                <td>{trainee.phone || "N/A"}</td>
                <td>{trainee.profession || "N/A"}</td>
                <td>
                  <FaEye
                    className="text-primary me-2 cursor-pointer"
                    title="View Details"
                    onClick={() => handleViewTrainee(trainee)}
                    style={{ fontSize: "1.2rem" }}
                  />
                  <FaEdit
                    className="text-warning me-2 cursor-pointer"
                    title="Edit Trainee"
                    onClick={() => handleEditTrainee(trainee)}
                    style={{ fontSize: "1.2rem" }}
                  />
                  <FaTrash
                    className="text-danger cursor-pointer"
                    title="Delete Trainee"
                    onClick={() => handleDeleteTrainee(trainee.id)}
                    style={{ fontSize: "1.2rem" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="justify-content-center mt-3">
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={currentPage === index + 1}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}

      {/* Trainee Details Modal */}
      <Modal
        show={showTraineeModal}
        onHide={() => setShowTraineeModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Trainee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTrainee && (
            <>
              <h5>
                Name: {selectedTrainee.first_name} {selectedTrainee.last_name}
              </h5>
              <p><strong>Email:</strong> {selectedTrainee.email}</p>
              <p><strong>Phone:</strong> {selectedTrainee.phone}</p>
              <p><strong>Profession:</strong> {selectedTrainee.profession}</p>
              <p><strong>Account Number:</strong> {selectedTrainee.account_number}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowTraineeModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Trainee Modal */}
      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Trainee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditSubmit}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                value={editFormData.first_name}
                onChange={handleEditChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Middle Name</label>
              <input
                type="text"
                className="form-control"
                name="middle_name"
                value={editFormData.middle_name}
                onChange={handleEditChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                value={editFormData.last_name}
                onChange={handleEditChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Sex</label>
              <select
                className="form-select"
                name="sex"
                value={editFormData.sex}
                onChange={handleEditChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={editFormData.phone}
                onChange={handleEditChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Profession</label>
              <input
                type="text"
                className="form-control"
                name="profession"
                value={editFormData.profession}
                onChange={handleEditChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Account Number</label>
              <input
                type="text"
                className="form-control"
                name="account_number"
                value={editFormData.account_number}
                onChange={handleEditChange}
                required
              />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default TrainInfoList;