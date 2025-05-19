import { useState, type ReactNode } from "react";

import "./Hamburger.css";

import IconButton from "../IconButton/IconButton";
import Modal from "../Modal/Modal";
import { ASSETS } from "../../config/assets.config";

export type HamburgerOption = {
  key: string;
  element: ReactNode;
};

type Props = {
  options: HamburgerOption[];
};

export default function Hamburger(props: Props): ReactNode {
  const options: HamburgerOption[] = props.options;
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="d-flex d-align-items-center w-100 h-100">
      <IconButton
        className="ml-length-extra-large"
        src={ASSETS.icon.util.menuHamburger}
        onClick={() => setOpen(!isOpen)}
      />
      {isOpen && (
        <Modal onClose={() => setOpen(false)}>
          <div className="d-flex d-justify-content-center d-align-items-center w-100 h-100">
            <ul className="hamburger-list">
              {options.map((option: HamburgerOption) => {
                return (
                  <li
                    key={option.key}
                    onClick={() => setOpen(false)}
                  >
                    {option.element}
                  </li>
                );
              })}
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
}
