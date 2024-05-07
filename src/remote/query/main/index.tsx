import { useQuery } from "@tanstack/react-query";
import { getSearchResults } from "../../apis/main";
import { QueryKeys } from "../../../queryClient";

export const useGetSearchData = (name: string) => {
  return useQuery({
    queryKey: [QueryKeys.SEARCH, name],
    queryFn: () => getSearchResults(name),
    enabled: name !== "",
  });
};
