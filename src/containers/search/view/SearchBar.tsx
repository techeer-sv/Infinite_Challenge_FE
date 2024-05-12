import { styled } from "styled-components";
import searchIcon from "@/assets/icons/search.svg";
import placeHolderSearchIcon from "@/assets/icons/search_placeholder.svg";

export const SearchBar = ({
  onSearchSubmit,
  onSearchChange,
  searchQuery,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearchChange = (e: any) => {
    onSearchChange(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearchSubmit(searchQuery);
  };

  return (
    <Container as='form' onSubmit={handleSubmit}>
      <InputBlock
        type='text'
        placeholder={`질환명을 입력해주세요`}
        onChange={handleSearchChange}
      />
      <SearchButton type='submit'>
        <img src={searchIcon} alt='search' />
      </SearchButton>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 100%;
  border-radius: 50px;
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
