import React from "react";

const index = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 {...rest} className={`${className} font-semibold text-5xl mb-4`}>
      {children}
    </h1>
  );
};

export default index;
