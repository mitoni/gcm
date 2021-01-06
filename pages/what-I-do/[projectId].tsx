import React from "react";
import Cover from "../../components/Cover";
import Section from "../../components/Section";
import { getData } from "../../lib/graphcms";
import { getLocales, getNameFromPath } from "../../lib/utils";
import { gql } from "graphql-request";
import { GetServerSideProps } from "next";

const _projectId_ = ({ project }) => {
  return (
    <React.Fragment>
      <Cover project={project} />
      {project?.sections?.map((s: any, i: number) => (
        <Section key={i} section={s} categories={project.categories} />
      ))}
    </React.Fragment>
  );
};

export default _projectId_;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const projectId = ctx.params.projectId as string;

  const _projectId = getNameFromPath(projectId.split(/\//).reverse()[0]);

  const { projects } = await getData(gql`
  query MyQuery {
    projects(where: { name: "${_projectId}"} locales: ${getLocales(ctx)}) {
      id
      name
      description
      year {
        name
      }
      categories {
        color {
          css
        }
        name
      }
      cover {
        url
      }
      sections {
        title
        image {
          url
        }
        imageCaption
        content {
          html
        }
      }
    }
  }
  `);
  return {
    props: {
      project: projects[0],
    },
  };
};
