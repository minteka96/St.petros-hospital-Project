import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Button,
  Badge,
  Modal,
  Form,
  Alert,
  Pagination,
} from "react-bootstrap";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const api_url = import.meta.env.VITE_API_URL;

const AdminManagement = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [privileges, setPrivileges] = useState([]);
  const [originalPrivileges, setOriginalPrivileges] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const requestOptions = {
    headers: {
      "x-access-token": token,
    },
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${api_url}/api/users`,
          requestOptions
        );
        setUsers(response.data.data);
      } catch (err) {
        setError("Failed to load users. Please try again later.");
      }
    };

    fetchUsers();
  }, [token]);

  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }

    try {
      await axios.delete(`${api_url}/api/user/${userId}`, requestOptions);
      setUsers(users.filter((user) => user.user_id !== userId));
    } catch (err) {
      setError("Failed to delete user. Please try again.");
    }
  };

  const handleEdit = async (userId) => {
    try {
      const response = await axios.get(
        `${api_url}/api/users/${userId}`,
        requestOptions
      );
      const userData = response.data.data;
      setEditingUser(userData);
      setPrivileges(userData.privileges.split(","));
      setOriginalPrivileges(userData.privileges.split(","));
      setEditingUserId(userId);
      setShowModal(true);
    } catch (err) {
      setError("Failed to fetch user data. Please try again.");
    }
  };

  const handleUpdate = async () => {
    const updatedPrivileges = privileges.join(",");
    if (originalPrivileges.join(",") === updatedPrivileges) {
      setError("No changes made to privileges.");
      return;
    }

    try {
      const updatedData = {
        username: editingUser.username,
        privileges: updatedPrivileges,
      };

      await axios.put(
        `${api_url}/api/user/${editingUserId}`,
        updatedData,
        requestOptions
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.user_id === editingUserId ? { ...user, ...updatedData } : user
        )
      );
      setShowModal(false);
      setEditingUserId(null);
      setEditingUser(null);
      setSuccessMessage("Successfully updated user details.");

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setError("Failed to update user. Please try again.");
    }
  };

  const handlePrivilegeChange = (privilege) => {
    setPrivileges((prev) =>
      prev.includes(privilege)
        ? prev.filter((item) => item !== privilege)
        : [...prev, privilege]
    );
  };

  const handlePasswordReset = async () => {
    try {
      const updatedData = {
        password: "123456",
      };

      await axios.put(
        `${api_url}/api/user/${editingUserId}`,
        updatedData,
        requestOptions
      );
      alert("Password has been reset.");
    } catch (err) {
      setError("Failed to reset password. Please try again.");
    }
  };

  const renderPrivileges = (role) => {
    const privilegesMap = {
      HR: [
        "Post Vacancy",
        "Manage Applicants",
        "Screen Applicants",
        "Archive Vacancy",
      ],
      CPD: ["Schedule CPD course", "Active CPD Test", "Add CPD course"],
      Comm: ["Post News", "Approve News"],
      HL: ["Post Health Tip", "Approve Post"],
    };

    const privilegesList = privilegesMap[role] || [];

    return privilegesList.map((privilege) => (
      <Form.Check
        type="checkbox"
        key={privilege}
        label={privilege}
        checked={privileges.includes(privilege)}
        onChange={() => handlePrivilegeChange(privilege)}
      />
    ));
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Admin Management</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}

      <Table bordered hover responsive className="text-center">
        <thead className="table-light">
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.user_id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role === "superadmin" ? "Super Admin" : user.role}</td>
              <td>
                <Badge bg={user.active_status ? "success" : "secondary"}>
                  {user.active_status ? "Active" : "Inactive"}
                </Badge>
              </td>
              <td>
                {user.role !== "superadmin" && (
                  <Button
                    variant="danger"
                    size="sm"
                    className="me-2"
                    onClick={() => handleDelete(user.user_id)}
                  >
                    Delete
                  </Button>
                )}
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleEdit(user.user_id)}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        {[...Array(totalPages)].map((_, idx) => (
          <Pagination.Item
            key={idx + 1}
            active={currentPage === idx + 1}
            onClick={() => handlePageChange(idx + 1)}
          >
            {idx + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingUser && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={editingUser.username}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, username: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={editingUser.email} disabled />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Privileges</Form.Label>
                <div>{renderPrivileges(editingUser.role)}</div>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handlePasswordReset}>
            Reset Password
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminManagement;
