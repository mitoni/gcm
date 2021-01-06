import anime, { AnimeTimelineInstance } from "animejs";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { execute } from "../../lib/signals";
import { getPathFromName } from "../../lib/utils";

const Bubble = ({ project }) => {
  const anim = useRef<AnimeTimelineInstance>(null);
  const target = useRef<HTMLAnchorElement>(null);
  const mult = useRef<number>(Math.random());

  useEffect(() => {
    target.current.style.top = `${
      (window.innerHeight - 200) * Math.random() + 100
    }px`;
    target.current.style.left = `${
      (window.innerWidth - 200) * Math.random() + 100
    }px`;

    anim.current = anime.timeline().add({
      targets: target.current,
      scale: [0, 1],
      opacity: [0, 1],
      duration: 500,
      easing: "easeInOutQuad",
    });
  }, []);

  const handleMouseEnter = () => {
    anim.current && anim.current.pause();
    anim.current = anime.timeline().add({
      targets: target.current,
      scale: [1, 1.2],
      duration: 250,
      easing: "easeInOutQuad",
    });
    execute.setProjectHome(project.name, project.description);
  };

  const handleMouseLeave = () => {
    anim.current && anim.current.pause();
    execute.setProjectHome(null);
    anim.current = anime.timeline().add({
      targets: target.current,
      scale: [1.2, 0.8],
      opacity: [1, 0],
      duration: 500,
      easing: "easeInOutQuad",
      begin: () => (target.current.style.pointerEvents = "none"),
      complete: () => {
        if (target.current) target.current.style.visibility = "hidden";
      },
    });
  };

  return (
    <Link href={`/what-I-do/${getPathFromName(project?.name)}`}>
      <a
        ref={target}
        className="absolute pointer-events-auto z-10 opacity-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="rounded-full"
          style={{
            height: `${mult.current * 40 + 80}px`,
            width: `${mult.current * 40 + 80}px`,
            backgroundImage: `url(${project?.cover?.url})`,
            backgroundSize: "cover",
            filter: project?.categories.reduce(
              (acc: string, curr, i: number) => {
                const col = curr.color.css;
                acc += `drop-shadow(${i + 3}px ${i + 3}px 0px ${col}) `;
                return acc;
              },
              ""
            ),
          }}
        />
      </a>
    </Link>
  );
};

export default Bubble;
