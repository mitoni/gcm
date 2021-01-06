import React, { CSSProperties } from "react";

const index = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span {...rest} className={`${className} font-semibold`}>
      {children}
    </span>
  );
};

export default index;
