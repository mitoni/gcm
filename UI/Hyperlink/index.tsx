import React, { useRef } from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { mouseAtom } from "../../recoil/atoms";

const index = ({ children, href, className = "" }: IProps) => {
  const [mouse, setMouse] = useRecoilState(mouseAtom);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mouse.active) setMouse((m) => ({ ...m, active: true }));
  };
  const handleMouseOut = (e: React.MouseEvent) => {
    if (mouse.active) setMouse((m) => ({ ...m, active: false }));
  };

  return (
    <Link href={href} passHref>
      <a
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        className={`${className}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default index;

interface IProps {
  children: JSX.Element;
  href: string;
  className?: string;
}
