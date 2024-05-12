import { styled } from "styled-components";
import SearchAreaBlock from "./block/SearchAreaBlock";
import ResultCard from "./view/ResultCard";
import useSearchResults from "../../apiAgents/hooks/useSearchResults";

const SearchContainer = () => {
  // 이벤트 기반 데이터 패칭 방식으로 데이터를 가져옵니다.
  const {
    searchData,
    loading,
    error,
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { searchData: any[]; loading: boolean; error: null } =
    useSearchResults("갑상선암");

  return (
    <Container>
      <SearchArea>
        <SearchAreaBlock />
      </SearchArea>
      <ResultArea>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {(error as Error).message}</p>}
        {!loading && !error && searchData.length === 0 && (
          <p>No results found.</p>
        )}
        {!loading &&
          !error &&
          searchData.length > 0 &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          searchData.map((data: any) => (
            <ResultCard key={data.id} data={data} />
          ))}

        {/* TODO: 검색 결과가 있을 때, 없을 때, 첫 접속 때로 나누기 */}
      </ResultArea>
    </Container>
  );
};

export default SearchContainer;

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  font-size: 2rem;
  min-height: calc(100vh - 60px);
  gap: 2vh;
`;

const SearchArea = styled.div`
  width: 100vw;
  background-color: #cae9ff;
  display: flex;
  justify-content: center;
`;

const ResultArea = styled.div`
  width: 100vw;
  max-width: 1024px;
  justify-content: center;
  /* 2*n줄의 그리드 생성 */
  display: grid;

  /* PC */
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 20px;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }

  /* 모바일 */
  @media (max-width: 767px) {
    padding: 0 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`;
