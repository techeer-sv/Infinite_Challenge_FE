import styled from "styled-components";
import Logo from "@/assets/images/한국임상정보_logo.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // 위치에 따라 렌더링할 내용을 결정합니다.
  const renderContent = () => {
    if (location.pathname === "/") {
      return <Link to={"/favorites"}>즐겨찾기</Link>;
    } else if (location.pathname === "/favorites") {
      return <Link to={"/"}>메인으로</Link>;
    }
    return null; // 다른 경로에 대한 처리를 추가할 수 있습니다.
  };

  return (
    <Container>
      {/* 좌측: 한국임상정보 이미지 */}
      <ImageBlock>
        <LogoImage src={Logo} alt='logo' />
      </ImageBlock>
      {/* 우측: 즐겨찾기 혹은 검색으로 이동하기 */}
      {renderContent()}
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background-color: #ffffff;
  color: #000000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  max-width: 1024px;

  /* PC용 */
  height: 60px;
  font-size: 1.2rem;
  padding: 0 45px;

  /* 태블릿 기기용 (화면 너비가 768px 이상 1024px 미만) */
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 50px; /* 태블릿 높이 설정 */
    font-size: 1.1rem; /* 태블릿 폰트 크기 설정 */
    padding: 0 30px;
  }

  /* 모바일 기기용 (화면 너비가 768px 미만) */
  @media (max-width: 767px) {
    height: 40px; /* 모바일 높이 설정 */
    font-size: 1rem; /* 모바일 폰트 크기 설정 */
    padding: 0 15px;
  }
`;

const imageDimension = {
  width: "138px",
  height: "25px",
};

const ImageBlock = styled.div`
  /* PC용 */
  width: ${imageDimension.width};
  height: ${imageDimension.height};

  /* 태블릿 기기용 (화면 너비가 768px 이상 1024px 미만) */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: ${parseInt(imageDimension.width) * 0.9}px;
    height: ${parseInt(imageDimension.height) * 0.9}px;
  }

  /* 모바일 기기용 (화면 너비가 768px 미만) */
  @media (max-width: 767px) {
    width: ${parseInt(imageDimension.width) * 0.8}px;
    height: ${parseInt(imageDimension.height) * 0.8}px;
  }
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;
