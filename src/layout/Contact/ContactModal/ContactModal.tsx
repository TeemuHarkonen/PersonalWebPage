import type { ReactNode } from "react";
import Contact from "../Contact";
import "./ContactModal.css";


export default function ContactModal(): ReactNode {
  return (
    <address className="d-flex d-justify-content-center d-align-items-center h-100">
      <div className="contact-modal-container pad-length-large bgc-emphasis border-radius-medium-length">
        <Contact />
      </div>
    </address>
  );
}
