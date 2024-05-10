import NoSearchIcon from "../../common/Image/NoSearchIcon";
import { styled } from "styled-components";

interface NoResultProps {
  title: string;
  description: string;
}

const NoResult = ({ title, description }: NoResultProps) => {
  return (
    <Wrapper>
      <NoSearchIcon width="72" height="72" />
      <NoResultTitle>{title}</NoResultTitle>
      <NoResultDescription>{description}</NoResultDescription>
    </Wrapper>
  );
};

export default NoResult;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  width: 90%;
  height: 322px;
  margin: 0 auto;
`;

const NoResultTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: #1e2025;
  margin: 20px 0;
  line-height: 18px;
`;

const NoResultDescription = styled.p`
  font-size: 16px;
  text-align: center;
  color: rgba(106, 115, 123, 1);
  white-space: pre-line;

  line-height: 24px;
`;
