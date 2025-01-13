import React, { useState } from "react";

function TestSelection({ onSelect, status }) {
  const [hoveredButton, setHoveredButton] = useState(null); // Track the hovered button

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
    }
    else if (testType === "post" && status?.post_test === "completed") {
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
          <div className="card-body d-flex flex-column align-items-center justify-content-between">
            <h5>Select Test Type</h5>
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
          <div className="card-body d-flex flex-column align-items-center justify-content-between">
            <h5>Test Result</h5>
            <div class="d-flex  justify-content-between gap-5 mt-3">
              <h5 className="">
                Pri Test : <span style={{ color: "green" }}>0</span>
              </h5>
              <h5 className="">
                Post Test : <span style={{ color: "green" }}>0</span>
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
          <div className="card-body d-flex flex-column align-items-center justify-content-between">
            <h5>Certificate</h5>
            <p className="fs-6">
              when you complete the the Post test and get our score you will get
              a certificate
            </p>
            <div class="gap-5 mt-3">
              <p className="fs-6 m-0 " style={{ color: "green" }}>
                on progress
              </p>
              <br />
              <div className="d-flex gap-2 align-items-center justify-content-center">
                <p className="fs-6 m-0 " style={{ color: "#007bff" }}>
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
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      marginLeft: "",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestSelection;
