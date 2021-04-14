import React, { CSSProperties } from "react";

const index = React.forwardRef(
  (
    { children, className, ...rest }: React.HTMLAttributes<HTMLHeadingElement>,
    ref: React.ForwardedRef<HTMLHeadingElement>
  ) => {
    return (
      <h6
        {...rest}
        ref={ref}
        className={`${className} font-medium text-sm mb-2`}
        style={{ minHeight: "1rem" }}
      >
        {children}
      </h6>
    );
  }
);

export default index;
