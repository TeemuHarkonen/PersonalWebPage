import { useEffect, useState, type ReactNode } from "react";
import "./ProjectCard.css";
import DisplayCarousel from "../DisplayCarousel/DisplayCarousel";


type Props = {
  images: string[];
  title: string;
  description: string;
  tech: string;
};

export default function ProjectCard(props: Props): ReactNode {
  const images: string[] = props.images;
  const title: string = props.title;
  const description: string = props.description;
  const tech: string = props.tech;

  const [hasLoaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    Promise.all(images.map((src: string) => {
      return new Promise((res, rej) => {
        const image = new Image();
        image.src = src;
        image.onload = res;
        image.onerror = rej;
      });
    })).then(() => setLoaded(true));
  }, []);

  return (
    <article className="w-100 bgc-emphasis c-glyph-major">
      <div className="project-card-layout">
        <aside className="aspect-ratio-16-10 w-100">
          {hasLoaded && (
            <DisplayCarousel>
              {images.map((src: string) => {
                return (
                  <img
                    key={src}
                    className="w-100 h-100"
                    src={src}
                  />
                );
              })}
            </DisplayCarousel>
          )}
        </aside>
        <div className="d-flex flex-direction-col d-justify-content-end h-100">
          <div className="project-card-description-layout">
            <h1>{title}</h1>
            <section className="project-card-description">
              {description}
            </section>
            <section className="d-flex d-justify-content-end">
              {tech}
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
