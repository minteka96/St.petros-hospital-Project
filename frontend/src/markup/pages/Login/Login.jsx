import React from "react";
import styles from "./Login.module.css";
import logo from "../../../assets/img/logo copy.png";

function Login() {
  return (
    <section
      style={{ height: "100vh", overflow: "hidden" }}
      className={`${styles.gradientCustom} d-flex align-items-center`}
    >
      <div className="container py-5 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body px-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                 <div className="d-flex align-items-center  justify-content-between">
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
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                    />
                    <label
                      style={{ color: "rgba(255, 255, 255, 0.6)" }}
                      className="form-label"
                      htmlFor="typeEmailX"
                    >
                      Email
                    </label>
                  </div>

                  <div
                    data-mdb-input-init
                    className="form-outline form-white mb-4"
                  >
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                    />
                    <label
                      style={{ color: "rgba(255, 255, 255, 0.6)" }}
                      className="form-label"
                      htmlFor="typePasswordX"
                    >
                      Password
                    </label>
                  </div>

                  <p className="small pb-lg-2">
                    <a className="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
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
