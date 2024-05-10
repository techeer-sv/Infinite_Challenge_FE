const RouteNames = [{ name: "즐겨찾기", path: "./favorites" }] as const;

type RouteName = (typeof RouteNames)[number];

export const NAV_LISTS: RouteName[] = [
  {
    name: "즐겨찾기",
    path: "./favorites",
  },
];
