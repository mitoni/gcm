import React from "react";

const index = ({ children, className = "" }: IProps) => {
  return (
    <div className={`relative w-full h-full flex flex-col p-2 ${className}`}>
      {children}
    </div>
  );
};

export default index;

interface IProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}
