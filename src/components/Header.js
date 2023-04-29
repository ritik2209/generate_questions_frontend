import React from "react";
import ".././Header.css";

function Header() {
  return (
    <header className="App-header">
      <h1 className="header-title">Questions Generator</h1>
      <p className="header-description">Enter a paragraph and generate questions based on the paragraph.</p>
    </header>
  );
}

export default Header;