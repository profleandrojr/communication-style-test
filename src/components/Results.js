// src/components/Results.js
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";

const Results = () => {
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

  // Determine style based on PDF logic
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
    // Combo if secondary is close (e.g., within 30 points, based on PDF examples like 100/88)
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
      <Link to="/">
        <button>{t("results.restart", "Restart Quiz")}</button>
      </Link>
    </div>
  );
};

export default Results;
