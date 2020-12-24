import React, { CSSProperties } from "react";

const index = ({ children, className = "", style }: IProps) => {
  return (
    <h1 style={style} className={`${className} font-semibold text-5xl mb-4`}>
      {children}
    </h1>
  );
};

export default index;

interface IProps {
  children: string;
  className?: string;
  style?: CSSProperties;
}
