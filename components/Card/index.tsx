import anime, { AnimeTimelineInstance } from "animejs";
import Link from "next/link";
import React, { HTMLAttributes, useRef } from "react";
import { getPathFromName } from "../../lib/utils";
import H3 from "../../UI/Headings/H3";
import H6 from "../../UI/Headings/H6";

const index = ({ className = "", project }: IProps) => {
  const anim = useRef<AnimeTimelineInstance>(null);
  const titleContainer = useRef<HTMLHeadingElement>(null);
  const descriptionContainer = useRef<HTMLHeadingElement>(null);

  const handleMouseEnter = () => {
    anim.current && anim.current.pause();
    anim.current = anime
      .timeline({
        duration: 500,
        easing: "easeInOutQuad",
      })
      .add({
        targets: titleContainer.current,
        opacity: [1, 0],
      })
      .add(
        {
          targets: descriptionContainer.current,
          opacity: [0, 1],
        },
        250
      );
  };

  const handleMouseLeave = () => {
    anim.current && anim.current.pause();
    anim.current = anime
      .timeline({
        duration: 500,
        easing: "easeInOutQuad",
      })
      .add({
        targets: descriptionContainer.current,
        opacity: [1, 0],
      })
      .add(
        {
          targets: titleContainer.current,
          opacity: [0, 1],
        },
        250
      );
  };

  return (
    <Link href={`/what-I-do/${getPathFromName(project.name)}`}>
      <a
        className={`${className} w-1/2 h-60 p-2`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="relative w-full h-full flex flex-col items-center justify-center p-4"
          style={{
            background: `linear-gradient(135deg, ${project.categories?.map(
              (c: any) => {
                const _rgba: string = c.color.css.replace("rgb", "rgba");
                const rgba =
                  _rgba.slice(0, _rgba.length - 1) +
                  ",0.15" +
                  _rgba.slice(_rgba.length - 1);
                if (project.categories?.length === 1) return `${rgba}, ${rgba}`;
                return rgba;
              }
            )})`,
          }}
        >
          <div
            ref={titleContainer}
            className="absolute w-full h-full flex flex-col items-center justify-center overflow-hidden p-2"
            style={{
              background: `url(${project.cover?.url})`,
              backgroundSize: "cover",
            }}
          >
            <H3
              style={{
                color: "white",
                mixBlendMode: "exclusion",
              }}
            >
              {project.name}
            </H3>
          </div>

          <div
            ref={descriptionContainer}
            className="absolute w-full h-full flex flex-col items-center justify-center overflow-hidden p-2 opacity-0"
          >
            <H6>{project.description}</H6>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default index;

interface IProps extends HTMLAttributes<HTMLDivElement> {
  project: any;
}
