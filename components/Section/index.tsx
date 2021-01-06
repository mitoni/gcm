import React from "react";
import Col from "../../layouts/Col";
import Row from "../../layouts/Row";
import H2 from "../../UI/Headings/H2";
import FormatHTML from "../FormatHTML";

const index = ({ section, categories }: IProps) => {
  const image = section?.image?.url;
  const caption = section?.imageCaption;
  const title = section?.title;
  const content = section?.content?.html;

  if (!content && !image)
    return (
      <Row className="w-full">
        <H2 className="w-full text-center">{title}</H2>
      </Row>
    );

  if (!image && !title)
    return (
      <Row className="w-full flex-col justify-center">
        <Col
          className="w-full"
          style={{
            background: `linear-gradient(135deg, ${categories.map((c) => {
              const _rgba: string = c.color.css.replace("rgb", "rgba");
              const rgba =
                _rgba.slice(0, _rgba.length - 1) +
                ",0.15" +
                _rgba.slice(_rgba.length - 1);
              if (categories.length === 1) return `${rgba}, ${rgba}`;
              return rgba;
            })})`,
          }}
        >
          <FormatHTML className="w-full text-center px-8 py-6" html={content} />
        </Col>
      </Row>
    );

  if (!content && !title)
    return (
      <Row>
        <Col className="w-full items-center">
          <div>
            <img src={image} className="max-h-screen-3/4 object-contain" />
            {caption && <div className="w-10 h-1 bg-black" />}
            <p className="text-sm mt-2">{caption}</p>
          </div>
        </Col>
      </Row>
    );

  return (
    <Row>
      <Col>
        <H2>{title}</H2>
        <FormatHTML html={content} />
      </Col>
      <Col className="items-center">
        <div>
          <img src={image} className="max-h-screen-3/4 object-contain" />
          {caption && <div className="w-10 h-1 bg-black" />}
          <p className="text-sm mt-2 w-full">{caption}</p>
        </div>
      </Col>
    </Row>
  );
};

export default index;

interface IProps {
  section: any;
  categories: any[];
}
