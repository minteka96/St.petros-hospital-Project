/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateAdmin from "./AdminUpdate";
import { useAuth } from "../../../contexts/AuthContext";

const api_url = import.meta.env.VITE_API_URL;

const AdminManagement = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const role = user ? user.role : null;
  console.log("role", role);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [editingUserId, setEditingUserId] = useState(null); // Track the user being edited

  // Fetch users from the backend
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // Handle user deletion
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

  // Fetch user data for UpdateUser
  const fetchUserData = async (userId) => {
    const response = await axios.get(
      `${api_url}/api/users/${userId}`,
      requestOptions
    );
    return response.data.data; // Assume the API returns a single user's data
  };

  // Handle user update
  const handleUpdate = async (userId, updatedData) => {
    try {
      await axios.put(
        `${api_url}/api/user/${userId}`,
        updatedData,
        requestOptions
      );
      // Update the local users list with the updated user
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.user_id === userId ? { ...user, ...updatedData } : user
        )
      );
      setEditingUserId(null); // Close the form after successful update
    } catch (err) {
      setError("Failed to update user. Please try again.");
    }
  };

  return (
    <div className="container  py-5">
      <h1 className="mb-4">Admin Management</h1>
      {error && <div className="alert alert-danger mb-4">{error}</div>}

      {editingUserId ? (
        <UpdateAdmin
          cancelEditing={setEditingUserId}
          userId={editingUserId}
          fetchUserData={fetchUserData}
          onSubmit={handleUpdate}
        />
      ) : (
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.user_id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              <td>
  {user.role === "superadmin" ? "Super Admin" 
    : user.role === "Admin" ? "Admin" 
    : user.role === "HR" ? "HR" 
    : user.role === "HE" ? "Health Literacy" 
    : user.role === "CPD" ? "CPD Training" 
    : user.role === "Comm" ? "Communication" 
    : "Unknown Role"}
</td>
                <td>
                  <span
                    className={`badge ${
                      user.active_status ? "badge-success" : "badge-secondary"
                    }`}
                  >
                    {user.active_status ? "Active" : "Inactive"}
                  </span>
                </td>
                <td>
                  {user.role !== "superadmin" && (
                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => handleDelete(user.user_id)}
                    >
                      Delete
                    </button>
                  )}
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setEditingUserId(user.user_id)} // Set editing user
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <div className="mt-4 " style={{ fontSize: "12px" }}>
            <h5 style={{ fontSize: "16px", padding: 0, margin: 0 }}>
              Role Access definition
            </h5>
            <div>
              <p style={{ fontSize: "12px", padding: 0 }}>
                Admin : <span>access all without admin Management</span>
              </p>
              <p style={{ fontSize: "12px", padding: 0 }}>
                HR : <span>access only Job and Applicant </span>
              </p>
              <p style={{ fontSize: "12px", padding: 0 }}>
                Health Literacy : <span>access only Health-Tip </span>
              </p>
              <p style={{ fontSize: "12px", padding: 0 }}>
                Communication : <span>access only News</span>
              </p>
              <p style={{ fontSize: "12px", padding: 0 }}>
               CPD Traning : <span>access only CPDNews</span>
              </p>
            </div>
          </div>
        </table>
      )}
    </div>
  );
};

export default AdminManagement;
