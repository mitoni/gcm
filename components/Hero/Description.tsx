import React, { useEffect, useRef, useState } from "react";
import { Events, execute, listen, unlisten } from "../../lib/signals";
import H2 from "../../UI/Headings/H2";
import FormatHTML from "../FormatHTML";
import anime, { AnimeTimelineInstance } from "animejs";
import P from "../../UI/Headings/P";

const Description = ({ homepage }: IProps) => {
  const bio = useRef(null);
  const desc = useRef(null);
  const anim = useRef<AnimeTimelineInstance>(null);
  const [title, setTitle] = useState<string>(null);
  const [description, setDescription] = useState<string>(null);

  const handleSetProjectHome = (text: string[]) => {
    const [_title, _description] = text;

    if (_title) {
      anim.current = anime
        .timeline({
          duration: 500,
          easing: "easeInOutQuad",
        })
        .add({
          targets: bio.current,
          opacity: [1, 0],
          skewX: [0, -10],
        })
        .add(
          {
            targets: desc.current,
            opacity: [0, 1],
            skewX: [10, 0],
          },
          250
        );
    } else {
      anim.current = anime
        .timeline({
          duration: 500,
          easing: "easeInOutQuad",
        })
        .add({
          targets: bio.current,
          opacity: [0, 1],
          skewX: [10, 0],
        });
    }

    setTitle(_title);
    setDescription(_description);
  };

  useEffect(() => {
    listen(Events.SET_PROJECT_HOME, handleSetProjectHome);
    return () => {
      unlisten(Events.SET_PROJECT_HOME, handleSetProjectHome);
    };
  }, []);

  const handleMouseEnter = () => {
    anim.current = anime
      .timeline({
        targets: bio.current,
        duration: 400,
        easing: "easeInOutQuad",
      })
      .add({
        opacity: [1, 0.25],
        filter: `blur(4px)`,
      })
      .add({
        opacity: [0.25, 1],
        filter: `blur(0px)`,
      });
    execute.addProject();
  };

  return (
    <div className="cursor-default w-full h-full flex flex-col justify-center items-center">
      <div className="absolute" ref={bio} onMouseEnter={handleMouseEnter}>
        <FormatHTML html={homepage?.text.html} />
      </div>
      <div ref={desc}>
        <H2>{title}</H2>
        <P>{description}</P>
      </div>
    </div>
  );
};

export default Description;

interface IProps {
  homepage?: any;
}
