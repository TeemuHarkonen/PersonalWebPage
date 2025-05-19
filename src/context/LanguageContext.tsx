import { createContext, useState, type PropsWithChildren, type ReactNode } from "react";

export type AppLanguage = "fin" | "eng";

type Context = {
  language: AppLanguage;
  setLanguage: (language: AppLanguage) => void;
};

export type LangaugeContextProps = Context;

export const LanguageContext = createContext<Context>({
  language: "fin",
  setLanguage: () => {}
});

export function LanguageProvider(props: PropsWithChildren): ReactNode {
  const [language, setLanguage] = useState<AppLanguage>("fin");

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
    }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
