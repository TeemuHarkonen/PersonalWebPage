import type { PropsWithChildren, ReactNode } from "react";

export default function NavigationItem(props: PropsWithChildren): ReactNode {
  return (
    <li className="d-inline-block ml-length-medium mr-length-medium h-100">
      <span className="d-flex d-justify-content-center h-100">{props.children}</span>
    </li>
  );
}
