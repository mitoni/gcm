import React, { HTMLAttributes } from "react";

const index = ({
  children,
  style = {},
  className = "",
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      style={style}
      className={`relative w-full flex flex-wrap flex-row p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default index;
