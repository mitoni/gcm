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

  console.log("project.categories", project.categories);

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
            filter:
              "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
            // filter: project?.categories.reduce(
            //   (acc: string, curr, i: number) => {
            //     const { r, g, b } = curr.color.rgba;
            //     acc += `drop-shadow(0px 0px 30px rgba(${r}, ${g}, ${b}, 0.20) `;
            //     return acc;
            //   },
            //   ""
            // ),
          }}
        />
      </a>
    </Link>
  );
};

export default Bubble;
