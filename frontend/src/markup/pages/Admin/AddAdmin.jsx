/* eslint-disable no-unused-vars */
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatePasswordSchema } from "../../../Schemas/validationSchemas";

// Password validation schema

const AddAdmin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password_hashed: "",
    role: "User",
    active_status: true,
  });

  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

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
      if (!formData.username || !formData.email) {
        setError("Please fill in all required fields.");
        return;
      }

      // Simulate an API call
      await axios.post("http://localhost:3001/api/user", formData);

      setSuccess("User added successfully!");
      setTimeout(() => {
        navigate("/admin/admins");
      }, 2000);

      // Reset form data
      setFormData({
        username: "",
        email: "",
        password_hashed: "",
        role: "User",
        active_status: true,
      });
    } catch (err) {
      setError("Failed to add user. Please try again.");
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow-sm border-rounded">
        <div className="card-header text-white">
          <h3 className="mb-0">Add New Admin</h3>
        </div>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          {passwordError && (
            <div className="alert alert-danger" aria-live="polite">
              {passwordError}
            </div>
          )}
          {success && <div className="alert alert-success">{success}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password_hashed" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password_hashed"
                name="password_hashed"
                value={formData.password_hashed}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <select
                className="form-select"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="User">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="HR">HR</option>
                <option value="HE">Health Literacy</option>
                <option value="Comm">Communication</option>
                <option value="CPD">CPD Traning</option>
                <option value="RPUB">Research Publication</option>
              </select>
           
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="active_status"
                name="active_status"
                checked={formData.active_status}
                onChange={handleChange}
              />
              <label htmlFor="active_status" className="form-check-label">
                Active
              </label>
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
