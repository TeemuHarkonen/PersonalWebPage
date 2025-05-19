import { useState, type ReactNode } from "react";
import "./DisplayCarousel.css";

type Props = {
  children: ReactNode[];
  intervalDuration?: string;
};

const DEFAULT_INTERVAL_DURATION = "5s";

export default function DisplayCarousel(props: Props): ReactNode {
  const children: ReactNode[] = props.children;
  const intervalDuration: string = props.intervalDuration ?? DEFAULT_INTERVAL_DURATION;

  const [imageIndex, setImageIndex] = useState<number>(0);
  
  // Hold's whether the first image has been switched.
  // If true, the previous image wont be faded out yet, 
  // as the fade out would happen almost immediately after 
  // the first component render, which would be distracting.
  // If false, fade outs will be performed as normal.
  const [isFirstSwitch, setFirstSwitch] = useState<boolean>(true);

  const previousIndex = imageIndex - 1 < 0 ? children.length - 1 : imageIndex - 1;
  const currentDisplay: ReactNode = children[imageIndex];
  const previousDisplay: ReactNode = children[previousIndex];

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % children.length);
  };

  return (
    <div className="display-carousel-bounds">
      <div
        key={"carousel-display-main-index_" + imageIndex}
        className={"zoom-in-effect display-carousel-image"}
        style={{animationDuration: intervalDuration}}
        onAnimationEnd={() => {
          setFirstSwitch(false);
          nextImage();
        }}
      >
        {currentDisplay}
      </div>
      <div
        key={"carousel-display-fade-index_" + previousIndex}
        className={"display-carousel-image " + (isFirstSwitch ? "opacity-0" : "fade-out-effect")}
        style={{animationDuration: "1s"}}
      >
        {previousDisplay}
      </div>
    </div>
  );
}
