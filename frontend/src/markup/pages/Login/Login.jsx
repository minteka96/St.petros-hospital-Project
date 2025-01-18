import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../../assets/img/logo copy.png";
import loginService from "../../../Services/login.service";
import { SigninFormSchema } from "../../../Schemas/validationSchemas";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    const formData = { email, password };
    const validationResult = SigninFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const validationErrors = validationResult.error.errors.reduce(
        (acc, error) => {
          acc[error.path[0]] = error.message;
          console.log("error", error);
          return acc;
        },
        {}
      );
      setErrors(validationErrors);
      return;
    }

    setErrors({ email: "", password: "" });

    try {
      const formData = { email, password };
      const response = await loginService.logIn(formData);

      console.log("Response:", response);

      if (response?.status === "success") {
        const token = response.data.token;

        sessionStorage.setItem("access-token", token);
        window.location.href = "/admin";
      } else {
        console.error("Login failed:", response.message || "Unexpected error.");
        alert(response.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section
      style={{ height: "100vh", overflow: "hidden" }}
      className={`${styles.gradientCustom} d-flex align-items-center`}
    >
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body px-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <div className="d-flex align-items-center justify-content-between">
                    <h1 className="fw-bold mb-2 text-uppercase">Login</h1>
                    <img style={{ width: "40%" }} src={logo} alt="" />
                  </div>
                  <p className="text-white-50 m-3">
                    Enter your email and password!
                  </p>

                  <div
                    data-mdb-input-init
                    className="form-outline form-white mb-4"
                  >
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="typeEmailX"
                      className={`form-control form-control-lg ${
                        errors.email ? "is-invalid" : ""
                      }`}
                    />
                    <label
                      style={{ color: "rgba(255, 255, 255, 0.6)" }}
                      className="form-label"
                      htmlFor="typeEmailX"
                    >
                      Email
                    </label>
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div
                    data-mdb-input-init
                    className="form-outline form-white mb-4 position-relative"
                  >
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      id="typePasswordX"
                      className={`form-control form-control-lg ${
                        errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <label
                      style={{ color: "rgba(255, 255, 255, 0.6)" }}
                      className="form-label"
                      htmlFor="typePasswordX"
                    >
                      Password
                    </label>
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}

                    <span
                      className="position-absolute"
                      style={{
                        right: "10px",
                        top: "12px",
                        cursor: "pointer",
                        color: "gray",
                      }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  <p className="small pb-lg-2">
                    <a className="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <button
                    onClick={handleSubmit}
                    className="btn btn-outline-light btn-lg px-2"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
