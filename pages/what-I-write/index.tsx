import React from "react";
import FormatHTML from "../../components/FormatHTML";
import Col from "../../layouts/Col";
import Row from "../../layouts/Row";
import { getData } from "../../lib/graphcms";
import { gql } from "graphql-request";
import { GetServerSideProps } from "next";
import { getLocales } from "../../lib/utils";

const index = ({ bibliography }) => {
  return (
    <Row>
      <Col className="w-full">
        <FormatHTML html={bibliography.text.html} />
      </Col>
    </Row>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { pages } = await getData(
    gql`
      query MyQuery {
        pages(where: { name: "bibliography" } locales: ${getLocales(ctx)}) {
          text {
            html
          }
        }
      }
    `
  );

  return {
    props: {
      bibliography: pages[0],
    },
  };
};
