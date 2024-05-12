export { default as SearchItem } from "./SearchItem";
export { default as RecommendSearch } from "./RecommendSearch";
export { default as RecentSearch } from "./RecentSearch";

import { RecommendSearch, RecentSearch } from ".";

interface ISearchSuggestion {
  searchKeyword?: string;
}

const dummyRecentSearch = [
  {
    id: 1,
    name: "최근검색어1",
  },
  {
    id: 2,
    name: "최근검색어2",
  },
  {
    id: 3,
    name: "최근검색어3",
  },
];

const dummyRecommendSearch = [
  {
    id: 1,
    name: "추천검색어1",
  },
  {
    id: 2,
    name: "추천검색어2",
  },
  {
    id: 3,
    name: "추천검색어3",
  },
];

const SearchSuggestion = ({ searchKeyword }: ISearchSuggestion) => {
  return (
    <div className="rounded-lg p-4 " style={{ width: "438px" }}>
      {searchKeyword ? (
        <RecommendSearch
          searchKeywords={searchKeyword}
          recommendKeyWords={dummyRecommendSearch}
          onItemClick={() => {}}
        />
      ) : (
        <RecentSearch
          recentKeyWords={dummyRecentSearch}
          onItemClick={() => {}}
        />
      )}
    </div>
  );
};

export default SearchSuggestion;
