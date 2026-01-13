// src/components/Results.js
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();
  const { answers } = location.state || { answers: [] }; // Fallback if no state

  // Calculate totals
  const totals = answers.reduce(
    (acc, ans) => ({
      red: acc.red + (ans.red || 0),
      blue: acc.blue + (ans.blue || 0),
      green: acc.green + (ans.green || 0),
    }),
    { red: 0, blue: 0, green: 0 }
  );

  const handleRestart = () => {
    // 1. Clear the storage
    localStorage.removeItem("quizAnswers");
    localStorage.removeItem("quizCurrentQuestion");

    // 2. Navigate home
    navigate("/");
  };

  const scores = [
    { color: "red", score: totals.red },
    { color: "blue", score: totals.blue },
    { color: "green", score: totals.green },
  ].sort((a, b) => b.score - a.score); // Descending

  let styleKey;
  if (
    scores[0].score === scores[1].score ||
    scores[0].score === scores[2].score
  ) {
    styleKey = "rainbow"; // Ties (or all equal)
  } else {
    const primary = scores[0].color;
    const secondary = scores[1].color;

    if (scores[0].score - scores[1].score <= 30) {
      styleKey = `${primary}-${secondary}`;
    } else {
      styleKey = primary;
    }
  }

  const primaryTitle =
    t(`results.${styleKey.split("-")[0]}.title`) ||
    t(`results.${styleKey}.title`);
  const primaryDesc =
    t(`results.${styleKey.split("-")[0]}.description`) ||
    t(`results.${styleKey}.description`);
  const comboDesc = styleKey.includes("-") ? t(`results.${styleKey}`) : "";

  return (
    <div className="results-container">
      <h1>{t("results.title")}</h1>
      <div className="result-card">
        <h2>{primaryTitle}</h2>
        <p>{primaryDesc}</p>
        {comboDesc && <p>{comboDesc}</p>}
        <p>{t("results.conclusion")}</p>
      </div>
      <div className="scores">
        <p>Red: {totals.red}</p>
        <p>Blue: {totals.blue}</p>
        <p>Green: {totals.green}</p>
      </div>
      <button onClick={handleRestart}>
        {t("results.restart", "Restart Quiz")}
      </button>
    </div>
  );
};

export default Results;
