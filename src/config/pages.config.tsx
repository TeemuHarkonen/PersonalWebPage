export type AppPageID = "page-home" | "page-projects" | "page-showcase";

export type AppPage = {
  id: AppPageID;
  link: string;
}

export const APP_PAGES: AppPage[] = [
  {
    id: "page-home",
    link: "/"
  },
  {
    id: "page-projects",
    link: "/projects"
  },
  {
    id: "page-showcase",
    link: "/showcase"
  }
];
