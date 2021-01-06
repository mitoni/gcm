import React, { CSSProperties, HTMLAttributes } from "react";

const index = ({
  children,
  style = {},
  className = "",
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      style={style}
      className={`relative w-1/2 h-full flex flex-col p-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default index;
