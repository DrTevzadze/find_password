import PasswordSection from "./components/PasswordSection";
import RequirementSection from "./components/RequirementSection";
import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="grid-container">
      {/* Left Section */}
      <div className="info"></div>
      {/* Main Section */}
      <div className="main-section">
        <PasswordSection change={(newText) => setText(newText)} text={text} />
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
