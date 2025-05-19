import type { ReactNode } from "react";
import RenditionCard from "../../component/RenditionCard/RenditionCard";
import useTranslation from "../../hook/useTranslation";
import { ASSETS } from "../../config/assets.config";

export default function Homepage(): ReactNode {
  const {t} = useTranslation();

  return (
    <>
      <RenditionCard
        image={ASSETS.homepage.professionalTitle}
        description={t("homepage.professional-title") || ""}
        alt="Grass land"
      />
      <RenditionCard
        image={ASSETS.homepage.slogan}
        description={t("homepage.slogan") || ""}
        alt="Plane"
      />
    </>
  );
}
