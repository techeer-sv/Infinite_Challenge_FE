import { useQuery } from "@tanstack/react-query";
import { getSearchLists } from "../../apis/main";
import { QueryKeys } from "../../../queryClient";

export const useGetSearchData = (name: string) => {
  return useQuery({
    queryKey: [QueryKeys.SEARCH, name],
    queryFn: () => getSearchLists(name),
    enabled: name !== "",
  });
};

// export const useGetSearchResults = (name: string) => {
//   return useQuery({
//     queryKey: [QueryKeys.SEARCH_RESULTS, name],
//     queryFn: () => getSearchResults(name),
//     enabled: false,
//   });
// };
