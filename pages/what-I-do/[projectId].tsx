import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import Cover from "../../components/Cover";
import Row from "../../layouts/Row";
import { getData } from "../../lib/graphcms";
import { getNameFromPath } from "../../lib/utils";

const _projectId_ = () => {
  const { asPath } = useRouter();
  const projectId = getNameFromPath(asPath.split(/\//).reverse()[0]);

  const { data: project } = useSWR(
    `
    query MyQuery {
      projects(where: { name: "${projectId}"}) {
        name
        description
        categories {
          color {
            css
          }
          name
        }
        cover {
          url
        }
        id
      }
    }
  `,
    getData
  );

  return (
    <Row>
      <Cover project={project} />
    </Row>
  );
};

export default _projectId_;
