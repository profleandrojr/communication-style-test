import { useTranslation } from "react-i18next";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
