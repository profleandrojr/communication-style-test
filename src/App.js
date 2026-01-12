import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  return <h1>{t("welcome.title", "Hello Quiz App")}</h1>;
}
