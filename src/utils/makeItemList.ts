import { SearchItemType } from "@/types/searchItemType";

export const makeItemList = (searchItem: SearchItemType) => {
  const mapItem: string[] = [];
  searchItem.phases.map((phase) => {
    mapItem.push(phase);
  });
  mapItem.push(searchItem.gender);

  return mapItem;
};
