import React, { CSSProperties } from "react";
import ReactDOMServer from "react-dom/server";
import HtmlToReact, { Parser } from "html-to-react";
import H4 from "../../UI/Headings/H4";
import H3 from "../../UI/Headings/H3";
import H2 from "../../UI/Headings/H2";
import P from "../../UI/Headings/P";

const index = ({ html, style }: IProps) => {
  const parser = new Parser();
  const processNodeDef = new HtmlToReact.ProcessNodeDefinitions(React);
  const instructions = [
    {
      shouldProcessNode: (node) => {
        return node?.parent?.name === "h2";
      },
      processNode: (node) => {
        return <H2 style={style}>{node.data}</H2>;
      },
    },
    {
      shouldProcessNode: (node) => {
        return node?.parent?.name === "h3";
      },
      processNode: (node) => {
        return <H3 style={style}>{node.data}</H3>;
      },
    },
    {
      shouldProcessNode: (node) => {
        return node?.parent?.name === "h4";
      },
      processNode: (node) => {
        return <H4 style={style}>{node.data}</H4>;
      },
    },
    {
      shouldProcessNode: (node) => {
        return node?.parent?.name === "p";
      },
      processNode: (node) => {
        return <P style={style}>{node.data}</P>;
      },
    },
    {
      shouldProcessNode: () => {
        return true;
      },
      processNode: processNodeDef.processDefaultNode,
    },
  ];

  if (html) {
    const element = parser.parseWithInstructions(
      html,
      () => true,
      instructions
    );
    const _html = ReactDOMServer.renderToStaticMarkup(element);
    return <div dangerouslySetInnerHTML={{ __html: _html }} />;
  }
  return null;
};

export default index;

interface IProps {
  html: string;
  style?: CSSProperties;
}
