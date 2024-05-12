import { SearchItem } from ".";
import { SearchKeywordType } from "../../types";
interface IRecentSearch {
  onItemClick: (keyword: number) => void;
  recentKeyWords: SearchKeywordType[];
}

const RecentSearch = ({ recentKeyWords, onItemClick }: IRecentSearch) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <div className="w-full flex items-center justify-between py-3 p-2 bg-white">
        <span style={{ fontSize: "13px", color: "#6A737B" }}>최근검색어</span>
      </div>

      {recentKeyWords && recentKeyWords.length > 0 ? (
        <>
          {recentKeyWords.map((keyword, index) => (
            <SearchItem
              key={index}
              regularText={keyword.name}
              onClick={() => onItemClick(keyword.id)}
            />
          ))}
        </>
      ) : (
        <>
          <div className="w-full flex items-center justify-between py-3 p-2 bg-white">
            <span className="font-base" style={{ color: "#6A737B" }}>
              최근 검색어가 없습니다.
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default RecentSearch;
