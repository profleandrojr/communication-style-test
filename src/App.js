import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import "./App.css";

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}
