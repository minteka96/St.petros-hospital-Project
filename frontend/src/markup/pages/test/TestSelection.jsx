import React, { useState } from "react";
import GenerateCertificate from "../../components/GenerateCertificate/GenerateCertificate";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function TestSelection({ onSelect, status, info }) {
  const navigate = useNavigate();

  const [hoveredButton, setHoveredButton] = useState(null); // Track the hovered button

  const handleDownloadClick = () => {
    // Navigate to GenerateCertificate and pass values via state
    navigate("/GenerateCertificate", {
      state: {
        firstName: info.first_name,
        middleName: info.middle_name,
        lastName: info.last_name,
        courseName: status.course_name,
      },
    });
  };
  const getComment = (testType) => {
    if (
      testType === "pri" &&
      (status?.pri_test === "0" || status?.pri_test === null)
    ) {
      return "Pri Test is not available.";
    } else if (testType === "pri" && status?.pri_test === "completed") {
      return "you have completed pri test.";
    }

    if (
      testType === "post" &&
      (status?.post_test === "0" || status?.post_test === null)
    ) {
      return "Post Test is not available.";
    } else if (testType === "post" && status?.post_test === "completed") {
      return "you have completed post test.";
    }
    return "";
  };

  return (
    <div className="row">
      <div className="col-md-4 mb-3">
        <div
          className="card h-100 shadow-sm"
          style={{ border: "1px solid #ddd", borderRadius: "8px" }}
        >
          <div className="card-body d-flex flex-column align-items-center justify-content-around">
            <h5>Select Test Type</h5>
            <p style={{ textAlign: "center", fontSize: "14px" }}>
              when the test is available you can select the test
            </p>
            <div className="d-flex justify-content-between gap-5 mt-3">
              {/* Pri Test Button */}
              <div
                style={{ position: "relative" }}
                onMouseEnter={() => setHoveredButton("pri")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <button
                  onClick={() => onSelect("pri")}
                  className={
                    status?.pri_test === "0" ||
                    status?.pri_test === null ||
                    status?.pri_test === "completed"
                      ? "btn disabled"
                      : "btn"
                  }
                  disabled={
                    status?.pri_test === "0" ||
                    status?.pri_test === null ||
                    status?.pri_test === "completed"
                  }
                >
                  Pri Test
                </button>
                {hoveredButton === "pri" &&
                  (status?.pri_test === "0" ||
                    status?.pri_test === null ||
                    status?.pri_test === "completed") && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-30px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#000",
                        color: "#fff",
                        padding: "5px 10px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {getComment("pri")}
                    </div>
                  )}
              </div>

              {/* Post Test Button */}
              <div
                style={{ position: "relative" }}
                onMouseEnter={() => setHoveredButton("post")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <button
                  onClick={() => onSelect("post")}
                  className={
                    status?.post_test === "0" ||
                    status?.post_test === null ||
                    status?.post_test === "completed"
                      ? "btn disabled"
                      : "btn"
                  }
                  disabled={
                    status?.post_test === "0" ||
                    status?.post_test === null ||
                    status?.post_test === "completed"
                  }
                >
                  Post Test
                </button>
                {hoveredButton === "post" &&
                  (status?.post_test === "0" ||
                    status?.post_test === null ||
                    status?.post_test === "completed") && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-30px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#000",
                        color: "#fff",
                        padding: "5px 10px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {getComment("post")}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div
          className="card h-100 shadow-sm"
          style={{ border: "1px solid #ddd", borderRadius: "8px" }}
        >
          <div className="card-body d-flex flex-column align-items-center justify-content-around">
            <h5>Test Result</h5>
            <div className="justify-content-between gap-5 mt-3">
              <h5>
                Pri Test:{" "}
                <span
                  style={{
                    color:
                      status?.pri_test === "completed"
                        ? "green"
                        : status?.pri_test === "start" ||
                          status?.pri_test === "1"
                        ? "orange"
                        : "red",
                    fontWeight: "bold",
                  }}
                >
                  {status?.pri_test === "1" || status?.pri_test === "start"
                    ? "On Progress"
                    : status?.pri_test === "completed"
                    ? "Completed"
                    : "Not Available"}
                </span>
              </h5>
              <h5>
                Post Test:{" "}
                <span
                  style={{
                    color:
                      status?.post_test === "completed"
                        ? "green"
                        : status?.post_test === "start" ||
                          status?.post_test === "1"
                        ? "orange"
                        : "red",
                    fontWeight: "bold",
                  }}
                >
                  {status?.post_test === "0"
                    ? "Not Available"
                    : status?.post_test === "start" || status?.post_test === "1"
                    ? "On Progress"
                    : status?.certificate || "Not Defined"}
                </span>
                <br />
                {status?.certificate === "failed" && (
                  <span
                    style={{
                      color: "gray",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                  >
                    {" "}
                    you have't passed the post test, your result is less than
                    our standard
                  </span>
                )}
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div
          className="card h-100 shadow-sm"
          style={{ border: "1px solid #ddd", borderRadius: "8px" }}
        >
          <div className="card-body d-flex flex-column align-items-center justify-content-around">
            <h5>Certificate</h5>
            <p style={{ fontSize: "14px", textAlign: "center" }}>
              when you complete the the Post test and your result is more than
              our standard you can download your certificate
            </p>
            <div className="gap-5 mt-3">
              <p className="fs-6 m-0" style={{ color: "green" }}>
                On progress
              </p>
              <br />
              <div className="d-flex gap-2 align-items-center justify-content-center">
                {status.certificate === "passed" ? (
                  <>
                    <p className="fs-6 m-0" style={{ color: "#007bff" }}>
                      Download
                    </p>
                    <button
                      style={{
                        background: "none",
                        color: "#007bff",
                        alignItems: "center",
                        border: "1px solid #D6D6DA",
                        borderRadius: "50%",
                        transition: "transform 0.2s",
                      }}
                      onClick={handleDownloadClick}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow =
                          "0 4px 8px rgba(0, 0, 0, 0.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.boxShadow = "none")
                      }
                    >
                      <img
                        src="https://img.icons8.com/?size=100&id=42798&format=png&color=000000"
                        alt="Download icon"
                        style={{
                          width: "40px",
                          height: "40px",
                        }}
                      />
                    </button>
                  </>
                ) : (
                  <p className="fs-6 m-0" style={{ color: "gray" }}>
                    Certificate is not ready
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestSelection;
