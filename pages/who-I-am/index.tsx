import React from "react";
import FormatHTML from "../../components/FormatHTML";
import Col from "../../layouts/Col";
import Row from "../../layouts/Row";
import { getData } from "../../lib/graphcms";
import { gql } from "graphql-request";
import { GetServerSideProps } from "next";
import { getLocales } from "../../lib/utils";

const index = ({ cv }) => {
  return (
    <Row>
      <Col className="w-full">
        <FormatHTML html={cv.text.html} />
      </Col>
    </Row>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { pages } = await getData(
    gql`
      query MyQuery {
        pages(where: { name: "cv" } locales: ${getLocales(ctx)}) {
          text {
            html
          }
        }
      }
    `
  );

  return {
    props: {
      cv: pages[0],
    },
  };
};
