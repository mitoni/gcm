import React, { useEffect, useRef, useState } from "react";
import Row from "../../layouts/Row";
import Col from "../../layouts/Col";
import { pickRandom } from "../../lib/utils";
import Bubble from "./Bubble";
import Description from "./Description";
import { Events, listen, unlisten } from "../../lib/signals";

const index = ({ projects, homepage }: IProps) => {
  const canvas = useRef<HTMLDivElement>(null);
  const [displayProjects, setDisplayProjects] = useState([]);

  const addProject = () => {
    setDisplayProjects((dp) => [...dp, pickRandom(projects)]);
  };

  useEffect(() => {
    listen(Events.ADD_PROJECT, addProject);
    return () => {
      unlisten(Events.ADD_PROJECT, addProject);
    };
  }, []);

  return (
    <Row className="h-screen">
      <div
        ref={canvas}
        className="absolute w-full h-full overflow-hidden pointer-events-none top-0 left-0"
      >
        {displayProjects.map((dp, i) => (
          <Bubble key={i} project={dp} />
        ))}
      </div>

      <Col>
        <Description homepage={homepage} />
      </Col>

      <Col>
        <img
          className="z-0 w-full h-full max-h-screen object-contain"
          src={homepage?.cover.url}
        />
      </Col>
    </Row>
  );
};

export default index;

interface IProps {
  projects: any[];
  homepage: any;
}
