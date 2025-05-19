import type { HTMLProps, ReactNode } from "react";
import "./PageContainer.css";


export default function PageContainer(props: HTMLProps<HTMLDivElement>): ReactNode {
  const className: string = (props.className || "") + " page-container";
  return (
    <div className="d-flex d-justify-content-center w-100">
      <div
        className={className}
        {...props}
      >
        {props.children}
      </div>
    </div>
  );
}
