import React from "react";
import { useRouter } from "next/router";
import H4 from "../../UI/Headings/H4";

const MenuItem = ({ children, path }: IProps) => {
  const { pathname } = useRouter();
  const current = pathname.split("/")[1];
  return (
    <div
      className={`relative transform rotate-180 flex items-center justify-center py-2`}
      style={{
        writingMode: "vertical-lr",
      }}
    >
      <div
        className={`absolute border border-black h-full w-full transition-transform ease-in-out-back origin-top duration-500 transform ${
          current === path ? "scale-100" : "scale-0"
        }`}
      />
      <H4 style={{ mixBlendMode: "difference" }}>{children}</H4>
    </div>
  );
};

export default MenuItem;

interface IProps {
  children: string;
  path: string;
}
