import React, { InputHTMLAttributes } from "react";

const index = ({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...rest}
      className={`${className} bg-transparent border-b border-t border-black outline-none p-2`}
    />
  );
};

export default index;
