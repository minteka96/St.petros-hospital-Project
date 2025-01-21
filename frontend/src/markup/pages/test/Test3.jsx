import React, { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import TestSelection from "./TestSelection";
import Questions from "./Questions";
import ScoreDisplay from "./ScoreDisplay";
import ErrorDisplay from "./ErrorDisplay";
import CountDown from "./CountDown";

const api_url = import.meta.env.VITE_API_URL;

function Test3({ courseName, onBack, id }) {
  const [training, setTraining] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [priQuestion, setPriQuestion] = useState([]);
  const [postQuestion, setPostQuestion] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [status, setStatus] = useState(null);
  const [startCountdown, setStartCountdown] = useState(false);
  console.log("userAnswers", Object.keys(userAnswers).length);
  // console.log("results", results);
  useEffect(() => {
    const fetchTraining = async () => {
      try {
        const response = await axios.get(
          `${api_url}/api/cpd/trainings/${courseName}`
        );
        const statusResponse = await axios.get(
          `${api_url}/api/trainee/status/${id}/${courseName}`
        );
        if (response?.data?.length > 0) {
          setTraining(response.data[0]);
        } else {
          setError("No courses found.");
        }
        if (statusResponse?.data?.length > 0) {
          setStatus(statusResponse.data[0]);
        }
      } catch (err) {
        console.error("Error fetching training:", err);
        setError("Failed to fetch training. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchTraining();
  }, [courseName]);

  const selectCourse = async (type) => {
    try {
      const testType = type === "pri" ? "pri_test" : "post_test";

      const testResponse = await axios.get(`${api_url}${training[testType]}`, {
        responseType: "arraybuffer",
      });

      const testData = new Uint8Array(testResponse.data);
      const workbook = XLSX.read(testData, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { range: 1 });

      // Validate question format
      const isValid = jsonData.every(
        (row) => row["Question Text"] && row["Correct Answer"]
      );
      if (!isValid) {
        throw new Error(
          "Invalid Excel format. Ensure all required columns exist."
        );
      }

      // Shuffle questions to randomize order
      const shuffledQuestions = jsonData.sort(() => Math.random() - 0.5);

      // Clear the other question set and set the appropriate one
      if (type === "pri") {
        setPostQuestion([]);
        setPriQuestion(shuffledQuestions);
      } else {
        setPriQuestion([]);
        setPostQuestion(shuffledQuestions);
      }

      // Update the status only after successful fetch and validation
      if (status?.[`${testType}`] !== "start") {
        const updatedStatus = { ...status, [`${testType}`]: "start" };
        await updateStatus(updatedStatus);
      } else {
        setStartCountdown(true);
      }
    } catch (error) {
      console.error("Error loading questions:", error);
      setTypeError("Failed to load questions. Please try again.");
      setPriQuestion([]);
      setPostQuestion([]);
    }
  };


  const updateStatus = async (status) => {
    try {
      const response = await axios.put(
        `${api_url}/api/trainee/status/${id}/${courseName}`,
        status
      );
      if (response.status === 200) {
        setStatus(response.data[0]);
        console.log("Status updated successfully");
        console.log("updated status", response.data[0]);
        setStartCountdown(true);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

const updateResults = (testType, totalScore) => {
  const resultKey = testType === "post_test" ? "post_score" : "pri_score";
  const updatedResults = { [resultKey]: totalScore };

  // Call storeResults directly with updated results
  storeResults(updatedResults);
};


 const storeResults = async (result) => {
   console.log("resulttttttttt", result);
   try {
     const response = await axios.put(
       `${api_url}/api/cpdResult/update/${id}/${courseName}`,
       result
     );
     if (response.status === 200) {
       console.log("Status updated successfully");
       console.log("Updated status:", response.data[0]);
     }
   } catch (error) {
     console.error("Error updating status:", error);
   }
 };

 const handleFinish = (testType) => {
   // Determine current questions
   const currentQuestions = priQuestion.length > 0 ? priQuestion : postQuestion;

   // Calculate total score
   const totalScore = currentQuestions.reduce((score, question, index) => {
     const correctAnswer = question["Correct Answer"];
     const userAnswer = userAnswers[index];
     const userAnswerLetter = userAnswer
       ? userAnswer.charAt(userAnswer.length - 1)
       : null;

     return score + (userAnswerLetter === correctAnswer ? 1 : 0);
   }, 0);

   // Update score state
   setScore(totalScore);
   console.log("scorrr", totalScore);

   // Determine certification status
   const certificationResult =
     testType === "post_test" && totalScore >= training?.minimum_score
       ? "passed"
       : "failed";

   // Update status based on testType
   const updatedStatus = {
     ...status,
     [`${testType}`]: "completed",
     ...(testType === "post_test" && { certificate: certificationResult }),
   };

   updateStatus(updatedStatus);

   // Update results and store them directly
   const resultKey = testType === "post_test" ? "post_score" : "pri_score";
   const updatedResults = { [resultKey]: totalScore };
   storeResults(updatedResults);
updateResults(testType, totalScore);
   console.log("Updated status:", testType);
 };


  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorDisplay error={error} />;

  return (
    <div className="position-relative">
      {(priQuestion.length > 0 || postQuestion.length > 0) && !score ? (
        <h2>good luck </h2>
      ) : (
        <>
          <h2>Course Details</h2>
          <TestSelection onSelect={selectCourse} status={status} />
        </>
      )}
      {typeError && <ErrorDisplay error={typeError} />}
      {(priQuestion.length > 0 || postQuestion.length > 0) &&
        score === null && (
          <Questions
            questions={priQuestion.length > 0 ? priQuestion : postQuestion}
            userAnswers={userAnswers}
            onAnswerChange={handleAnswerChange}
            onSubmit={() =>
              handleFinish(priQuestion.length > 0 ? "pri_test" : "post_test")
            }
          />
        )}
      {score !== null && (
        <>
          <ScoreDisplay
            score={score}
            totalQuestions={
              priQuestion.length > 0 ? priQuestion.length : postQuestion.length
            }
          />
        </>
      )}
      <button onClick={onBack}>Back</button>
      {(priQuestion.length > 0 || postQuestion.length > 0) &&
        score === null && (
          <div className="position-fixed z-index-1 top-50 right-0">
            <div
              className="card h-100 shadow-sm"
              style={{ border: "1px solid #ddd", borderRadius: "8px" }}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-between">
                <h6>You Completed</h6>
                <p>
                  {Object.keys(userAnswers).length}/
                  {priQuestion.length > 0
                    ? priQuestion.length
                    : postQuestion.length}
                </p>
                {startCountdown && (
                  <CountDown
                    duration={
                      priQuestion.length > 0
                        ? training.pri_test_duration
                        : training.post_test_duration
                    }
                    startAt={status?.updated_at}
                    handleFinish={() =>
                      handleFinish(
                        priQuestion.length > 0 ? "pri_test" : "post_test"
                      )
                    }
                  />
                )}
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default Test3;
