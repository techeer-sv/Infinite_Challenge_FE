import styled from "styled-components";
import { NewDropDown } from "./NewDropDown";
import { HistoryDropDown } from "./HistoryDropDown";
import { useSearch } from "../hooks/useSearch";

const Container = styled.div``;

const SearchBarContainer = styled.div`
  width: 486px;
  height: 69.7px;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  border-radius: 42px;
  margin-top: 40px;
  position: relative;
  border: ${({ isFocused }) => isFocused ? "1px solid #007BE9" : "none"};
`;

const TestInput = styled.input`
  width: 430px;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 42px;
  text-align: center;
  :focus {
    border: none;
    outline: none;
  }
`;


const SearchButton = styled.button`
  width: 48px;
  height: 48px;
  background-color: #007BE9;
  border-radius: 500px;
`

interface ISearchBarProp{
  handleSearch:(input:string)=>void
}

export const SearchBar = ({ handleSearch }: ISearchBarProp) => {
  const {
    input,
    isFocus,
    placeholderValue,
    data,
    focusIndex,
    history,
    handleInput,
    handleKeyPress,
    handleFocus,
    handleBlur,
    handleClickDropDown,
    handleClickButton,
    inputRef,
    searchInput
  } = useSearch(handleSearch);
  return (
    <Container>
      <SearchBarContainer
      tabIndex={0}
      isFocused={isFocus}
      onFocus={handleFocus}
      onBlur={handleBlur}
      >
        <TestInput
          value={input}
          placeholder={placeholderValue}
          onChange={handleInput}
          ref={inputRef}
          onKeyDown={handleKeyPress}
        />
        <SearchButton onClick={() => handleClickButton(input)}>검색 결과</SearchButton>
        {
          searchInput === ''
          ? 
          <HistoryDropDown isFocus={isFocus} datas={history} handleSearch={handleClickDropDown} />
          : 
          <NewDropDown input={input} isFocus={isFocus} focusIndex={focusIndex} datas={data} handleSearch={handleClickDropDown} />
        }
      </SearchBarContainer>
    </Container>
  );
};
