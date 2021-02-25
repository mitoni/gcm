import Hero from "../components/Hero";
import { getData } from "../lib/graphcms";
import { gql } from "graphql-request";
import { getLocales } from "../lib/utils";
import { GetServerSideProps } from "next";

const Home = ({ projects, homepage }) => {
  return (
    <div className="h-full w-full">
      <Hero projects={projects} homepage={homepage} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { projects, pages } = await getData(
    gql`
      query MyQuery {
        projects (locales: ${getLocales(ctx)}) {
          categories {
            color {
              css
              rgba {
                r
                g
                b
                a
              }
            }
          }
          name
          description
          cover {
            url
          }
        }

        pages(where: { name: "homepage" }, locales: ${getLocales(ctx)}) {
          text {
            html
          }
          cover {
            url
          }
        }
      }
    `
  );

  return {
    props: {
      projects,
      homepage: pages[0],
    },
  };
};
