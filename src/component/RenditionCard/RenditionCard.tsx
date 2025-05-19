import type { ReactNode } from "react";
import "./RenditionCard.css";


type Props = {
  image: string;
  description: string;
  alt: string;
};

export default function RenditionCard(props: Props): ReactNode {
  const image: string = props.image;
  const description: string = props.description;
  const alt: string = props.alt;

  const descriptionRows: string[] = description.split("\n");

  return (
    <div className="p-relative w-100 aspect-ratio-16-10 overflow-hidden">
      <img
        className="w-100 h-100"
        src={image}
        alt={alt}
      />
      <div className="text-overlay font-size-title c-glyph-major">
        <div className="mr-length-extra-large">
          {descriptionRows.map((row: string, index: number) => {
            return (
              <span key={index}>
                <span className="d-inline-block">
                  {row}
                </span>
                <span>{" "}</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
