import React, { useState } from "react";
import { Card, Button, Table, Modal, Form } from "react-bootstrap";

const TraineeDashboard = () => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [courses, setCourses] = useState([
    {
      courseName: "React Basics",
      priScore: "85%",
      postScore: "90%",
      certificateLink: "#",
    },
    {
      courseName: "Node.js Advanced",
      priScore: "80%",
      postScore: "88%",
      certificateLink: "#",
    },
  ]);

  const handleApply = (event) => {
    event.preventDefault();
    // Handle course application logic
    alert("Application submitted!");
    setShowApplyModal(false);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Trainee Dashboard</h1>

      {/* Course History Section */}
      <Card className="mb-4">
        <Card.Header className="bg-primary text-white">
          Course History
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Course Name</th>
                <th>Pre-Test Score</th>
                <th>Post-Test Score</th>
                <th>Certificate</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{course.courseName}</td>
                  <td>{course.priScore}</td>
                  <td>{course.postScore}</td>
                  <td>
                    <a href={course.certificateLink} download>
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Apply for New Course Button */}
      <Button
        variant="success"
        className="mb-4"
        onClick={() => setShowApplyModal(true)}
      >
        Apply for New Course
      </Button>

      {/* Apply Modal */}
      <Modal show={showApplyModal} onHide={() => setShowApplyModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for a Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleApply}>
            <Form.Group controlId="formCourseName" className="mb-3">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter course name"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Application
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Download Certificate Modal */}
      <Modal
        show={showCertificateModal}
        onHide={() => setShowCertificateModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Download Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select a course to download the certificate:</p>
          <ul>
            {courses.map((course, index) => (
              <li key={index}>
                {course.courseName} -{" "}
                <a href={course.certificateLink} download>
                  Download
                </a>
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TraineeDashboard;
