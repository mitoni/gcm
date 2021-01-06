import React, { useRef } from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { mouseAtom } from "../../recoil/atoms";

const index = ({
  children,
  className,
  href,
  underline = false,
  ...rest
}: IProps) => {
  const [mouse, setMouse] = useRecoilState(mouseAtom);

  const handleMouseMove = () => {
    if (!mouse.active) setMouse((m) => ({ ...m, active: true }));
  };
  const handleMouseOut = () => {
    if (mouse.active) setMouse((m) => ({ ...m, active: false }));
  };

  if (!href)
    return (
      <a
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        className={`${className} ${
          underline && "border-b border-black"
        } cursor-pointer`}
        {...rest}
      >
        {children}
      </a>
    );

  return (
    <Link href={href} passHref>
      <a
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        className={`${className} ${underline && "border-b border-black"}`}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
};

export default index;

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  underline?: boolean;
}
