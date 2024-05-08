import React from "react";
import SearchBar from "../components/main/SearchBar";
import styled from "styled-components";
import { BANNER_TITLE } from "../constants/search";
import useInput from "../hooks/useInput";
import { useGetSearchResults } from "../remote/query/main";

const Main = () => {
  const { value, setValue, onChange } = useInput();

  const { data: searchResults, refetch } = useGetSearchResults(value);
  console.log(searchResults);
  console.log(value);
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
