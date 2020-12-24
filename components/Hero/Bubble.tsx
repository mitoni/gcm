import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { execute } from "../../lib/signals";
import { getPathFromName } from "../../lib/utils";

const Bubble = ({ project }) => {
  const RAF = useRef<number>();
  const now = useRef<number>(Date.now());
  const target = useRef<HTMLAnchorElement>(null);
  const [{ y, x }, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const animate = () => {
    const _now = Date.now();
    if (_now - now.current > 500) {
      setPosition((p) => ({
        x: p.x + Math.round((Math.random() * 50 - 25) * 1000) / 1000,
        y: p.y + Math.round((Math.random() * 50 - 25) * 1000) / 1000,
      }));
      now.current = _now;
    }
    RAF.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    target.current.style.top = `${window.innerHeight * Math.random()}px`;
    target.current.style.left = `${window.innerWidth * Math.random()}px`;
    RAF.current = requestAnimationFrame(animate);
    setTimeout(() => {
      setOpacity(0.75);
    }, 100);
    return () => {
      cancelAnimationFrame(RAF.current);
    };
  }, []);

  const handleMouseEnter = () => {
    execute.setProjectTitle(project.name);
    execute.setProjectDescription(project.description);
    setOpacity(1);
    cancelAnimationFrame(RAF.current);
  };

  const handleMouseLeave = () => {
    execute.setProjectTitle(null);
    execute.setProjectDescription(null);
    setOpacity(0.75);
    requestAnimationFrame(animate);
  };

  return (
    <Link href={`/what-I-do/${getPathFromName(project?.name)}`}>
      <a
        ref={target}
        className="pointer-events-auto transition duration-500 ease-linear"
        style={{
          position: "absolute",
          transform: `translate(${x}px, ${y}px)`,
          opacity: opacity,
          zIndex: 9,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="w-24 h-24 shadow-xl rounded-full"
          style={{
            backgroundImage: `url(${project?.cover?.url})`,
            backgroundSize: "cover",
          }}
        />
      </a>
    </Link>
  );
};

export default Bubble;
