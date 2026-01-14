import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state || { answers: [] };

  if (!answers || answers.length === 0) {
    return (
      <div className="results-container">
        <h1>{t("results.title")}</h1>
        <p>No results found.</p>
        <button onClick={() => navigate("/")}>{t("results.restart")}</button>
      </div>
    );
  }

  const totals = answers.reduce(
    (acc, ans) => ({
      red: acc.red + (ans.red || 0),
      blue: acc.blue + (ans.blue || 0),
      green: acc.green + (ans.green || 0),
    }),
    { red: 0, blue: 0, green: 0 }
  );

  const scores = [
    { color: "red", score: totals.red },
    { color: "blue", score: totals.blue },
    { color: "green", score: totals.green },
  ].sort((a, b) => b.score - a.score);

  let styleKey;
  if (
    scores[0].score === scores[1].score ||
    scores[0].score === scores[2].score
  ) {
    styleKey = "rainbow";
  } else {
    const primary = scores[0].color;
    const secondary = scores[1].color;
    if (scores[0].score - scores[1].score <= 30) {
      styleKey = `${primary}-${secondary}`;
    } else {
      styleKey = primary;
    }
  }

  const primaryColor = styleKey.split("-")[0];
  const primaryTitle = t(`results.${primaryColor}.title`);
  const primaryDesc = t(`results.${primaryColor}.description`);
  const adviceText = t(`results.${primaryColor}.advice`);
  const comboDesc = styleKey.includes("-") ? t(`results.${styleKey}`) : "";

  const imagePath = `/results/${primaryColor}.png`;

  const handleRestart = () => {
    localStorage.removeItem("quizAnswers");
    localStorage.removeItem("quizCurrentQuestion");
    navigate("/");
  };

  return (
    <div className="results-container">
      <h1>{t("results.title")}</h1>

      <div className="result-card">
        <img
          src={imagePath}
          alt={`${primaryTitle} illustration`}
          className="result-image"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        <h2>{primaryTitle}</h2>
        <p>{primaryDesc}</p>

        {/* Dynamic Negotiation Advice Box */}
        <div
          className="advice-box"
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#f0f4f8",
            borderRadius: "8px",
            borderLeft: "5px solid #333",
          }}
        >
          <strong>💡 Negotiation Pro Tip:</strong>
          <p style={{ margin: "5px 0 0 0", fontStyle: "italic" }}>
            {adviceText}
          </p>
        </div>

        {comboDesc && (
          <p style={{ marginTop: "15px", fontWeight: "bold" }}>{comboDesc}</p>
        )}

        <p style={{ marginTop: "20px" }}>{t("results.conclusion")}</p>
      </div>

      <div className="scores">
        <p>Red: {totals.red}</p>
        <p>Blue: {totals.blue}</p>
        <p>Green: {totals.green}</p>
      </div>

      <button onClick={handleRestart}>{t("results.restart")}</button>
    </div>
  );
};

export default Results;
