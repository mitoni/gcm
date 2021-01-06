import React, { useEffect, useState } from "react";
import Col from "../../layouts/Col";
import Row from "../../layouts/Row";
import { getData } from "../../lib/graphcms";
import Checkbox from "../../UI/Form/Checkbox";
import Input from "../../UI/Form/Input";
import H4 from "../../UI/Headings/H4";
import { union, without } from "lodash";
import Card from "../../components/Card";
import { gql } from "graphql-request";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getLocales } from "../../lib/utils";

const index = ({ years, categories, keywords }) => {
  const [filteredProj, setFilteredProj] = useState([]);
  const [filters, setFilters] = useState<IFilter>({
    name: "",
    categories: [],
    years: [],
    keywords: [],
  });

  const { locale } = useRouter();

  useEffect(() => {
    filterProj();
  }, [filters]);

  const filterProj = async () => {
    const query = gql`
    query MyQuery {
      projects(
        where: {
        name_starts_with: "${filters.name}"
        ${
          filters.categories.length > 0
            ? `categories_some: {name_in: ${JSON.stringify(
                filters.categories
              )}}`
            : ""
        }
        ${
          filters.years.length > 0
            ? `year: {name_in: ${JSON.stringify(filters.years)}}`
            : ""
        }
        ${
          filters.keywords.length > 0
            ? `keywords_some: {name_in: ${JSON.stringify(filters.keywords)}}`
            : ""
        }
      }){
        categories {
          color {
            css
          }
        }
        name
        description
        cover {
          url
        }
      }
    }
    `;
    const { projects } = await getData(query);
    if (projects) setFilteredProj(projects);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setFilters((prev) => ({ ...prev, name: text }));
  };

  const handleToggle = (e: CustomEvent, filterName: string) => {
    const { name, value } = e.detail;
    if (value) {
      const _filtered = union(filters[filterName], [name]);
      setFilters((prev) => ({ ...prev, [filterName]: _filtered }));
    } else {
      const _filtered = without(filters[filterName], name);
      setFilters((prev) => ({ ...prev, [filterName]: _filtered }));
    }
  };

  return (
    <Row className="w-full h-full">
      <Col className="justify-start items-center">
        <Row>
          <Input
            onChange={handleSearch}
            placeholder="Search"
            className="w-full"
          />
        </Row>
        <Row>
          <Col className="border-l border-black">
            <H4>Category</H4>
            <div>
              {categories.map(
                ({ name, color: { css } }, i: number) =>
                  name && (
                    <Checkbox
                      name={name}
                      color={css}
                      key={i}
                      onChange={(e) => handleToggle(e, "categories")}
                    >
                      {name}
                    </Checkbox>
                  )
              )}
            </div>
          </Col>
          <Col className="border-l border-black">
            <H4>Year</H4>
            <div>
              {years.map(
                ({ name }, i: number) =>
                  name && (
                    <Checkbox
                      name={name}
                      key={i}
                      onChange={(e) => handleToggle(e, "years")}
                    >
                      {name}
                    </Checkbox>
                  )
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="w-full border-t border-black">
            <H4>Keywords</H4>
            <div className="flex flex-row">
              {keywords.map(
                ({ name }, i: number) =>
                  name && (
                    <Checkbox
                      name={name}
                      key={i}
                      onChange={(e) => handleToggle(e, "keywords")}
                    >
                      {name}
                    </Checkbox>
                  )
              )}
            </div>
          </Col>
        </Row>
      </Col>
      <Col className="overflow-scroll-y">
        <div className="w-full flex flex-row flex-wrap">
          {filteredProj.map((p: any, i: number) => (
            <Card project={p} key={i} />
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { years, categories, keywords } = await getData(
    gql`
      query MyQuery {
        years {
          name
        }
        categories (locales: ${getLocales(ctx)}) {
          name
          color {
            css
          }
        }
        keywords (locales: ${getLocales(ctx)}) {
          name
        }
      }
    `
  );

  return {
    props: {
      years,
      categories,
      keywords,
    },
  };
};

interface IFilter {
  name?: string;
  categories?: string[];
  years?: string[];
  keywords?: string[];
}
