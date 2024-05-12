import useSearchBar from "../../hooks/useSearchBar";
import SearchIcon from "../../common/Image/SearchIcon";
import { styled } from "styled-components";
import DropBox from "./DropBox";
import { SetStateAction } from "react";

type SearchBarProps = {
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  refetch: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ value, setValue, onChange, refetch }: SearchBarProps) => {
  const {
    isActive,
    handleBlur,
    handleInputFocus,
    inputRef,
    onKeyDownInputText,
    selectedIndex,
    searchLists,
    handleMouseDown,
    handleMouseUp,
    handleClickResult,
    recentData,
  } = useSearchBar({ value, setValue, onChange, refetch });

  return (
    <Wrapper
      $isActive={isActive}
      onClick={() => handleInputFocus()}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <SearchIcon width="16" height="16" fill="#BBBBBB" />
      <Input
        ref={inputRef}
        type="text"
        placeholder="질환명을 입력해주세요."
        onBlur={handleBlur}
        onChange={onChange}
        onKeyDown={onKeyDownInputText}
        value={value}
        autoComplete="off"
        spellCheck="false"
      />
      <SearchButton onClick={() => handleClickResult()}>
        <SearchIcon width="21" height="21" fill="#FFFFFF" />
      </SearchButton>
      {value.length === 0 && isActive && (
        <DropBox
          setValue={setValue}
          selectedIndex={selectedIndex}
          searchLists={recentData}
          type="최근검색어"
        />
      )}
      {value.length > 0 && isActive && (
        <DropBox
          setValue={setValue}
          selectedIndex={selectedIndex}
          searchLists={searchLists}
          type="추천검색어"
          value={value}
        />
      )}
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div<{ $isActive: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 486px;
  width: 90%;
  height: 70px;
  border-radius: 42px;
  padding-left: 24px;
  background-color: rgba(255, 255, 255, 1);
  border: ${({ $isActive }) =>
    $isActive ? "2px solid #007be9" : "2px solid transparent"};
`;

const Input = styled.input`
  flex: 1;
  margin-left: 10px;
  border: none;
  font-size: 16px;
  background-color: transparent;
  input::placeholder {
    color: #bbbbbb;
  }

  &:focus {
    outline: 0;
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin: 0 8px;
  background-color: #007be9;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
