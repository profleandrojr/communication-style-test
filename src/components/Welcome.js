import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Welcome = () => {
  const { t } = useTranslation();

  // Carousel State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["red", "blue", "green", "rainbow"];

  // Auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="welcome-container">
      <h1>{t("welcome.title")}</h1>
      <p className="subtitle">{t("welcome.subtitle")}</p>

      {/* Carousel Section */}
      <div className="carousel-frame">
        {images.map((imgName, index) => (
          <img
            key={imgName}
            src={`/results/${imgName}.png`}
            alt={`${imgName} style illustration`}
            className={`carousel-image ${
              index === currentImageIndex ? "active" : ""
            }`}
          />
        ))}
      </div>

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
