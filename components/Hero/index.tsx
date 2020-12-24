import React, { useRef, useState } from "react";
import useSWR from "swr";
import { getData } from "../../lib/graphcms";
import Row from "../../layouts/Row";
import Col from "../../layouts/Col";
import FormatHTML from "../FormatHTML";
import { pickRandom } from "../../lib/utils";
import Bubble from "./Bubble";
import Description from "./Description";

const index = () => {
  const canvas = useRef<HTMLDivElement>(null);
  const [displayProjects, setDisplayProjects] = useState([]);
  const { data: projects } = useSWR(
    `
    query MyQuery {
      projects {
        categories {
          color {
            css
          }
        }
        name
        description
        cover {
          url
        }
      }
    }
  `,
    getData
  );

  const { data: homepage } = useSWR(
    `
      query MyQuery {
        pages (where: {name: "homepage"}) {
          text {
            html
          }
          cover {
            url
          }
        }
      }
    `,
    getData
  );

  const handleMouseOver = (e: React.MouseEvent) => {
    setDisplayProjects((dp) => [...dp, pickRandom(projects)]);
  };

  return (
    <Row>
      <div
        ref={canvas}
        className="absolute overflow-hidden pointer-events-none top-0 left-0 w-screen h-screen"
      >
        {displayProjects.map((dp, i) => (
          <Bubble key={i} project={dp} />
        ))}
      </div>
      <Col className="justify-center items-center">
        <div onMouseOver={handleMouseOver}>
          <FormatHTML html={homepage?.text.html} />
        </div>
      </Col>
      <Col>
        <Description />
        <img
          className="w-full h-full object-contain"
          src={homepage?.cover.url}
        />
      </Col>
    </Row>
  );
};

export default index;
