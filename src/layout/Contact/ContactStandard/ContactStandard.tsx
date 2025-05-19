import type { ReactNode } from "react";
import "./ContactStandard.css";
import Contact from "../Contact";


export default function ContactStandard(): ReactNode {
  return (
    <address className="contact-container">
      <Contact />
    </address>
  );
}
