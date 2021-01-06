import React, { CSSProperties } from "react";

const index = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLTableElement>) => {
  return (
    <table {...rest} className={`${className} table-auto w-full`}>
      {children}
    </table>
  );
};

export default index;
