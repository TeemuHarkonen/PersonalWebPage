import { useState, type ButtonHTMLAttributes, type DetailedHTMLProps, type PropsWithChildren, type ReactNode } from "react";
import "./Dropmenu.css";
import { ASSETS } from "../../config/assets.config";

type Props = {
  title: string;
  buttonProps?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
} & PropsWithChildren;

export default function Dropmenu(props: Props): ReactNode {
  const title = props.title;
  const buttonProps = props.buttonProps || {};
  const children = props.children;
  const buttonOnClick = buttonProps?.onClick || function(){};

  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div
      className="dropmenu-container"
      onMouseLeave={() => setOpen(false)}
    >
      <div className="d-flex d-justify-content-center h-100">
        <button
          {...buttonProps}
          onClick={(e) => {
            buttonOnClick(e);
            setOpen((prev: boolean) => !prev)
          }}
        >
          {title}
        </button>
        <div className="dropmenu-icon-container">
          <img
            className="filter-glyph-major icon-size-sprite ml-length-medium"
            src={ASSETS.icon.util.arrowTriangleDown}
            alt="Expand"
          />
        </div>
      </div>
      {isOpen && (
        <div className={"dropmenu-menu-container"}>
          {children}
        </div>
      )}
    </div>
  );
}
