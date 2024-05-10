const PAGES = ["search", "bookmark"] as const;
export type PageType = (typeof PAGES)[number];
