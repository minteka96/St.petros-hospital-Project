function Questions({ questions, userAnswers, onAnswerChange, onSubmit }) {
 return (
  <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
    {questions.map((question, index) => (
      <div
        key={index}
        style={{
          marginBottom: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>
          Q{index + 1}: {question["Question Text"]}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {["Option A", "Option B", "Option C", "Option D"].map((optionKey) => (
            question[optionKey] && (
              <label
                key={optionKey}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor:
                    userAnswers[index] === optionKey ? "#e6f7ff" : "#f9f9f9",
                  transition: "background-color 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={optionKey}
                  checked={userAnswers[index] === optionKey}
                  onChange={(e) => onAnswerChange(index, e.target.value)}
                />
                {question[optionKey] &&
                 `${optionKey.replace("Option ", "")}: ${question[optionKey]}`}
              </label>
            )
          ))}
        </div>
      </div>
    ))}
    <button
      onClick={onSubmit}
      disabled={Object.keys(userAnswers).length < questions.length}
      style={{
        display: "block",
        margin: "20px auto",
        padding: "15px 30px",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#ffffff",
        backgroundColor: "#007BFF",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        transition: "background-color 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#0056b3";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#007BFF";
        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
      }}
    >
      Submit Test
    </button>
  </div>
);

}

export default Questions;
