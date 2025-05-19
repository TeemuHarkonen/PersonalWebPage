import type { ReactNode } from "react";
import type { AppLanguage } from "../../context/LanguageContext";
import useTranslation from "../../hook/useTranslation";
import { ASSETS } from "../../config/assets.config";


type LanguageOption = {
  languageKey: AppLanguage;
  icon: string;
};

const LANGUAGES: LanguageOption[] = [
  {
    languageKey: "fin",
    icon: ASSETS.icon.language.flag.finnish
  },
  {
    languageKey: "eng",
    icon: ASSETS.icon.language.flag.english
  }
];

export default function LanguageSelection(): ReactNode {
  const {setLanguage} = useTranslation();

  return (
    <div className="d-flex gap-large">
      {LANGUAGES.map((option: LanguageOption) => {
        return (
          <input
            key={option.languageKey}
            className="icon-size-tiny cursor-pointer"
            type="image"
            src={option.icon}
            onClick={() => setLanguage(option.languageKey)}
          />
        );
      })}
    </div>
  );
}
