import React from "react";
import Col from "../../layouts/Col";
import Row from "../../layouts/Row";
import H1 from "../../UI/Headings/H1";
import H4 from "../../UI/Headings/H4";
import H6 from "../../UI/Headings/H6";
import P from "../../UI/Headings/P";

const index = ({ project }: IProps) => {
  const categories = project.categories;
  const categoriesColors = categories?.map((c: any) => c.color.css);
  return (
    <Row className="h-screen">
      <Col className="flex flex-col justify-center">
        <div className="relative">
          <H6>{project.year?.name}</H6>
          {categoriesColors.map((c: string, i: number) => (
            <div
              key={i}
              className="absolute top-0 h-full w-1"
              style={{ backgroundColor: c, marginLeft: `-${i * 5 + 10}px` }}
            />
          ))}
          <div className="flex flex-row">
            {project.categories?.map((c, i: number) => (
              <H4 key={i}>{`${c.name} ${
                i !== project.categories.length - 1 ? "&" : ""
              }\u00A0`}</H4>
            ))}
          </div>
          <H1>{project.name}</H1>
          <P>{project.description}</P>
        </div>
      </Col>
      <Col className="flex flex-col justify-center">
        <img
          src={project.cover.url}
          className="w-full h-full max-h-screen object-contain"
        />
      </Col>
    </Row>
  );
};

export default index;

interface IProps {
  project: any;
}
