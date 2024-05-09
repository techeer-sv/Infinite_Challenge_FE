import useInput from "./useInput";
import { useGetSearchResults } from "../remote/query/main";
import { ResultListType } from "../types/searchResult";

const useSearchResult = () => {
  const { value, setValue, onChange } = useInput();

  const { data: searchResults, refetch } = useGetSearchResults(value);

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

  return { value, setValue, onChange, searchResults, refetch, toggleFavorites };
};

export default useSearchResult;
