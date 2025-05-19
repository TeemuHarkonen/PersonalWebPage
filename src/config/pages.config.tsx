export type AppPageID = "page-home" | "page-projects" | "page-showcase";

export type AppPage = {
  id: AppPageID;
  link: string;
}

export const PAGE_HOME = 0;
export const PAGE_PROJECTS = 1;
export const PAGE_SHOWCASE = 2;

export const APP_PAGES: AppPage[] = [
  {
    id: "page-home",
    link: "/PersonalWebPage"
  },
  {
    id: "page-projects",
    link: "/PersonalWebPage/projects"
  },
  {
    id: "page-showcase",
    link: "/PersonalWebPage/showcase"
  }
];
