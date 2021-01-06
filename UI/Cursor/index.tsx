import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { mouseAtom } from "../../recoil/atoms";

const index = () => {
  const [mouse, setMouse] = useRecoilState(mouseAtom);

  const handleMouseMove = (e: MouseEvent) => {
    if (!mouse.active) return;
    setMouse((m) => ({ ...m, x: e.clientX, y: e.clientY }));
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  });

  return (
    <div
      className={`fixed pointer-events-none w-10 h-10 ${
        mouse.active ? "scale-100" : "scale-0"
      } rounded-full border border-black transition-transform ease-in-out-back duration-500 transform -translate-x-1/2 -translate-y-1/2`}
      style={{
        top: `${mouse.y}px`,
        left: `${mouse.x}px`,
      }}
    ></div>
  );
};

export default index;
