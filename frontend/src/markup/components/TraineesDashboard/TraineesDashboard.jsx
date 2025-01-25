import React, { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Modal,
  Tooltip,
  OverlayTrigger,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router";
const api_url = import.meta.env.VITE_API_URL;

const TraineesDashboard = () => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [registeredCourses, setRegisteredCourses] = useState([]); // New state for registered courses
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [error, setError] = useState(null);
  const [applying, setApplying] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);

  const navigate = useNavigate();
  const { trainee } = useAuth();
  const traineeId = trainee?.id;
  const token = trainee?.token;
  console.log("traineeId", traineeId);
  console.log("token", token);
  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await fetch(`${api_url}/api/cpd/available/courses`, {
          headers: {
            "y-access-token": token,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch trainings");
        }
        const data = await response.json();
        console.log(data);
        setTrainings(data);
      } catch (error) {
        setError("Failed to load trainings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrainings();
  }, []);

  useEffect(() => {
    const token = trainee?.token;
    if (!token) {
      navigate("/cpd/login");
      return;
    }
    const checkTrainee = async () => {
      try {
        const response = await fetch(
          `${api_url}/api/trainee-info/${traineeId}`
        );

        if (response.status === 404) {
          navigate("/cpd/trainee-info");
        }
        // const data = await response.json();
      } catch (error) {
        console.error("Error checking trainee:", error);
      }
    };

    checkTrainee();
  }, []);
  // Fetch registered courses for the trainee
  useEffect(() => {
    const fetchRegisteredCourses = async () => {
      try {
        const response = await fetch(`${api_url}/api/cpd/IsApply/${traineeId}`, {
          headers: {
            "y-access-token": token,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch registered courses");
        }
        const data = await response.json();
        console.log("Registered courses data:", data.data);
        setRegisteredCourses(data.data || []);
      } catch (error) {
        console.error("Error fetching registered courses:", error);
      }
    };

    fetchRegisteredCourses();
  }, []);

  const handleApply = (training) => {
    setSelectedTraining(training);
    setPopupMessage(null);
  };

  const handleClose = () => {
    setSelectedTraining(null);
    setPopupMessage(null);
  };

  const handleConfirmApply = async () => {
    if (!selectedTraining) return;

    const { schedule_id, course_name } = selectedTraining;

    const payload = {
      trainee_id: traineeId,
      schedule_id,
      course_name,
      pri_score: 0,
      post_score: 0,
    };

    setApplying(true);

    try {
      const response = await fetch(`${api_url}/api/cpd/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        if (response.status === 409) {
          setPopupMessage("You have already applied for this training.");
        } else {
          throw new Error("Failed to apply for the training");
        }
      } else {
        setPopupMessage("You have successfully applied for the training.");
        setSelectedTraining(null);
      }
    } catch (error) {
      setPopupMessage("An error occurred while applying. Please try again.");
    } finally {
      setApplying(false);
    }
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const renderTooltip = (props) => (
    <Tooltip {...props}>Click to view more details</Tooltip>
  );

  const isAlreadyApplied = (courseName) => {
    return registeredCourses.some(
      (course) => course.course_name === courseName
    );
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4 text-primary">Available Trainings</h1>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : error ? (
        <div className="text-center">
          <Alert variant="danger" className="mb-3">
            {error}
          </Alert>
          <Button variant="primary" onClick={() => window.location.reload()}>
            Retry
          </Button>
        </div>
      ) : trainings.length > 0 ? (
        <Row className="g-4">
          {trainings.map((training) => (
            <Col md={6} lg={4} key={training.schedule_id}>
              <OverlayTrigger placement="top" overlay={renderTooltip}>
                <Card className="shadow-sm h-100 border-0">
                  <Card.Body>
                    <Card.Title className="text-primary text-truncate">
                      {training.course_name || "N/A"}
                    </Card.Title>
                    <Card.Text>
                      <strong>Registration Start Date:</strong>{" "}
                      {training.registration_start_date
                        ? formatDate(training.registration_start_date)
                        : "TBD"}
                    </Card.Text>
                    <Card.Text>
                      <strong>Registration End Date:</strong>{" "}
                      {training.registration_end_date
                        ? formatDate(training.registration_end_date)
                        : "TBD"}
                    </Card.Text>
                    <Card.Text>
                      <strong>Registration:</strong>{" "}
                      {!training.registration_status ? "Open" : "Closed"}
                    </Card.Text>
                    {!training.registration_status ? (
                      isAlreadyApplied(training.course_name) ? (
                        <Button
                          variant="secondary"
                          className="mt-3 w-100"
                          disabled
                        >
                          Already Applied
                        </Button>
                      ) : (
                        <Button
                          variant="success"
                          className="mt-3 w-100"
                          onClick={() => handleApply(training)}
                        >
                          Apply Now
                        </Button>
                      )
                    ) : (
                      <Button
                        variant="secondary"
                        className="mt-3 w-100"
                        disabled
                      >
                        Registration Closed
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center text-muted">
          No available trainings at the moment.
        </p>
      )}

      {selectedTraining && (
        <Modal show={true} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Apply for {selectedTraining.course_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {applying ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              <>
                <p>
                  Are you sure you want to apply for the
                  <strong className="space">
                    {selectedTraining.course_name}
                  </strong>{" "}
                  training?
                </p>
                <p>
                  <strong>Start Date:</strong>{" "}
                  {formatDate(selectedTraining.course_start_date) || "TBD"}
                </p>
                <p>
                  <strong>End Date:</strong>{" "}
                  {formatDate(selectedTraining.course_end_date) || "TBD"}
                </p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleConfirmApply}
              disabled={applying}
            >
              {applying ? (
                <Spinner as="span" animation="border" size="sm" />
              ) : (
                "Confirm"
              )}
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {popupMessage && (
        <Modal show={true} onHide={() => setPopupMessage(null)} centered>
          <Modal.Body>
            <p className="text-center">{popupMessage}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setPopupMessage(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default TraineesDashboard;
