import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatePasswordSchema } from "../../../Schemas/validationSchemas";
import {
  Container,
  Card,
  Form,
  Button,
  Alert,
  Row,
  Col,
} from "react-bootstrap";

const AddAdmin = () => {
  const navigate = useNavigate();

  // Form state management
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password_hashed: "",
    active_status: true,
    department: "",
    privileges: [],
  });

  // Error and success state
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState("");

  // Department privileges map
  const privilegesMap = {
    Admin: ["Access All Privileges"],
    HR: [
      "Post Vacancy",
      "Manage Applicants",
      "Screen Applicants",
      "Archive Vacancy",
    ],
    "Health Literacy": ["Post Health Tip", "Approve Post"],
    Communication: ["Post News", "Approve News"],
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Update privileges based on department selection
    if (name === "department") {
      setFormData({
        ...formData,
        department: value,
        privileges: [], // Reset privileges when department changes
      });
    }
  };

  // Handle privilege checkbox changes
  const handlePrivilegeChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const updatedPrivileges = checked
        ? [...prevState.privileges, value]
        : prevState.privileges.filter((privilege) => privilege !== value);
      return { ...prevState, privileges: updatedPrivileges };
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPasswordError("");
    setSuccess("");

    // Validate password
    const passwordValidation = updatePasswordSchema.safeParse({
      password: formData.password_hashed,
    });
    if (!passwordValidation.success) {
      setPasswordError(passwordValidation.error.errors[0].message);
      return;
    }

    try {
      if (!formData.username || !formData.email || !formData.department) {
        setError("Please fill in all required fields.");
        return;
      }

      // Simulate API call
      await axios.post("http://localhost:3001/api/user", formData);

      setSuccess("User added successfully!");
      setTimeout(() => {
        navigate("/admin/admins");
      }, 2000);

      // Reset form state
      setFormData({
        username: "",
        email: "",
        password_hashed: "",
        active_status: true,
        department: "",
        privileges: [],
      });
    } catch (err) {
      setError("Failed to add user. Please try again.");
    }
  };

  return (
    <Container className="py-5">
      <Card className="shadow-sm">
        <Card.Header className="bg-primary text-white">
          <h3>Add New Admin</h3>
        </Card.Header>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {passwordError && <Alert variant="danger">{passwordError}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password_hashed"
                value={formData.password_hashed}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                {Object.keys(privilegesMap).map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            {formData.department && privilegesMap[formData.department] && (
              <Form.Group className="mb-3">
                <Form.Label>Privileges</Form.Label>
                <Row>
                  {privilegesMap[formData.department].map((privilege) => (
                    <Col xs={6} key={privilege}>
                      <Form.Check
                        type="checkbox"
                        id={privilege}
                        label={privilege}
                        value={privilege}
                        checked={formData.privileges.includes(privilege)}
                        onChange={handlePrivilegeChange}
                      />
                    </Col>
                  ))}
                </Row>
              </Form.Group>
            )}

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                id="active_status"
                name="active_status"
                checked={formData.active_status}
                onChange={handleChange}
                label="Active"
              />
            </Form.Group>

            <div className="text-end">
              <Button type="submit" variant="primary">
                Add User
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddAdmin;
