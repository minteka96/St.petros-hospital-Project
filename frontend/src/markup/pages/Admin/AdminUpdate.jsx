import React, { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { updatePasswordSchema } from "../../../Schemas/validationSchemas";


const UpdateAdmin = ({ userId, fetchUserData, onSubmit, cancelEditing }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password_hashed: "",
    role: "User",
    active_status: true,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [adminUserName, setAdminUserName] = useState("");
  const [userName, setUserName] = useState("");
  const [passwordError, setPasswordError] = useState(""); // For password validation errors
  const { user } = useAuth();

  // Fetch user data for pre-filling the form
  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await fetchUserData(userId);
        setUserName(user.username);
        setFormData({
          username: user.username,
          email: user.email,
          password_hashed: "",
          role: user.role,
          active_status: user.active_status,
        });
      } catch (err) {
        setError("Failed to fetch user data. Please try again.");
      }
    };

    getUserData();
  }, [userId, fetchUserData]);

  useEffect(() => {
    const token = user ? user.token : null;
    if (token) {
      setAdminUserName(user.username);
    } else {
      setAdminUserName("");
    }
  }, []);

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
  setSuccess("");
  setPasswordError(""); // Reset password error before validation

  // Validate password only if it's provided
  if (formData.password_hashed) {
    const result = updatePasswordSchema.safeParse({
      password: formData.password_hashed,
    });

    if (!result.success) {
      setPasswordError(result.error.errors[0].message); // Set the first error message
      return;
    }
  }

  try {
    if (!formData.username || !formData.email) {
      setError("Please fill in all required fields.");
      return;
    }

    // Submit updated data
    await onSubmit(userId, formData);
    setSuccess("User updated successfully!");
  } catch (err) {
    setError("Failed to update user. Please try again.");
  }
};


  return (
    <div className="container my-5">
      <div className="card shadow-sm border-rounded">
        <div className="card-header text-white">
          <h3 className="mb-0">Update Admin</h3>
        </div>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
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
                Password (leave empty to keep unchanged)
              </label>
              <input
                type="password"
                className="form-control"
                id="password_hashed"
                name="password_hashed"
                value={formData.password_hashed}
                onChange={handleChange}
              />
              {passwordError && (
                <div className="alert alert-danger mt-2">{passwordError}</div>
              )}{" "}
              {/* Show password validation error */}
            </div>

            {adminUserName !== userName && (
              <>
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
                    {/* <option value="superadmin">superadmin</option> */}
                    <option value="Admin">Admin</option>
                    <option value="HR">HR</option>
                    <option value="HE">Health literacy</option>
                    <option value="Comm">Communication</option>
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
              </>
            )}

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => cancelEditing(null)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAdmin;
