import {
  NO_RESULT_MESSAGE,
  NO_RESULT_MESSAGE_DESCRIPTION,
} from "../../constants/search";
import NoSearchIcon from "../../common/Image/NoSearchIcon";
import { styled } from "styled-components";

const NoResult = () => {
  return (
    <Wrapper>
      <NoSearchIcon width="72" height="72" />
      <NoResultTitle>{NO_RESULT_MESSAGE}</NoResultTitle>
      <NoResultDescription>{NO_RESULT_MESSAGE_DESCRIPTION}</NoResultDescription>
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
