import { styled } from "styled-components";
import { LocationDataType, SearchDataType } from "../../../types";

const ResultCard = ({ data }: { data: SearchDataType }) => {
  if (!data) {
    return <div>No data available.</div>;
  }

  // Ensure data.locations is an array before using map
  const locationDisplay = data.locations
    ? data.locations
        .map((location: LocationDataType) => location.city)
        .join(", ")
    : "No specific location";

  const redirectToUrl = () => {
    window.open(data.url, "_blank");
  };

  return (
    <Container onClick={redirectToUrl}>
      <TitleArea>
        {/* 가장 상단 스폰서, 약간 흐린 글씨 */}
        <SponsorText>{data.lead_sponsor_name}</SponsorText>
        {/* 메인 정보로 보이는 제목 */}
        <MainTitle>{data.title}</MainTitle>
      </TitleArea>
      <AdditionalInfo>
        {/* 지역 정보 */}
        <LocationInfo>
          실시기관지역 | {locationDisplay ? locationDisplay : "알 수 없음"}
        </LocationInfo>
        {/* 모집일|2023년5월~~~ 2024년 ~~~ */}
        <CompletionDate>
          모집일 | {data.start_date} ~ {data.completion_date}
        </CompletionDate>
        {/* 나이 제한 */}
        <AvailableAge>
          나이제한 | {data.minimum_age_display} ~{" "}
          {data.maximum_age_display || "제한없음"}
        </AvailableAge>

        {/* 나머지 정보, 태그 형식으로 관리 */}
        <TagArea>
          <ResultTag>{data.phases}</ResultTag>
          <ResultTag>{data.gender}</ResultTag>
        </TagArea>
      </AdditionalInfo>

      {/* 상세 정보 */}
      {/* 이렇게 하면 좋은 방법은 아니지만 구현 우선으로 처리 */}
      <Summary>
        {(data.brief_summary &&
          (data.brief_summary.length > 400
            ? `${data.brief_summary.substring(0, 400)}...`
            : data.brief_summary)) ||
          "No summary available"}
      </Summary>
      {/* 동일한 내용이지만 숨겨두기만 하면 어떨까? */}
    </Container>
  );
};

export default ResultCard;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SponsorText = styled.p`
  color: #506a89;

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

const MainTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LocationInfo = styled.p`
  letter-spacing: -0.4px;
  color: #90959a;
  font-size: 0.8rem;
`;

const CompletionDate = styled.p`
  letter-spacing: -0.4px;
  font-size: 0.8rem;
  color: #90959a;
`;

const AvailableAge = styled.p`
  letter-spacing: -0.4px;
  font-size: 0.8rem;
  color: #90959a;
`;

const TagArea = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;

const ResultTag = styled.div`
  letter-spacing: -0.4px;
  /* 좌우만 둥글게 */
  width: fit-content;
  border-radius: 10px;
  background-color: #eef0f2;
  color: #4c4e52;
  font-size: 1rem;
  padding: 5px 10px;
`;

const Summary = styled.div`
  background-color: white;
  color: black;
  padding: 20px; // Container와 동일한 padding
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 20;
  border-radius: 10px; // Container와 동일한 border-radius
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  border: 1px solid black;
  border-radius: 10px;
  border: 1px solid #d7dce0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover ${Summary} {
    opacity: 1;
    visibility: visible;
  }

  /* PC */
  margin: 10px;
  padding: 20px;

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 8px;
    padding: 16px;
  }

  /* 모바일 */
  @media (max-width: 767px) {
    margin: 6px;
    padding: 12px;
  }
`;
