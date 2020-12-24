import React, { useEffect, useRef, useState } from "react";
import { Events, listen, unlisten } from "../../lib/signals";
import H2 from "../../UI/Headings/H2";
import H4 from "../../UI/Headings/H4";

const Description = () => {
  const target = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState<string>(null);
  const [description, setDescription] = useState<string>(null);

  const handleSetTitle = (text: string) => {
    setTitle(text);
  };
  const handleSetDescription = (text: string) => {
    setDescription(text);
  };

  useEffect(() => {
    listen(Events.SetProjectTitle, handleSetTitle);
    listen(Events.SetProjectDescription, handleSetDescription);
    return () => {
      unlisten(Events.SetProjectTitle, handleSetTitle);
      unlisten(Events.SetProjectDescription, handleSetDescription);
    };
  }, []);

  return (
    <div
      ref={target}
      className="absolute top-0 left-0 h-full w-full flex flex-col justify-center p-4"
    >
      <H2 className="text-white" style={{ mixBlendMode: "difference" }}>
        {title}
      </H2>
      <H4 className="text-white" style={{ mixBlendMode: "difference" }}>
        {description}
      </H4>
    </div>
  );
};

export default Description;
