import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cpdService from "../../../Services/cpd.service";
import classes from "./SignUpSignIn.module.css";
import { ClipLoader } from "react-spinners";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import visibility icons

const SignUp = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    password: false,
    confirmPassword: false,
    form: false,
  });
  const [isPasswordVisible, setPasswordVisible] = useState(false); // Password visibility state
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // Confirm Password visibility state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSignUp(e) {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    // Clear previous errors
    setError({ password: false, confirmPassword: false, form: false });

    if (!email || !password || !confirmPassword) {
      setError((prevState) => ({
        ...prevState,
        form: true,
      }));
      return;
    }

    if (password.length < 8) {
      setError((prevState) => ({
        ...prevState,
        password: true,
      }));
      return;
    }

    if (password !== confirmPassword) {
      setError((prevState) => ({
        ...prevState,
        confirmPassword: true,
      }));
      return;
    }

    try {
      setLoading(true);
      // Use cpdService for the signup request
      await cpdService.signup({ email, password });
      setSuccess(true);
      // Delay to show success message
      setTimeout(() => onSwitch("login"), 2000);
    } catch (error) {
      console.error("Something went wrong:", error);
      setData(
        error.response?.data?.msg || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prev) => !prev);
  };

  return success ? (
    <div>Signed Up successfully, please login!</div>
  ) : (
    <div>
      <form onSubmit={handleSignUp}>
        <div className={classes.signup__title}>
          <h6>Welcome!</h6>
        </div>
        <div className={classes.signUp__Description}>
          <p>
            Already have an account?
            <button
              type="button"
              onClick={() => onSwitch("login")}
              className={classes.signup_Description_orange}
            >
              Sign in
            </button>
          </p>
        </div>
        <div>
          {error.password && (
            <div className={classes.errorHandling}>
              Please use a password with more than 8 characters!
            </div>
          )}
          {error.confirmPassword && (
            <div className={classes.errorHandling}>Passwords do not match!</div>
          )}
          {error.form && (
            <div className={classes.errorHandling}>
              All fields are required!
            </div>
          )}
          {data && <div className={classes.errorHandling}>{data}</div>}
        </div>
        <div>
          <input
            className={`${classes.signup__input} ${
              error.form ? classes.error : ""
            }`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <div className={classes.passwordContainer}>
            <input
              className={`${classes.signup__input} ${
                error.password ? classes.error : ""
              }`}
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <button
              type="button"
              className={`${classes.passwordToggle} ${classes.passwordToggleSize}`}
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <FaEyeSlash color="#E9C1C1" size={20} />
              ) : (
                <FaEye color="#E9C1C1" size={20} />
              )}
            </button>
          </div>
          <div className={classes.passwordContainer}>
            <input
              className={`${classes.signup__input} ${
                error.confirmPassword ? classes.error : ""
              }`}
              type={isConfirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-type Password"
            />
            <button
              type="button"
              className={`${classes.passwordToggle} ${classes.passwordToggleSize}`}
              onClick={toggleConfirmPasswordVisibility}
            >
              {isConfirmPasswordVisible ? (
                <FaEyeSlash color="#E9C1C1" size={20} />
              ) : (
                <FaEye color="#E9C1C1" size={20} />
              )}
            </button>
          </div>
        </div>
        <button type="submit" className={classes.signup__btn}>
          {isLoading ? <ClipLoader color="#000" size={15} /> : "Sign Up"}
        </button>
        <div
          className={`${classes.signup_Description_orange} ${classes.buttonGap}`}
        >
          <button type="button" onClick={() => onSwitch("login")}>
            <p> Already have an account?</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
