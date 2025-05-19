import { useContext } from "react"
import { LanguageContext, type LangaugeContextProps } from "../context/LanguageContext"
import queryJson from "../utils/queryJson";
import { APP_LANGUAGES_DICTIONARIES } from "../config/language/languages.config";

type TranslationKey = string | null | undefined;

export type Translate = (key: TranslationKey) => string | undefined;
export type TranslateQuick = (key: TranslationKey, defaultValue?: string) => string;

type Returns = {
  translate: Translate;
  t: TranslateQuick;
} & LangaugeContextProps;

export default function useTranslation(): Returns {
  const {language, setLanguage} = useContext(LanguageContext);

  const handleTranslation = (key: TranslationKey) => {
    if( !key ) {
      return undefined;
    }
    
    return queryJson<string>(key, APP_LANGUAGES_DICTIONARIES[language]);
  }

  const handleQuickTranslation = (key: TranslationKey, defaultValue: string = "") => {
    return handleTranslation(key) || defaultValue;
  };

  return {
    language,
    setLanguage,
    translate: handleTranslation,
    t: handleQuickTranslation
  };
}
