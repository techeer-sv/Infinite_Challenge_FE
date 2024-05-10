import Bookmark from "../../common/Image/Bookmark";
import BookmarkBorder from "../../common/Image/BookmarkBorder";
import { ResultListType } from "../../types/searchResult";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

interface ResultProps {
  searchResult: ResultListType;
  toggleFavorites: (searchResult?: ResultListType) => void | (() => void);
  location: "main" | "favorites";
}

const ResultList = ({
  location,
  searchResult,
  toggleFavorites,
}: ResultProps) => {
  const [isFavorites, setIsFavorites] = useState<boolean>(false);

  const gotoLink = (id: number) => {
    window.location.href = `https://clinicaltrialskorea.com/studies/${id}`;
  };

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      const favoritesData = JSON.parse(favorites);

      const isExist = favoritesData?.some(
        (item: ResultListType) => item.id === searchResult.id
      );
      if (isExist) {
        setIsFavorites(true);
      } else {
        setIsFavorites(false);
      }
    }
  }, [searchResult.id]);

  return (
    <Wrapper onClick={() => gotoLink(searchResult.id)}>
      <Head>
        <Title>{searchResult.lead_sponsor_name}</Title>

        {isFavorites ? (
          <Bookmark
            onClick={(e: React.MouseEvent<HTMLOrSVGElement>) => {
              e.stopPropagation();
              if (location === "main") {
                setIsFavorites((prev) => !prev);
                toggleFavorites(searchResult);
              }

              if (location === "favorites") {
                toggleFavorites();
              }
            }}
            width="16"
            height="16"
            cursor={"pointer"}
          />
        ) : (
          <BookmarkBorder
            onClick={(e: React.MouseEvent<HTMLOrSVGElement>) => {
              e.stopPropagation();
              if (location === "main") {
                setIsFavorites((prev) => !prev);
                toggleFavorites(searchResult);
              }

              if (location === "favorites") {
                toggleFavorites();
              }
            }}
            width="16"
            height="16"
            fill="#007BE9"
            cursor={"pointer"}
          />
        )}
      </Head>
      <Contents>{searchResult.title}</Contents>
      <Location>실시기관지역 | {searchResult.locations[0]?.city}</Location>
      <Day as="time">모집 마감일 | {searchResult.completion_date}</Day>
      <Conditions>
        <div>{searchResult.from_type}상</div>
        <div>{searchResult.gender}</div>
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

const Day = styled(Location)`
  display: inline-block;
  margin-top: 10px;
`;

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
