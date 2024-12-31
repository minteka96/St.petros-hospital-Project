import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router";
import trainInfoService from "../../../../services/trainInfo.service";
import { FaCheck, FaTimes, FaEye } from "react-icons/fa";
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

      <ToastContainer />
    </div>
  );
};

export default TrainInfoList;
