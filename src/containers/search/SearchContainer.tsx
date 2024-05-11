import { styled } from "styled-components";
import SearchBar from "./ui/SearchBar";
import { useState } from "react";

const SearchContainer = () => {
  const [isFocused, setFocused] = useState(false);

  return (
    <Container>
      <DescriptionBlock>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </DescriptionBlock>
      <SearchBlock
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        focused={isFocused} // 올바른 props 할당 방식
      >
        <SearchBar />
      </SearchBlock>
    </Container>
  );
};

export default SearchContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: #cae9ff;
  width: 100vw;

  /* PC */
  height: 40vh;
  gap: 20px;

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 32vh;
    gap: 16px;
  }

  /* 모바일 */
  @media (max-width: 767px) {
    height: 28vh;
    gap: 12px;
  }
`;

const DescriptionBlock = styled.p`
  font-weight: bold;
  color: #000000;
  margin-top: 20px;
  text-align: center;
  max-width: 600px;
  letter-spacing: -0.4px;

  /* PC */
  font-size: 2rem;
  line-height: 52px;

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.8rem;
    line-height: 44px;
  }

  /* 모바일 */
  @media (max-width: 767px) {
    font-size: 1.6rem;
    line-height: 36px;
  }
`;

interface SearchBlockProps {
  focused: boolean;
}

const SearchBlock = styled.div<SearchBlockProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: ${({ focused }) => (focused ? "2px solid #007be9" : "none")};
  /* 좌우만 둥글게 */
  border-radius: 50px;
  /* TODO: 선택 시 좌우로 늘어나는 애니메이션 적용 고려하기 */
  max-width: 500px;

  /* PC */
  width: 100%;
  height: 70px;

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 90%;
    height: 60px;
  }

  /* 모바일 */
  @media (max-width: 767px) {
    width: 80%;
    height: 50px;
  }
`;
