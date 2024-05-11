// SearchAreaBlock.js
import { useState } from "react";
import { styled } from "styled-components";
import SearchBar from "./SearchBar";

const SearchAreaBlock = () => {
  const [isFocused, setFocused] = useState(false);

  return (
    <Container>
      <Description>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </Description>
      <SearchBlock
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        focused={isFocused}>
        <SearchBar />
      </SearchBlock>
    </Container>
  );
};

export default SearchAreaBlock;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* PC */
  width: 480px;
  height: 40vh;
  min-height: 280px;
  gap: 20px;

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 32vh;
    min-height: 240px;
    gap: 16px;
  }

  /* 모바일 */
  @media (max-width: 767px) {
    height: 28vh;
    min-height: 200px;
    gap: 12px;
  }
`;

const Description = styled.p`
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
    font-size: 1.4rem;
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
