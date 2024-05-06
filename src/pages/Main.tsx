import React from "react";
import SearchBar from "../components/main/SearchBar";
import styled from "styled-components";
import { BANNER_TITLE } from "../constants/search";

const Main = () => {
  return (
    <Page>
      <SearchBanner>
        <BannerTitle>{BANNER_TITLE}</BannerTitle>
        <SearchBar />
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
