import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className="welcome-container">
      <h1>{t("welcome.title")}</h1>
      <p className="subtitle">{t("welcome.subtitle")}</p>

      <div className="cta-section">
        <Link to="/quiz">
          <button className="start-btn">
            {t("welcome.start").toUpperCase()}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
