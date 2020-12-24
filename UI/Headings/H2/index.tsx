import React, { CSSProperties } from "react";

const index = ({ children, className = "", style }: IProps) => {
  return (
    <h4 style={style} className={`${className} font-headline text-6xl mb-2`}>
      {children}
    </h4>
  );
};

export default index;

interface IProps {
  children: string;
  className?: string;
  style?: CSSProperties;
}
