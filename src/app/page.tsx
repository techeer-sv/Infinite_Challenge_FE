import NavBar from "./_component/NavBar";
import SearchBar from "./_component/SearchBar";
import NoSearchResult from "./_component/NoSearchResult";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="w-full h-[46vh] bg-skyColor flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center text-3xl font-bold">
          <div>국내 모든 임상시험 검색하고</div>
          <div>온라인으로 참여하기</div>
        </div>
        <SearchBar />
      </div>
      <NoSearchResult />
    </div>
  );
}
