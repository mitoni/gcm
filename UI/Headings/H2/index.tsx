import React, { CSSProperties } from "react";

const index = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 {...rest} className={`${className} font-headline text-6xl mb-2`}>
      {children}
    </h2>
  );
};

export default index;
