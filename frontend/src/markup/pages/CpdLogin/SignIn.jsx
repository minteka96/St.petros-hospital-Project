import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cpdService from "../../../Services/cpd.service";
import classes from "./SignUpSignIn.module.css";
import { ClipLoader } from "react-spinners";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import visibility icons

const SignIn = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({
    form: false,
    auth: false,
  });
  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    setError({ form: false, auth: false });
    setMessage("");

    if (!email || !password) {
      setError((prev) => ({ ...prev, form: true }));
      setMessage("All fields are required.");
      return;
    }

    try {
      const formData = { email, password };
      const response = await cpdService.signin(formData);

      console.log("Response:", response);

      if (response?.status === "success") {
        const token = response.data.token;

        sessionStorage.setItem("zaccess-token", token);
        setMessage("Logged in successfully!");

        setTimeout(() => {
          setMessage("");
          window.location.href = "/cpd/TraineesDashboard";
          // navigate("/cpdadmin/TraineesDashboard");
        }, 2000);
      } else {
        console.error("Login failed:", response.message || "Unexpected error.");
        setError((prev) => ({ ...prev, auth: true }));
        setMessage(response.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError((prev) => ({ ...prev, auth: true }));
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.formWrapper}>
      <div className={classes.signInWrapper}>
        <form onSubmit={handleLogin}>
          <h6>Login to your account</h6>
          <p>
            Don't have an account?{" "}
            <button
              type="button"
              className={`${classes.linkButton} ${classes.createAccountButton}`}
              onClick={() => onSwitch("signup")}
            >
              Create a new account
            </button>
          </p>

          {error.form && (
            <div className={classes.errorHandling}>
              All fields are required.
            </div>
          )}

          <div className={classes.inputWrapper}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`${classes.inputField} ${
                error.form ? classes.error : ""
              }`}
            />
          </div>

          <div
            className={`${classes.inputWrapper} ${classes.passwordContainer}`}
          >
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`${classes.inputField} ${
                error.form ? classes.error : ""
              }`}
            />
            <button
              type="button"
              className={`${classes.passwordToggle} ${classes.passwordToggleSize}`}
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <FaEyeSlash color="#E9C1C1" size={25} />
              ) : (
                <FaEye color="#E9C1C1" size={25} />
              )}
            </button>
          </div>

          <button type="submit" className={classes.submitButton}>
            {isLoading ? <ClipLoader size={15} color="#fff" /> : "Login"}
          </button>

          {message && (
            <div
              className={
                error.auth ? classes.errorHandling : classes.successMessage
              }
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
