import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateAdmin from "./AdminUpdate";
import { useAuth } from "../../../contexts/AuthContext";

const api_url = import.meta.env.VITE_API_URL;

const AdminManagement = () => {
   const { user } = useAuth();
   const token = user ? user.token : null;
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
  }, [token]);

  // Handle user deletion
  const handleDelete = async (userId) => {
   
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
                <td>{user.role}</td>
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
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => handleDelete(user.user_id)}
                  >
                    Delete
                  </button>
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
        </table>
      )}
    </div>
  );
};

export default AdminManagement;
