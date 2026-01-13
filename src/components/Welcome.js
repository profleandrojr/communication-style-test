// src/components/Welcome.js
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../i18n";

const Welcome = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t("welcome.title")}</h1>
      <p>{t("welcome.subtitle")}</p>
      <div className="welcome">
        <label>{t("welcome.language")}:</label>
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={i18n.language}
        >
          <option value="en">English</option>
          <option value="pt">Português</option>
          <option value="es">Español</option>
        </select>
      </div>
      <Link to="/quiz">
        <button>{t("welcome.start").toUpperCase()}</button>
      </Link>
    </div>
  );
};

export default Welcome;
