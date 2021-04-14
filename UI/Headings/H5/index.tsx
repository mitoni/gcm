import React, { CSSProperties } from "react";

const index = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h5
      {...rest}
      className={`${className} font-medium mb-2`}
      style={{ minHeight: "1rem" }}
    >
      {children}
    </h5>
  );
};

export default index;
