import { useState, useContext, createContext } from "react";

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const I18nContext = createContext<any>({});

export const Provider: React.SFC<{ translations: Translations; defaultLanguage: string }> = ({
  defaultLanguage,
  translations,
  ...props
}) => {
  const [language, setLanguage] = useState(defaultLanguage);

  const values = {
    translations,
    language,
    setLanguage
  };

  return <I18nContext.Provider value={values} {...props} />;
};

export const useI18n = key => {
  const { translations, language } = useContext(I18nContext);

  return (translations[language] && translations[language][key]) || "missing";
};
