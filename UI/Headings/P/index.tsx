import React, { CSSProperties } from "react";

const index = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p {...rest} className={`${className} mb-2`}>
      {children}
    </p>
  );
};

export default index;
