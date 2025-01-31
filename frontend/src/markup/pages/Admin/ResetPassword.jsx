import React, { useState } from "react";
import { updatePasswordSchema } from "../../../Schemas/validationSchemas";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const api_url = import.meta.env.VITE_API_URL;

function ResetPassword() {

 const [email, setEmail] = useState("");
   const [currentPassword, setCurrentPassword] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");
   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
     const [showNewPassword, setShowNewPassword] = useState(false);
     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
      const togglePasswordVisibility = (setter) => {
        setter((prev) => !prev);
      };
const { user } = useAuth();
const navigate = useNavigate();
const logOut = () => {
  sessionStorage.removeItem("access-token");
  window.location.href = "/";
};
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword) {
      const result = updatePasswordSchema.safeParse({
        password: newPassword,
      });

      if (!result.success) {
        setPasswordError(result.error.errors[0].message); // Set the first error message
        return;
      } else {
        setPasswordError("");
      }
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const formData = {
      email,
      currentPassword,
      newPassword,
    };
    const currentEmail = user ? user.email : null;
    if (email !== currentEmail) {
      setError("Email is not correct");
      return;
    }
    if(currentPassword === newPassword){
      setError("New password cannot be same as current password");
      return;
    }

    try {
      const response = await axios.put(
        `${api_url}/api/user/password/${email}`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      // set timeout
      if (response.status === 200) {
        setTimeout(() => {
          logOut;
          navigate("/login");
        }, 2000);
        setError("");
        setSuccess("Password updated successfully!");
        setNewPassword("");
        setCurrentPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      console.error("Error:", err.response?.data.error);
      setError(err.response?.data.error);
    }
  };

 return (
   <div className="container pt-5">
     <div className="card w-50 shadow-sm p-4 mx-auto ">
       <h2 className="mb-4 text-center text-primary">Change Password</h2>
       <form id="change-password-form" onSubmit={handleSubmit}>
         {/* Notifications */}
         {error && (
           <div className="alert alert-danger text-center">{error}</div>
         )}
         {success && (
           <div className="alert alert-success text-center">{success}</div>
         )}

         {/* Email Address Field */}
         <div className="mb-4">
           <label htmlFor="formEmail" className="form-label">
             Email Address
           </label>
           <input
             onChange={(e) => setEmail(e.target.value)}
             type="email"
             id="formEmail"
             className="form-control"
             placeholder="name@example.com"
             required
           />
         </div>

         {/* Current Password Field */}
         <div className="mb-4">
           <label htmlFor="formCurrentPassword" className="form-label">
             Current Password
           </label>
           <div className="input-group">
             <input
               onChange={(e) => setCurrentPassword(e.target.value)}
               type={showCurrentPassword ? "text" : "password"}
               id="formCurrentPassword"
               className="form-control"
               placeholder="Enter current password"
               required
             />
             <button
               type="button"
               className="btn btn-outline-secondary"
               onClick={() => togglePasswordVisibility(setShowCurrentPassword)}
             >
               {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
             </button>
           </div>
         </div>

         {/* New Password Field */}
         <div className="mb-4">
           <label htmlFor="formNewPassword" className="form-label">
             New Password
           </label>
           {passwordError && (
             <div className="alert alert-warning p-2">{passwordError}</div>
           )}
           <div className="input-group">
             <input
               onChange={(e) => setNewPassword(e.target.value)}
               type={showNewPassword ? "text" : "password"}
               id="formNewPassword"
               className="form-control"
               placeholder="Enter new password"
               required
             />
             <button
               type="button"
               className="btn btn-outline-secondary"
               onClick={() => togglePasswordVisibility(setShowNewPassword)}
             >
               {showNewPassword ? <FaEyeSlash /> : <FaEye />}
             </button>
           </div>
         </div>

         {/* Confirm New Password Field */}
         <div className="mb-4">
           <label htmlFor="formConfirmNewPassword" className="form-label">
             Confirm New Password
           </label>
           <div className="input-group">
             <input
               onChange={(e) => setConfirmPassword(e.target.value)}
               type={showConfirmPassword ? "text" : "password"}
               id="formConfirmNewPassword"
               className="form-control"
               placeholder="Re-enter new password"
               required
             />
             <button
               type="button"
               className="btn btn-outline-secondary"
               onClick={() => togglePasswordVisibility(setShowConfirmPassword)}
             >
               {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
             </button>
           </div>
         </div>

         {/* Action Buttons */}
         <div className="d-flex justify-content-center">
           <button type="submit" className="btn btn-primary px-5">
             Save
           </button>
         </div>
       </form>
     </div>
   </div>
 );

}

export default ResetPassword;
