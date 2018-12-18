import { useContext } from "react";
import { I18nContext } from "../hooks/useI18n";
import { Button } from "@rebass/emotion";

const LanguageToggle = () => {
  const { language, setLanguage } = useContext(I18nContext);

  const otherLanguage = language === "en" ? "de" : "en";

  return (
    <Button
      onClick={() => setLanguage(otherLanguage)}
      my={4}
      fontSize={2}
      bg="white"
      color="black"
      css={{ textTransform: "uppercase", border: "1px solid grey", cursor: "pointer" }}
    >
      {otherLanguage}
    </Button>
  );
};

export default LanguageToggle;
