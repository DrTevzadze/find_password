import PasswordSection from "./components/PasswordSection";
import RequirementSection from "./components/RequirementSection";
import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="grid-container">
      <div className="left-section">
        <PasswordSection
          header="Can you find the password?"
          text={text}
          change={(e) => setText(e.target.value)}
        />
      </div>
      <div className="right-section">
        <RequirementSection />
      </div>
    </div>
  );
}

export default App;
