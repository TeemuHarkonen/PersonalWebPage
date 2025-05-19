import type { PropsWithChildren, ReactNode } from "react";

type BackdropSettings = {
  left: string;
  top: string;
  width: string;
  height: string;
};

type Props = {
  backdrop: BackdropSettings;
} & PropsWithChildren;

export default function LogoBackdrop(props: Props): ReactNode {
  const backdrop: BackdropSettings = props.backdrop;
  const children: ReactNode = props.children;

  return (
    <div className="p-relative">
      <div
        className="p-absolute"
        style={{
          left: backdrop.left,
          top: backdrop.top,
          width: backdrop.width,
          height: backdrop.height,
          backgroundColor: "white",
        }}
      />
      <div className="p-relative">
        {children}
      </div>
    </div>
  );
}
