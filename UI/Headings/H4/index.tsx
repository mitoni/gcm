import React, { CSSProperties } from "react";

const index = React.forwardRef(
  (
    { children, className, ...rest }: React.HTMLAttributes<HTMLHeadingElement>,
    ref: React.ForwardedRef<HTMLHeadingElement>
  ) => {
    return (
      <h4
        ref={ref}
        {...rest}
        className={`${className} font-medium text-lg mb-2`}
        style={{ minHeight: "1rem" }}
      >
        {children}
      </h4>
    );
  }
);

export default index;
