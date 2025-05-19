import { useEffect, useState, type ReactNode } from "react";
import "./Header.css";
import { APP_PAGES, type AppPage } from "../../config/pages.config";
import Hamburger, { type HamburgerOption } from "../Hamburger/Hamburger";
import { Link } from "react-router";
import useTranslation from "../../hook/useTranslation";
import LanguageSelection from "../LanguageSelection/LanguageSelection";
import Dropmenu from "../Dropmenu/Dropmenu";
import NavigationItem from "./NavigationItem";
import Modal from "../Modal/Modal";
import ContactStandard from "../../layout/Contact/ContactStandard/ContactStandard";
import ContactModal from "../../layout/Contact/ContactModal/ContactModal";


function NavigationHamburger(): ReactNode {
  const [isContactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const {t} = useTranslation();

  const options: HamburgerOption[] = APP_PAGES.map(
    (page: AppPage) => {
      return {
        key: page.id,
        element: (
          <Link
            className="highlightable-text font-size-major cursor-pointer"
            to={page.link}
            style={{textDecoration: "none"}}
          >
            {t("navigation." + page.id)}
          </Link>
        )
      };
    });

  options.push({
    key: "_contact",
    element: (
      <button
        className="non-button cursor-pointer highlightable-text font-size-major shadow-major-highlight"
        onClick={() => setContactModalOpen(true)}
      >
        {t("navigation.page-contact")}
      </button>
    )
  })

  return (
    <>
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
      >
        <ContactModal />
      </Modal>
      <Hamburger options={options} />
    </>
  );
}


export default function Header(): ReactNode {
  const [menuConfig, setMenuConfig] = useState<"standard" | "hamburger">("standard");
  const {t} = useTranslation();

    /**
     * Checks the window dimensions and decides the appropriate menu type 
     * (standard = desktop etc., hamburger = mobile etc.)
    */
  const decideMenuConfig = () => {
    setMenuConfig(window.innerWidth < 620 ? "hamburger" : "standard");
  };

  useEffect(() => {
    decideMenuConfig();
    window.addEventListener("resize", decideMenuConfig);
    return () => window.removeEventListener("resize", decideMenuConfig);
  }, []);

  return (
    <nav className="app-header h-medium-size bgc-emphasis c-glyph-major">
      {menuConfig == "standard" ? (
        <>
          <div />
          <div className="header-standard-navigation-container">
            <ul className="header-navigation">
              {APP_PAGES.map((page: AppPage) => {
                return (
                  <NavigationItem key={page.id}>
                    <Link
                      className="highlightable-text cursor-pointer font-size-major"
                      to={page.link}
                      style={{textDecoration: "none"}}
                    >
                      {t("navigation." + page.id)}
                    </Link>
                  </NavigationItem>
                );
              })}
            </ul>
            <div className="h-100 ml-length-medium">
              <Dropmenu
                title={t("navigation.page-contact") || ""}
                buttonProps={{className: "non-button highlightable-text cursor-pointer font-size-major dropmenu"}}
              >
                <ContactStandard />
              </Dropmenu>
            </div>
          </div>
        </>
      ) : (
        <>
          <NavigationHamburger />
          <div />
        </>
      )}
      <div className="d-flex d-align-items-center d-justify-content-end mr-length-extra-large">
        <LanguageSelection />
      </div>
    </nav>
  );
}
