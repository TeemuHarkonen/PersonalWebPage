import { type PropsWithChildren, type ReactNode } from "react";
import "./Modal.css";
import IconButton from "../IconButton/IconButton";
import { ASSETS } from "../../config/assets.config";


type Props = {
  onClose?: () => void;
  isOpen?: boolean;
} & PropsWithChildren;

export default function Modal(props: Props): ReactNode {
  const onClose = props.onClose || function(){};
  const isOpen: boolean = props.isOpen ?? true;
  const children: ReactNode = props.children;

  if( !isOpen ) {
    return <></>;
  }

  return (
    <div className="modal-overlay">
      <div className="d-flex d-justify-content-end w-100 c-glyph-major">
        <IconButton
          className="mt-length-medium mr-length-medium"
          src={ASSETS.icon.util.close}
          onClick={onClose}
        />
      </div>
      {children}
    </div>
  );
}
