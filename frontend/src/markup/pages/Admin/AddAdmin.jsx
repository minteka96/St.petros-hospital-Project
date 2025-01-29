import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatePasswordSchema } from "../../../Schemas/validationSchemas";
const api_url = import.meta.env.VITE_API_URL;

import {
  Container,
  Card,
  Form,
  Button,
  Alert,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

const AddAdmin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password_hashed: "",
    active_status: true,
    department: "",
    privileges: [],
  });

  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const privilegesMap = {
    Admin: ["All Privileges"],
    HR: [
      "Post Vacancy",
      "Manage Applicants",
      "Screen Applicants",
      "Archive Vacancy",
    ],
    "Health Literacy": ["Post Health Tip", "Approve Post"],
    Communication: ["Post News", "Approve News"],
    CPD: ["Schedule CPD course", "Active CPD Test", "Add CPD course"],
    RCUB: null,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "department") {
      setFormData({
        ...formData,
        department: value,
        privileges: [],
      });
    }
  };

  const handlePrivilegeChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const updatedPrivileges = checked
        ? [...prevState.privileges, value]
        : prevState.privileges.filter((privilege) => privilege !== value);
      return { ...prevState, privileges: updatedPrivileges };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPasswordError("");
    setSuccess("");

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

      const a = await axios.post(`${api_url}/api/user`, formData);

      setSuccess("User added successfully!");
      setTimeout(() => {
        navigate("/admin/admins");
      }, 2000);

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
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password_hashed"
                  value={formData.password_hashed}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputGroup>
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
                  {privilegesMap[formData.department].length > 0 &&
                    privilegesMap[formData.department].map((privilege) => (
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