import React, { useEffect, useState } from "react";
import trainInfoService from "../../../../Services/trainInfo.service";
import { useAuth } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { FaCheck, FaTimes, FaEye } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TrainInfo = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const navigate = useNavigate();

  const [trainees, setTrainees] = useState([]);
  const [filteredTrainees, setFilteredTrainees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedTrainee, setSelectedTrainee] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const [showTraineeModal, setShowTraineeModal] = useState(false);

  const traineesPerPage = 10;
  const api_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchTrainees = async () => {
      try {
        setLoading(true);
        const response = await trainInfoService.getAllTrainees(token);
        setTrainees(response.data);
        setFilteredTrainees(response.data);
      } catch (err) {
        console.error("Error fetching trainees:", err);
        toast.error("Failed to fetch trainees");
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

  const handleAction = async (traineeId, action) => {
    setLoading(true);
    try {
      const status = action === "approve" ? "Active" : "Inactive";
      await trainInfoService.updateTraineeStatus(traineeId, status, token);
      toast.success(`Trainee status updated to ${status} successfully!`);
      
      const response = await trainInfoService.getAllTrainees(token);
      setTrainees(response.data);
      setFilteredTrainees(response.data);
    } catch (error) {
      console.error(`Error updating trainee status:`, error);
      toast.error("Error updating trainee status!");
    } finally {
      setConfirmationModal(null);
      setLoading(false);
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
              <th>Status</th>
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
                  <span className={`badge ${trainee.status === "Active" ? "bg-success" : "bg-danger"}`}>
                    {trainee.status}
                  </span>
                </td>
                <td>
                  <FaEye
                    className="text-primary me-2 cursor-pointer"
                    title="View Details"
                    onClick={() => handleViewTrainee(trainee)}
                    style={{ fontSize: "1.2rem" }}
                  />
                  {trainee.status !== "Active" && (
                    <FaCheck
                      className="text-success me-2 cursor-pointer"
                      title="Activate"
                      onClick={() => setConfirmationModal({ id: trainee.id, action: "approve" })}
                      style={{ fontSize: "1.2rem" }}
                    />
                  )}
                  {trainee.status !== "Inactive" && (
                    <FaTimes
                      className="text-danger cursor-pointer"
                      title="Deactivate"
                      onClick={() => setConfirmationModal({ id: trainee.id, action: "reject" })}
                      style={{ fontSize: "1.2rem" }}
                    />
                  )}
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
              <h5>Name: {selectedTrainee.first_name} {selectedTrainee.last_name}</h5>
              <p><strong>Email:</strong> {selectedTrainee.email}</p>
              <p><strong>Phone:</strong> {selectedTrainee.phone}</p>
              <p><strong>Profession:</strong> {selectedTrainee.profession}</p>
              <p><strong>Status:</strong> {selectedTrainee.status}</p>
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

      {/* Confirmation Modal */}
      {confirmationModal && (
        <Modal show={true} onHide={() => setConfirmationModal(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              {confirmationModal.action === "approve" ? "Activate" : "Deactivate"} Trainee
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to {confirmationModal.action === "approve" ? "activate" : "deactivate"} this trainee?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setConfirmationModal(null)}>
              Cancel
            </Button>
            <Button
              variant={confirmationModal.action === "approve" ? "success" : "danger"}
              onClick={() => handleAction(confirmationModal.id, confirmationModal.action)}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <ToastContainer />
    </div>
  );
};

export default TrainInfo;
