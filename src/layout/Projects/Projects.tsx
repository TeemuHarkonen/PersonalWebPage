import { type ReactNode } from "react";
import ProjectCard from "../../component/ProjectCard/ProjectCard";
import { ASSETS } from "../../config/assets.config";
import useTranslation from "../../hook/useTranslation";
import "./Projects.css";

export default function Projects(): ReactNode {
  const {t} = useTranslation();

  return (
    <div className="d-flex mt-length-large mb-length-large projects-page">
      <div className="d-flex flex-direction-col gap-large w-100">
        <ProjectCard
          images={ASSETS.projects.mekri}
          title={t("projects.mekri.title")}
          description={t("projects.mekri.description")}
          tech={t("projects.mekri.tech")}
        />
        <ProjectCard
          images={ASSETS.projects.caveVR}
          title={t("projects.caveVR.title")}
          description={t("projects.caveVR.description")}
          tech={t("projects.caveVR.tech")}
        />
        <ProjectCard
          images={ASSETS.projects.escapeRoom}
          title={t("projects.escapeRoom.title")}
          description={t("projects.escapeRoom.description")}
          tech={t("projects.escapeRoom.tech")}
        />
        <ProjectCard
          images={ASSETS.projects.eko}
          title={t("projects.eko.title")}
          description={t("projects.eko.description")}
          tech={t("projects.eko.tech")}
        />
        <ProjectCard
          images={ASSETS.projects.flaxwood}
          title={t("projects.flaxwood.title")}
          description={t("projects.flaxwood.description")}
          tech={t("projects.flaxwood.tech")}
        />
      </div>
    </div>
  );
}
