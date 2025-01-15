import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cpdService from "../../../Services/cpd.service";
import {useNavigate} from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true); // Toggle between Signup and Signin
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email format.";

    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    if (isSignup && confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { 
    email: email,
     password : password,};

   try {
      if (isSignup) {
        const response = await cpdService.signup(formData);
        setMessage("Signup successful! Redirecting to login...");
        setTimeout(() => setIsSignup(false), 2000); // Redirect to Signin after 2 seconds
      } else {
        const response = await cpdService.signin(formData);
        setMessage("Signin successful! Welcome back.");
          navigate("/");
      }
    } catch (error) {
      setMessage(error.message || "An error occurred. Please try again.");
    }
  }; 

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 px-3">
      <div className="row w-100 justify-content-center">
        <div className="col-lg-5 col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="text-center">{isSignup ? "Signup" : "Signin"}</h4>
              <p className="text-center">
                {isSignup ? (
                  <>
                    Already have an account?{" "}
                    <button
                      className="btn btn-link p-0 text-decoration-none"
                      onClick={() => setIsSignup(false)}
                    >
                      Sign in here
                    </button>
                  </>
                ) : (
                  <>
                    Don’t have an account?{" "}
                    <button
                      className="btn btn-link p-0 text-decoration-none"
                      onClick={() => setIsSignup(true)}
                    >
                      Create a new account
                    </button>
                  </>
                )}
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                {isSignup && (
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Re-type Password
                    </label>
                    <input
                      type="password"
                      className={`form-control ${
                        errors.confirmPassword ? "is-invalid" : ""
                      }`}
                      id="confirmPassword"
                      placeholder="Re-type Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                )}
                <button type="submit" className="btn btn-primary w-100">
                  {isSignup ? "Signup" : "Signin"}
                </button>
              </form>
              {message && (
                <p className="text-center mt-3 text-success">{message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
