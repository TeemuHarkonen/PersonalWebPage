import type { ReactNode } from "react";
import { ASSETS } from "../../config/assets.config";
import "./Showcase.css";
import ShowcaseDisplay from "../../component/ShowcaseDisplay/ShowcaseDisplay";

export default function Showcase(): ReactNode {
  return (
    <div>
      <ShowcaseDisplay
        src={ASSETS.showcase.market}
        alt="Market"
      />
      <ShowcaseDisplay
        src={ASSETS.showcase.car}
        alt="Car"
      />
      <div className="showcase-double">
        <ShowcaseDisplay
          src={ASSETS.showcase.gun}
          alt="Gun"
        />
        <ShowcaseDisplay
          src={ASSETS.showcase.bottles}
          alt="Bottles"
        />
      </div>
      <ShowcaseDisplay
        src={ASSETS.showcase.phone}
        alt="Phone product"
      />
      <div className="showcase-double">
        <ShowcaseDisplay
          className="aspect-ratio-17-20"
          src={ASSETS.showcase.dress}
          alt="Dress"
        />
        <ShowcaseDisplay
          className="aspect-ratio-17-20"
          src={ASSETS.showcase.mannequin}
          alt="Mannequin"
        />
      </div>
      <ShowcaseDisplay
        src={ASSETS.showcase.blacksmithAction}
        alt="Blacksmith"
      />
      <ShowcaseDisplay
        src={ASSETS.showcase.blacksmithCloseup}
        alt="Blacksmith closeup"
      />
      <ShowcaseDisplay
        src={ASSETS.showcase.athleteAction}
        alt="Athlete"
      />
      <ShowcaseDisplay
        src={ASSETS.showcase.athleteCloseup}
        alt="Athlete closeup"
      />
    </div>
  );
}
