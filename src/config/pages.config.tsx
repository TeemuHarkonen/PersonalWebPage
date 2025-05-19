export type AppPageID = "page-home" | "page-projects" | "page-showcase";

export type AppPage = {
  id: AppPageID;
  link: string;
}

export const PAGE_HOME = 0;
export const PAGE_PROJECTS = 1;
export const PAGE_SHOWCASE = 2;

export const WEBSITE_BASE = "/visual-arts";

export const APP_PAGES: AppPage[] = [
  {
    id: "page-home",
    link: WEBSITE_BASE
  },
  {
    id: "page-projects",
    link: WEBSITE_BASE + "/projects"
  },
  {
    id: "page-showcase",
    link: WEBSITE_BASE + "/showcase"
  }
];
