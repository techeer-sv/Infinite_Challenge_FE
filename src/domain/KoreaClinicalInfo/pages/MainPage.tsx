import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";

const MainPage = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const handleSubmit = () => {
    console.log(searchKeyword);
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center bg-secondary h-96">
        <p className="text-xl">국내 모든 임상시험 검색하고</p>
        <p className="text-xl mb-6">온라인으로 참여하기</p>
        <SearchBar
          placeholder="검색어를 입력하세요"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onSubmit={handleSubmit}
        />
      </div>
      <SearchResult />
    </div>
  );
};

export default MainPage;
