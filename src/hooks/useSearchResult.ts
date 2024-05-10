import useInput from "./useInput";
import { ResultListType } from "../types/searchResult";
import useInfiniteScroll from "./useInfiniteScroll";
import { useInfiniteQuery } from "@tanstack/react-query";
import { QueryKeys } from "../queryClient";
import { getSearchResults } from "../remote/apis/main";

const LIMIT = 4;
const useSearchResult = () => {
  const { value, setValue, onChange } = useInput();

  const {
    data: searchResults,
    fetchNextPage,
    hasNextPage,
    isFetching,
    refetch,
  } = useInfiniteQuery({
    queryKey: [QueryKeys.SEARCH_RESULTS, value],
    queryFn: ({ pageParam = 0 }) => getSearchResults(pageParam, LIMIT, value),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const nextOffset = lastPageParam + LIMIT;
      return nextOffset < lastPage.count ? nextOffset : undefined;
    },
    enabled: false,
  });

  const observerRef = useInfiniteScroll(fetchNextPage, {
    rootMargin: "200px",
    threshold: 0,
  });

  const toggleFavorites = (searchResult: ResultListType) => {
    const favoritesData = localStorage.getItem("favorites");
    if (favoritesData) {
      const favorites = JSON.parse(favoritesData);
      const isExist = favorites?.some(
        (item: ResultListType) => item.id === searchResult.id
      );
      if (isExist) {
        const newFavorites = favorites?.filter(
          (item: ResultListType) => item.id !== searchResult.id
        );
        localStorage.setItem("favorites", JSON.stringify([...newFavorites]));
      } else {
        localStorage.setItem(
          "favorites",
          JSON.stringify([searchResult, ...favorites])
        );
      }
    } else {
      localStorage.setItem("favorites", JSON.stringify([searchResult]));
    }
  };

  // useEffect(() => {
  //   if (searchResults && !hasNextPage) {
  //     alert("마지막 페이지입니다.");
  //   }
  // }, [hasNextPage]);

  return {
    value,
    setValue,
    onChange,
    searchResults,
    refetch,
    toggleFavorites,
    observerRef,
    hasNextPage,
    isFetching,
  };
};

export default useSearchResult;
