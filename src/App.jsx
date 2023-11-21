import PasswordSection from "./components/PasswordSection";
import RequirementSection from "./components/RequirementSection";
import Enter from "./components/Enter";
import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [isEnter, setIsEnter] = useState(true);
  const [nickName, setNickName] = useState("");

  const closeTab = () =>  {
    setIsEnter(!isEnter)
  }

  return (
    <div className="grid-container">
      {/* Left Section */}
      <div className="info"></div>
      {/* Main Section */}
      <div className="main-section">
        <Enter
          nickName={nickName}
          change={(e) => setNickName(e.target.value)}
          closeTab={closeTab}
          setEnter={isEnter}
        />
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
