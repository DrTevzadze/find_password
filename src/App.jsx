import PasswordSection from "./components/PasswordSection";
import RequirementSection from "./components/RequirementSection";
import "./App.css";

function App() {
  return (
    <div className="grid-container">
      <div className="left-section">
        <PasswordSection />
      </div>
      <div className="right-section">
        <RequirementSection />
      </div>
    </div>
  );
}

export default App;
