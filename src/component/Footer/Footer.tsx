import { useEffect, useState, type ReactNode } from "react";
import IconButton from "../IconButton/IconButton";
import "./Footer.css";
import { ASSETS } from "../../config/assets.config";

export default function Footer(): ReactNode {
  const [isVisible, setVisible] = useState<boolean>();

  const decideIfVisible = () => {
    setVisible(document.documentElement.scrollTop > 0);
  }

  useEffect(() => {
    decideIfVisible();
    window.addEventListener("scroll", decideIfVisible);
    return () => window.removeEventListener("scroll", decideIfVisible);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  if( !isVisible ) {
    return <></>;
  }

  return (
    <div className="footer-container">
      <IconButton
        src={ASSETS.icon.util.arrowUp}
        onClick={handleScrollToTop}
      />
    </div>
  );
}
