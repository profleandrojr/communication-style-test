// src/components/Quiz.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const totalQuestions = 27;
  const scores = [0, 3, 7, 10];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(
    Array(totalQuestions).fill({ red: null, blue: null, green: null })
  );

  const questionKey = `questions.${currentQuestion + 1}`;
  const questionText = t(`${questionKey}.text`);
  const statements = t(`${questionKey}.statements`, { returnObjects: true });

  const handleScoreChange = (color, value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = {
      ...newAnswers[currentQuestion],
      [color]: parseInt(value),
    };
    setAnswers(newAnswers);
  };

  const isValid = () => {
    const current = answers[currentQuestion];
    const selectedScores = [current.red, current.blue, current.green].filter(
      (s) => s !== null
    );
    return selectedScores.length === 3 && new Set(selectedScores).size === 3; // Unique and all assigned
  };

  const goNext = () => {
    if (isValid() && currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion === totalQuestions - 1 && allAnswered()) {
      navigate("/results", { state: { answers } }); // Pass answers to results
    }
  };

  const goPrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const allAnswered = () =>
    answers.every(
      (ans) => Object.values(ans).every((s) => s !== null) && isValidForAns(ans)
    );

  const isValidForAns = (ans) => {
    const selected = Object.values(ans).filter((s) => s !== null);
    return selected.length === 3 && new Set(selected).size === 3;
  };

  return (
    <div className="quiz-container">
      <h1>{t("quiz.title", "Communication Style Quiz").toUpperCase()}</h1>
      <p>{t("quiz.instructions")}</p>
      <h2>
        {`Question ${currentQuestion + 1}`} <br /> {`${questionText}`}
      </h2>

      <div className="statements">
        {["red", "blue", "green"].map((color, idx) => (
          <div key={idx} className="statement">
            <p>{statements[idx]}</p>
            <select
              value={answers[currentQuestion][color] ?? ""}
              onChange={(e) => handleScoreChange(color, e.target.value)}
            >
              <option value="">{t("quiz.selectScore", "Select")}</option>
              {scores.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button onClick={goPrevious} disabled={currentQuestion === 0}>
          {t("quiz.previous").toUpperCase()}
        </button>
        <button onClick={goNext} disabled={!isValid()}>
          {currentQuestion === totalQuestions - 1
            ? t("quiz.submit").toUpperCase()
            : t("quiz.next").toUpperCase()}
        </button>
      </div>
      <div className="progress">
        <div
          style={{
            width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Quiz;
