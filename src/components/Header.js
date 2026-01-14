// src/components/Header.js
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleReset = () => {
    localStorage.removeItem("quizAnswers");
    localStorage.removeItem("quizCurrentQuestion");
    navigate("/");
  };

  // Language Switcher
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="app-header">
      <div className="brand" onClick={() => navigate("/")}>
        <img
          src={process.env.PUBLIC_URL + "/me-as-meme-glass.png"}
          alt="Prof. Leandro Jr"
          className="logo"
        />
        <div className="brand-text">
          <h3>Prof. Leandro Jr</h3>
        </div>
      </div>

      {/* Control Panel */}
      <div className="controls">
        <div className="lang-group">
          <button
            className={i18n.language.startsWith("en") ? "active" : ""}
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
          <button
            className={i18n.language.startsWith("pt") ? "active" : ""}
            onClick={() => changeLanguage("pt")}
          >
            PT
          </button>
          <button
            className={i18n.language.startsWith("es") ? "active" : ""}
            onClick={() => changeLanguage("es")}
          >
            ES
          </button>
        </div>

        <button className="reset-btn" onClick={handleReset} title="Reset Quiz">
          ↺ Reset
        </button>
      </div>
    </header>
  );
}
