import type { ReactNode } from "react";
import "./ContactInfo.css";


type Props = {
  iconSrc: string;
  label: string;
  href: string;
  filterClass?: string;
};

export default function ContactInfo(props: Props): ReactNode {
  const iconSrc: string = props.iconSrc;
  const label: string = props.label;
  const href: string = props.href;
  const filterClass: string = props.filterClass || "";

  return (
    <div className="contact-info-container gap-large">
      <img
        className={"icon-size-tiny " + filterClass}
        src={iconSrc}
        alt={label}
      />
      <div className="d-flex d-align-items-center h-100">
        <a
          className="w-100 text-align-end"
          href={href}
          target="_blank"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
