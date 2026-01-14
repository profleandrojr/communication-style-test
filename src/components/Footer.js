// src/components/Footer.js
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="app-footer">
      <p>
        &copy; {new Date().getFullYear()} Prof. Leandro Jr. |<span> </span>
        <a
          href="https://github.com/profleandrojr"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>

      <p className="credits">
        Based on the work of <strong>Luis Gerald Riffo</strong> (Advanced
        Negotiation Techniques).
        <br />
        <a
          href="https://www.linkedin.com/in/luisriffo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Profile
        </a>
      </p>
    </footer>
  );
};

export default Footer;
