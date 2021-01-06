import React from "react";
import { gql } from "graphql-request";
import { getData } from "../../lib/graphcms";
import { getLocales } from "../../lib/utils";
import { GetServerSideProps } from "next";
import FormatHTML from "../../components/FormatHTML";
import Col from "../../layouts/Col";
import Row from "../../layouts/Row";

const index = ({ contactPage }) => {
  return (
    <Row>
      <Col className="w-full">
        <FormatHTML html={contactPage.text.html} />
      </Col>
    </Row>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { pages } = await getData(gql`
    query MyQuery {
      pages(where: { name: "contact" }, locales: ${getLocales(ctx)}) {
          text {
            html
          }
        }
    }
  `);
  return {
    props: { contactPage: pages[0] },
  };
};
