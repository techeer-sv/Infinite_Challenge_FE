import SearchIcon from "../../common/Image/SearchIcon";
import React, { SetStateAction } from "react";
import { styled } from "styled-components";

interface DropBoxProps {
  type: "추천검색어" | "최근검색어";
  value?: string;
  searchLists: { name: string; id: number }[];
  selectedIndex: number;
  setValue: React.Dispatch<SetStateAction<string>>;
}
const DropBox = ({
  type,
  value,
  searchLists,
  selectedIndex,
  setValue,
}: DropBoxProps) => {
  console.log(searchLists);
  return (
    <Wrapper>
      {value && (
        <CurrentTiping>
          <SearchIcon width="16" height="16" fill="#BBBBBB" />
          <SearchContent>{value}</SearchContent>
        </CurrentTiping>
      )}

      <DropTitle>{type}</DropTitle>
      <DropLists>
        {searchLists?.map((item, index) => {
          return (
            <DropList
              onClick={() => {
                setValue(() => item.name);
              }}
              key={item.id}
              $isSelected={selectedIndex === index}
            >
              <SearchIcon width="16" height="16" fill="#BBBBBB" />
              <SearchContent key={item.id}>{item.name}</SearchContent>
            </DropList>
          );
        })}
        {searchLists?.length === 0 && (
          <DropList>
            <SearchNotContent>{type}가 없습니다</SearchNotContent>
          </DropList>
        )}
      </DropLists>
    </Wrapper>
  );
};

export default DropBox;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  margin-top: 7px;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
  padding: 16px 24px;
  gap: 0px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;

const DropTitle = styled.div`
  color: rgba(106, 115, 123, 1);

  font-size: 13px;
  line-height: 16px;
`;
const DropLists = styled.div``;

const DropList = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 0;
  gap: 10px;
  border-radius: 5px 0px 0px 0px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#f0f0f0" : "transparent"};

  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchContent = styled.span`
  display: flex;
  align-items: center;
  font-size: 14.4px;
  margin-top: 4px;
  text-align: center;
`;

const SearchNotContent = styled.span`
  font-size: 16px;
  color: rgba(167, 175, 183, 1);
`;

const CurrentTiping = styled(DropList)``;
