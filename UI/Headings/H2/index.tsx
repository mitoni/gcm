import React, { CSSProperties } from "react";

const index = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      {...rest}
      className={`${className} font-headline text-5xl sm:text-6xl mb-4`}
      style={{ minHeight: "1rem" }}
    >
      {children}
    </h2>
  );
};

export default index;
