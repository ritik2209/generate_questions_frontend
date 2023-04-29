import React from "react";

function GeneratedQuestions({ questions }) {
  return (
    <div className="center">
      <div className="Questions">
        <h2>Generated Questions:</h2>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GeneratedQuestions;