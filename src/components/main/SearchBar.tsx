import useSearchBar from "../../hooks/useSearchBar";
import SearchIcon from "../../common/Image/SearchIcon";
import React from "react";
import { styled } from "styled-components";

const SearchBar = () => {
  const {
    isActive,
    handleFocus,
    handleBlur,
    handleInputFocus,
    inputRef,
    value,
    onChange,
  } = useSearchBar();

  return (
    <Wrapper $isActive={isActive} onClick={() => handleInputFocus()}>
      <SearchIcon width="16" height="16" fill="#BBBBBB" />
      <Input
        ref={inputRef}
        type="text"
        placeholder="질환명을 입력해주세요."
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        value={value}
      />
      <SearchButton>
        <SearchIcon width="21" height="21" fill="#FFFFFF" />
      </SearchButton>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div<{ $isActive: boolean }>`
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
