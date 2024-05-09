/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import SearchBar from "../components/main/SearchBar";
import styled, { keyframes } from "styled-components";
import { BANNER_TITLE } from "../constants/search";
import NoResult from "../components/main/NoResult";
import ResultList from "../components/main/ResultList";
import { ResultListType } from "../types/searchResult";
import useSearchResult from "../hooks/useSearchResult";

const Main = () => {
  const { value, setValue, onChange, searchResults, refetch, toggleFavorites } =
    useSearchResult();

  return (
    <Page>
      <SearchBanner>
        <BannerTitle>{BANNER_TITLE}</BannerTitle>
        <SearchBar
          refetch={refetch}
          value={value}
          setValue={setValue}
          onChange={onChange}
        />
      </SearchBanner>
      {!searchResults?.count && <NoResult />}

      <ResultsContainer>
        {searchResults?.results?.map(
          (result: ResultListType, index: number) => (
            <ResultItem key={result.id} index={index}>
              <ResultList
                location="main"
                toggleFavorites={() => toggleFavorites(result)}
                searchResult={result}
              />
            </ResultItem>
          )
        )}
      </ResultsContainer>
    </Page>
  );
};

export default Main;

const Page = styled.div``;

const SearchBanner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 46rem;
  background-color: rgba(202, 233, 255, 1);
`;

const BannerTitle = styled.h3`
  font-size: 3.4rem;
  font-weight: bold;
  line-height: 5.2rem;
  text-align: center;

  white-space: pre-line;
  margin-bottom: 40px;
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ResultsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 10px;
  justify-content: center;

  padding: 20px 10px 20px 10px;
`;

export const ResultItem = styled.div<{ index: number }>`
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  opacity: 0;
  margin-top: 20px;

  &:nth-child(${(props) => props.index + 1}) {
    animation-delay: ${(props) => props.index * 0.5}s;
  }
`;
