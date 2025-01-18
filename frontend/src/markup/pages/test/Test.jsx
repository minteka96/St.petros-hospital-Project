import axios from "axios";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { useAuth } from "../../../contexts/AuthContext";
const api_url = import.meta.env.VITE_API_URL;
console.log(" api_url", api_url);
function Test() {
  const [typeError, setTypeError] = useState(null);
  const [priQuestion, setPriQuestion] = useState([]);
  const [postQuestion, setPostQuestion] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [courses, setCourses] = useState([]);
  const [appliedCourses, setAppliedCourses ] = useState([]);
  // console.log("appliedCourses", appliedCourses);
  const { trainee } = useAuth();
  const id = trainee?.id;
  const selectCourse = async (course_name, type) => {
    const selectedCourse = courses.find(
      (applied) => applied.course_name=== course_name
    );
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
        const jsonData = XLSX.utils.sheet_to_json(sheet, { range: 1 });

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

  const questionTypes = (course_name, type) => {
    selectCourse(course_name, type);
  };

  useEffect(() => {
    const getCpdCourses = async () => {
      try {
      const response = await axios.get(`${api_url}/api/cpd/courses`);
        const appliedCourses = await axios.get(
          `${api_url}/api/cpd/IsApply/${id}`
        );
        console.log("response", response);
        if (response.data && response.data.length > 0) {
          setCourses(response.data);
        } else {
          console.error("No courses found.");
        }
        if (appliedCourses.data.data && appliedCourses.data.data.length > 0) {
          setAppliedCourses(appliedCourses.data.data);
        }
        // console.log("appliedCourses", appliedCourses.data.data);
      } catch (error) {
        console.error("Error fetching CPD courses:", error);
      }
    };

    getCpdCourses();
  }, []);
const filterAppliedCourses = courses.filter((course) => {
  return appliedCourses.some((applied) => applied.course_name === course.course_name);
})
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Exam for test</h1>
      {filterAppliedCourses.map((course) => (
        <div key={course._id}>
          <h3>{course.course_name}</h3>
          <button 
          onClick={() => questionTypes(course.course_name, "pri")}
          >
            pri test
          </button>
          <button 
          onClick={() => questionTypes(course.course_name, "post")}
          >
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
