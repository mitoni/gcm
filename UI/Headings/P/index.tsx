import React, { CSSProperties } from "react";

const index = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p {...rest} className={`${className} mb-2`} style={{ minHeight: "1rem" }}>
      {children}
    </p>
  );
};

export default index;
