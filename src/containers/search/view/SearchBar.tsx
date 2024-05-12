import { styled } from "styled-components";
import searchIcon from "@/assets/icons/search.svg";
import placeHolderSearchIcon from "@/assets/icons/search_placeholder.svg";
import { useState } from "react";
import useSearchSuggestions from "../../../apiAgents/hooks/useSearchSuggestions";

export const SearchBar = ({
  onSearchSubmit,
  onSearchChange,
  searchQuery,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { suggestions, loading } = useSearchSuggestions(searchQuery);
  const [focused, setFocused] = useState(false);
  const maxItems = 5; // Maximum number of suggestions to display

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearchChange = (e: any) => {
    onSearchChange(e.target.value);
    setDropdownVisible(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearchSubmit(searchQuery);
  };

  const handleSelectSuggestion = (
    suggestion: string,
    event: React.MouseEvent
  ) => {
    event?.stopPropagation();
    onSearchChange(suggestion);
    onSearchSubmit(suggestion);
    setDropdownVisible(false);
  };

  const handleFocus = () => {
    setFocused(true);
    setDropdownVisible(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setFocused(false);
      setDropdownVisible(false);
    }, 300);
  };

  return (
    <Container as='form' onSubmit={handleSubmit} focused={focused}>
      <InputBlock
        type='text'
        placeholder={`질환명을 입력해주세요`}
        // value에 자동완성된 검색어를 넣어줍니다.
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <SearchButton type='submit'>
        <img src={searchIcon} alt='search' />
      </SearchButton>
      {dropdownVisible && suggestions.length > 0 && (
        <Dropdown onFocus={handleFocus} onBlur={handleBlur}>
          {loading && <DropdownItem>Loading...</DropdownItem>}
          <DropdownRecommendText>추천 검색어</DropdownRecommendText>
          {suggestions
            .slice(0, maxItems)
            .map((suggestion: { id: number; name: string }, index: number) => (
              <DropdownItem
                key={index}
                onClick={(e) => handleSelectSuggestion(suggestion.name, e)}>
                {suggestion.name}
              </DropdownItem>
            ))}
        </Dropdown>
      )}
    </Container>
  );
};

export default SearchBar;

interface ContainerProps {
  focused?: boolean;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 100%;
  border-radius: 50px;
  border: ${(props) => (props.focused ? "1px solid #007be9" : "none")};
`;

const InputBlock = styled.input`
  background-color: white;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  border: none;
  border-radius: 50px 0 0 50px;
  outline: none;
  align-items: center;
  height: 100%;
  background-image: url(${placeHolderSearchIcon});
  background-repeat: no-repeat;
  background-position: 20px calc(50% - 1px);
  background-size: 20px 20px; /* 아이콘 크기 조정 */
  padding-left: 48px; /* 아이콘과 텍스트 간 간격 조정 */
  z-index: 1010;

  /* PC */
  font-size: 1rem;

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.9rem;
  }

  /* 모바일 */
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007be9;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 10px;
  background-size: cover;
  margin-right: 10px;
  z-index: 1015;

  /* PC */
  width: 48px;
  height: 48px;

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 40px;
    height: 40px;
  }

  /* 모바일 */
  @media (max-width: 767px) {
    width: 36px;
    height: 36px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column; // Stacked vertically
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 50%; // Below the input field
  left: 0;
  right: 0;
  padding-top: 40px;
  padding-bottom: 25px;
  background: white;
  border-radius: 0 0 50px 50px;
  z-index: 1000; // Ensure it's above other content
`;

const DropdownRecommendText = styled.div`
  width: 90%;
  font-size: 0.8rem;
  color: #6a737b;
  margin-bottom: 10px;
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  width: 95%;
  cursor: pointer;
  font-size: 1rem;
  background-image: url(${placeHolderSearchIcon});
  background-repeat: no-repeat;
  background-position: 10px calc(50% - 1px);
  background-size: 15px 15px; /* 아이콘 크기 조정 */
  padding-left: 34px; /* 아이콘과 텍스트 간 간격 조정 */

  &:hover {
    background-color: #efefef;
    border-radius: 5px;
  }
`;
