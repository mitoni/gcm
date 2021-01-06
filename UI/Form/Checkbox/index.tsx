import React, { HTMLAttributes, InputHTMLAttributes, useState } from "react";
import Hyperlink from "../../Hyperlink";

const index = ({
  name,
  children,
  className = "",
  color = "#000",
  onChange,
}: IProps) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    onChange &&
      onChange(
        new CustomEvent("change", {
          detail: {
            name,
            value: !checked,
          },
        })
      );
    setChecked(!checked);
  };
  return (
    <div
      className={`relative inline-flex flex-row items-center cursor-pointer`}
      onClick={handleClick}
    >
      <div
        className={`absolute border h-full w-full pointer-events-none transition-transform ease-in-out-back origin-left duration-500 transform ${
          checked ? "scale-100" : "scale-0"
        }`}
        style={{
          borderColor: color,
        }}
      />
      <Hyperlink>
        <span className={`${className} mx-2`}>{children}</span>
      </Hyperlink>
    </div>
  );
};

export default index;

interface IProps {
  name: string;
  children?: any;
  className?: string;
  onChange?: (evt: CustomEvent) => void;
  color?: string;
}
