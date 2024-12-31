import axios from "axios";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

function Test() {
  const [typeError, setTypeError] = useState(null);
  const [priQuestion, setPriQuestion] = useState([]);
  const [postQuestion, setPostQuestion] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [courses, setCourses] = useState([]);

  const selectCourse = async (id, type) => {
    const selectedCourse = courses.find((course) => course.training_id === id);
    if (selectedCourse) {

      // Base URL for your backend
      const baseUrl = "http://localhost:3001";

      try {
        // Fetch the correct test file based on the type
        const testType = type === "pri" ? "pri_test" : "post_test";
        const testResponse = await axios.get(
          `${baseUrl}${selectedCourse[testType]}`,
          { responseType: "arraybuffer" }
        );
        const testData = new Uint8Array(testResponse.data);
        const workbook = XLSX.read(testData, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        // Validate format
        const isValid = jsonData.every(
          (row) => row["Question Text"] && row["Correct Answer"]
        );

        if (isValid) {
          // Reset both question states before setting new ones
          if (type === "pri") {
            setPostQuestion([]); // Reset post-test questions
            setPriQuestion(jsonData);
          } else {
            setPriQuestion([]); // Reset pre-test questions
            setPostQuestion(jsonData);
          }
        } else {
          setTypeError(
            `Invalid Excel format for ${
              type === "pri" ? "pre-test" : "post-test"
            }. Ensure all required columns exist.`
          );
          setPriQuestion([]); // Reset on error
          setPostQuestion([]); // Reset on error
        }
      } catch (error) {
        console.error("Error fetching or processing files:", error);
        setTypeError("Failed to load questions. Please try again.");
        setPriQuestion([]); // Reset on error
        setPostQuestion([]); // Reset on error
      }
    } else {
      console.error("Course not found!");
    }
  };

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    let totalScore = 0;
    const currentQuestions =
      priQuestion.length > 0 ? priQuestion : postQuestion;

    currentQuestions.forEach((question, index) => {
      const correctAnswer = question["Correct Answer"];
      const userAnswer = userAnswers[index];
      const userAnswerLetter = userAnswer
        ? userAnswer.charAt(userAnswer.length - 1)
        : null;

      if (userAnswerLetter === correctAnswer) {
        totalScore += 1;
      }
    });

    setScore(totalScore);
  };

  const questionTypes = (id, type) => {
    selectCourse(id, type);
  };

  useEffect(() => {
    const getCpdCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/cpd/courses"
        );
        if (response.data && response.data.length > 0) {
          setCourses(response.data);
        } else {
          console.error("No courses found.");
        }
      } catch (error) {
        console.error("Error fetching CPD courses:", error);
      }
    };

    getCpdCourses();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Exam for test</h1>
      {courses.map((course) => (
        <div key={course._id}>
          <h3>{course.course_name}</h3>
          <button onClick={() => questionTypes(course.training_id, "pri")}>
            pri test
          </button>
          <button onClick={() => questionTypes(course.training_id, "post")}>
            post test
          </button>
        </div>
      ))}

      {typeError && (
        <div
          style={{ color: "red", textAlign: "center", marginBottom: "10px" }}
        >
          {typeError}
        </div>
      )}

      {(priQuestion.length > 0 || postQuestion.length > 0) &&
        score === null && (
          <div
            className="no-copy"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            {(priQuestion.length > 0 ? priQuestion : postQuestion).map(
              (question, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "20px",
                    padding: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <p>
                    <strong>Q{index + 1}:</strong> {question["Question Text"]}
                  </p>
                  <div>
                    {["Option A", "Option B", "Option C", "Option D"].map(
                      (optionKey) => (
                        <label
                          key={optionKey}
                          style={{
                            display: "block",
                            margin: "8px 0",
                            fontSize: "16px",
                            cursor: "pointer",
                          }}
                        >
                          {question[optionKey] && (
                            <input
                              type="radio"
                              name={`question-${index}`}
                              value={optionKey}
                              checked={userAnswers[index] === optionKey}
                              onChange={() =>
                                handleAnswerChange(index, optionKey)
                              }
                              style={{ marginRight: "10px" }}
                            />
                          )}
                          {question[optionKey] &&
                            optionKey.replace("Option ", "") + ": "}
                          {question[optionKey]}
                        </label>
                      )
                    )}
                  </div>
                </div>
              )
            )}
            <button
              onClick={handleSubmit}
              disabled={
                Object.keys(userAnswers).length <
                (priQuestion.length > 0 ? priQuestion : postQuestion).length
              }
              style={{
                display: "block",
                margin: "20px auto",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit Test
            </button>
          </div>
        )}

      {score !== null && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h2>
            Your Score: {score} /{" "}
            {(priQuestion.length > 0 ? priQuestion : postQuestion).length}
          </h2>
          <p>
            {score ===
            (priQuestion.length > 0 ? priQuestion : postQuestion).length
              ? "Perfect! Well done."
              : score >
                (priQuestion.length > 0 ? priQuestion : postQuestion).length / 2
              ? "Good job, but you can do better!"
              : "Keep practicing and try again!"}
          </p>
        </div>
      )}
    </div>
  );
}

export default Test;
