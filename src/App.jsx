import PasswordSection from "./components/PasswordSection";
import RequirementSection from "./components/RequirementSection";
import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="grid-container">
      {/* Left Section */}
      <div className="info">
        <h1>Start from the beginning</h1>
      </div>
      {/* Main Section */}
      <div className="main-section">
        <PasswordSection change={(e) => setText(e.target.value)} />
        <div className="rules">
          <h1>REQUIREMENTS</h1>
        </div>
        <RequirementSection text={text} />
      </div>
      {/* Right Section */}
    </div>
  );
}

export default App;
