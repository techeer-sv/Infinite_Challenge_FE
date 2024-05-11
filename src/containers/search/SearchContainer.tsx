import { styled } from "styled-components";

const SearchContainer = () => {
  return (
    <Container>
      <Description>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </Description>
    </Container>
  );
};

export default SearchContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: #cae9ff;
  width: 100vw;

  /* PC */
  height: 50vh;

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 40vh;
  }

  /* 모바일 */
  @media (max-width: 767px) {
    height: 30vh;
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
    font-size: 1.6rem;
    line-height: 36px;
  }
`;
