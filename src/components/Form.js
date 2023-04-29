import React from "react";
import ".././Form.css";

function Form({ text, setText, handleSubmit }) {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-input" className="form-label">
          Enter paragraph:
        </label>
        <textarea
          id="text-input"
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="form-textarea"
        />
        <button
          type="submit"
          disabled={!text}
          className="form-submit-button"
        >
          Generate questions
        </button>
      </form>
    </div>
  );
}

export default Form;