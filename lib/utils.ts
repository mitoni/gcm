import { union } from "lodash";
import { GetServerSidePropsContext } from "next";

export const pickRandom = (data: any[]): any => {
  if (!data) return null;
  return data[Math.floor(Math.random() * data.length)];
};

export const getPathFromName = (name: string): string => {
  const path = name.replace(/\s/g, "_");
  return path;
};

export const getNameFromPath = (path: string): string => {
  const name = path.replace(/_/g, " ");
  return name;
};

export const getLocales = ({ locale, locales }: GetServerSidePropsContext) => {
  const join = union([locale], locales);
  const localesString = JSON.stringify(join);
  const query = localesString.replace(/"/g, "");
  return query;
};
