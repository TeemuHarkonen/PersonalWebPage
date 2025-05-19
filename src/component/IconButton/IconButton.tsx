import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export default function IconButton(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>): ReactNode {
  const className: string = "icon-size-tiny highlightable-text-icon cursor-pointer " + (props.className || "");
  
  return (
    <input
      {...props}
      className={className}
      type="image"
    />
  );
}
