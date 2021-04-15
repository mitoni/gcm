import React, { CSSProperties } from "react";
import Image from "next/image";
import parse, { domToReact } from "html-react-parser";
import H4 from "../../UI/Headings/H4";
import H3 from "../../UI/Headings/H3";
import H2 from "../../UI/Headings/H2";
import P from "../../UI/Headings/P";
import Strong from "../../UI/Headings/Strong";
import H1 from "../../UI/Headings/H1";
import Italic from "../../UI/Headings/Italic";
import Table from "../../UI/Headings/Table";
import Hyperlink from "../../UI/Hyperlink";
import H6 from "../../UI/Headings/H6";
import H5 from "../../UI/Headings/H5";

const index = ({ html, style, className = "" }: IProps) => {
  const renderChildren = ({ children }) => domToReact(children, options);
  const options = {
    replace: (node) => {
      switch (node.name) {
        case "h1":
          return <H1>{renderChildren(node)}</H1>;
        case "h2":
          return <H2>{renderChildren(node)}</H2>;
        case "h3":
          return <H3>{renderChildren(node)}</H3>;
        case "h4":
          return <H4>{renderChildren(node)}</H4>;
        case "h5":
          return <H5>{renderChildren(node)}</H5>;
        case "h6":
          return <H6>{renderChildren(node)}</H6>;

        case "p":
          return <P>{renderChildren(node)}</P>;

        case "ul":
          return <ul className="ml-4 list-disc">{renderChildren(node)}</ul>;
        case "ol":
          return <ol className="ml-4 list-decimal">{renderChildren(node)}</ol>;

        case "strong":
          return <Strong>{renderChildren(node)}</Strong>;
        case "em":
          return <Italic>{renderChildren(node)}</Italic>;

        case "a":
          return (
            <Hyperlink
              href={node.attribs.href}
              target={node.attribs.target}
              title={node.attribs.title}
              underline
            >
              {renderChildren(node)}
            </Hyperlink>
          );

        case "table":
          return <Table>{renderChildren(node)}</Table>;
        case "td":
          return (
            <td className="border border-black py-2 px-4">
              {renderChildren(node)}
            </td>
          );

        case "img":
          return (
            <img
              className="max-h-screen-3/4 w-full object-contain mx-auto"
              src={node.attribs.src}
              title={node.attribs.title}
              alt={node.attribs.alt}
            />
          );
        default:
          break;
      }
    },
  };
  if (html)
    return (
      <div className={className} style={style}>
        {parse(html, options)}
      </div>
    );
  return null;
};

export default index;

interface IProps {
  html: string;
  style?: CSSProperties;
  className?: string;
}
