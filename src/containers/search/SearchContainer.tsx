import { styled } from "styled-components";
import SearchAreaBlock from "./block/SearchAreaBlock";

const SearchContainer = () => {
  return (
    <Container>
      <SearchArea>
        <SearchAreaBlock />
      </SearchArea>
      <ResultAreaBlock></ResultAreaBlock>
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
`;

const SearchArea = styled.div`
  width: 100vw;
  background-color: #cae9ff;
  display: flex;
  justify-content: center;
`;

const ResultAreaBlock = styled.div``;
