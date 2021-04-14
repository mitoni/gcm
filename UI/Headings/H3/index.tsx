import React, { HTMLAttributes } from "react";

const index = React.forwardRef(
  (
    { className, children, ...rest }: HTMLAttributes<HTMLHeadingElement>,
    ref: React.ForwardedRef<HTMLHeadingElement>
  ) => {
    return (
      <h4
        ref={ref}
        {...rest}
        className={`${className} text-2xl mb-2`}
        style={{ minHeight: "1rem" }}
      >
        {children}
      </h4>
    );
  }
);

export default index;
