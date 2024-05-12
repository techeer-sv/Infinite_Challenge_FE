import SearchIcon from "@/components/icons/SearchIcon";
import { SearchItem } from ".";

interface IRecommendSearch {
  searchKeywords: string;
  onItemClick: (keyword: string) => void;
  recommendKeyWords: string[];
}
/**
 * 특정 검색 키워드를 기준으로 추천 키워드를 분리하는 함수
 * @param searchKeyword
 * @param recommendKeyword
 * @returns regularText: string
 */
const splitKeyword = (searchKeyword: string, recommendKeyword: string) => {
  const index = recommendKeyword
    .toLowerCase()
    .indexOf(searchKeyword.toLowerCase());
  if (index === -1) {
    return recommendKeyword;
  }
  const regularText = recommendKeyword.substring(index + searchKeyword.length);

  return regularText;
};

const RecommendSearch = ({
  searchKeywords,
  recommendKeyWords,
  onItemClick,
}: IRecommendSearch) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <div className="w-full flex items-center justify-between py-3 p-2 bg-white">
        <div className="flex items-center space-x-3">
          <SearchIcon size={16} color="silver" />
          <div className="ml-5">
            <span>{searchKeywords}</span>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between py-3 p-2 bg-white">
        <span style={{ fontSize: "13px", color: "#6A737B" }}>추천검색어</span>
      </div>

      {recommendKeyWords && recommendKeyWords.length > 0 ? (
        <>
          {recommendKeyWords.map((keyword, index) => {
            const regularText = splitKeyword(searchKeywords, keyword);
            return (
              <SearchItem
                key={index}
                boldText={searchKeywords}
                regularText={regularText}
                onClick={() => onItemClick(keyword)}
              />
            );
          })}
        </>
      ) : (
        <>
          <div className="w-full flex items-center justify-between py-3 p-2 bg-white">
            <span className="font-base" style={{ color: "#6A737B" }}>
              추천 검색어가 없습니다
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default RecommendSearch;
