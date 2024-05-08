import Bookmark from "../../common/Image/Bookmark";
import { ResultListType } from "../../types/searchResult";
import React from "react";
import { styled } from "styled-components";

interface ResultProps {
  searchResult: ResultListType;
}

const ResultList = (searchResults: ResultProps) => {
  console.log(searchResults);
  return (
    <Wrapper>
      <Head>
        <Title>피피디디벨럽먼트피티이엘티디</Title>
        <Bookmark width="16" height="16" fill="#007BE9" />
      </Head>
      <Contents>
        이전에 전이성 췌관 선암종에 대한 치료를 받지 않은 시험대상자를 대상으로
        SBP-101과 병용하거나 병용하지 않은 냅-파클리탁셀 및 젬시타빈에 대한
        무작위배정, 이중눈가림, 위약 대조 임상시험
      </Contents>
      <Location>실시기관지역 | 경기도</Location>
      <Day>모집 마감일 | 2023년 5월 1일 까지</Day>
      <Conditions>
        <div>2상</div>
        <div>남녀모두</div>
      </Conditions>
    </Wrapper>
  );
};

export default ResultList;

const Wrapper = styled.div`
  width: 431px;
  max-width: 90%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  color: rgba(0, 0, 0, 1);

  padding: 20px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

const Title = styled.h4`
  font-size: 10px;
  color: rgba(80, 106, 137, 1);
`;

const Contents = styled.p`
  font-size: 11.5px;
  font-weight: bold;
  line-height: 18px;
  margin-bottom: 8px;
`;

const Location = styled.p`
  font-size: 8px;
  line-height: 10px;
  text-align: left;
  color: rgba(144, 149, 154, 1);
  margin-bottom: 8px;
`;

const Day = styled(Location)``;

const Conditions = styled.div`
  display: flex;
  & > div {
    min-width: 35px;
    min-height: 22px;
    padding: 7px 10px 7px 10px;
    gap: 10px;
    border-radius: 10px;
    margin-right: 5px;
    opacity: 0px;
    background: rgba(202, 233, 255, 1);
    font-size: 10px;
    line-height: 8px;
  }
`;
