import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import QuestionList from "./components/QuestionList";

function App() {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setQuestions([]);
    try {
      const response = await fetch(
        "http://54.209.173.217/generate_questions?input_text=" + text,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        if (response.status === 404) {
          const responseText = await response.text();
          if (responseText === "server not found") {
            throw new Error("Server not found");
          } else {
            throw new Error("No Questions Generated from this text !");
          }
        } else if (response.status === 500) {
          throw new Error("500 Internal Server Error");
        } else {
          throw new Error(`HTTP Error ${response.status}`);
        }
      }
      const data = await response.json();
      setQuestions(data.generated_questions);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setQuestions([]);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form text={text} setText={setText} handleSubmit={handleSubmit} />
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {questions.length > 0 && <QuestionList questions={questions} />}
    </div>
  );
}

export default App;
