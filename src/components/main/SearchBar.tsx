import SearchIcon from "../../common/Image/SearchIcon";
import React, { useState } from "react";
import { styled } from "styled-components";

const SearchBar = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <Wrapper isFocused={isFocused} onClick={() => handleInputFocus()}>
      <SearchIcon width="16" height="16" fill="#BBBBBB" />
      <Input
        ref={inputRef}
        type="text"
        placeholder="질환명을 입력해주세요."
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <SearchButton>
        <SearchIcon width="21" height="21" fill="#FFFFFF" />
      </SearchButton>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  max-width: 486px;
  width: 100%;
  height: 70px;
  border: 1px solid #e5e5e5;
  border-radius: 42px;
  padding-left: 24px;
  border: ${({ isFocused }) =>
    isFocused ? "2px solid #007be9" : "2px solid transparent"};
`;

const Input = styled.input`
  flex: 1;
  margin-left: 10px;
  border: none;
  font-size: 16px;

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
