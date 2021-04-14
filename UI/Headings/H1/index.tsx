import React from "react";

const index = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      {...rest}
      className={`${className} font-semibold text-4xl sm:text-5xl mb-4`}
      style={{ minHeight: "1rem" }}
    >
      {children}
    </h1>
  );
};

export default index;
