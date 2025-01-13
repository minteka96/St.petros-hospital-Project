function ScoreDisplay({ score, totalQuestions }) {
  return (
    <div>
      <h2>
        Your Score: {score} / {totalQuestions}
      </h2>
      <p>
        {score === totalQuestions
          ? "Perfect! Well done."
          : score > totalQuestions / 2
          ? "Good job!"
          : "Keep practicing!"}
      </p>
    </div>
  );
}

export default ScoreDisplay;
