import React from "react";

function QuestionList({ questions }) {
  return (
    <div className="Questions">
      <h2>Generated Questions:</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
