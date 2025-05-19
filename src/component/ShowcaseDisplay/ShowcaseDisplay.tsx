import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function ShowcaseDisplay(props: Props): ReactNode {
  const src: string = props.src;
  const alt: string = props.alt;
  const className: string = props.className || "aspect-ratio-16-9";

  return (
    <div className={"w-100 overflow-hidden " + className}>
      <img
        className="w-100 h-100"
        src={src}
        alt={alt}
      />
    </div>
  );
}
