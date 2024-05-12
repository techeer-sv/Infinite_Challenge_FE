import { styled } from "styled-components";
import { LocationDataType, SearchDataType } from "../../../types";
import { useAtom } from "jotai";
import { favoriteResultsAtom } from "../../../store/favorites";

const ResultCard = ({ data }: { data: SearchDataType }) => {
  const [favorites, setFavorites] = useAtom(favoriteResultsAtom);
  const isFavorite = favorites.has(data.ct_id);
  const toggleFavorite = () => {
    const newFavorites = new Map(favorites);
    if (newFavorites.has(data.ct_id)) {
      newFavorites.delete(data.ct_id);
    } else {
      newFavorites.set(data.ct_id, data);
    }
    setFavorites(newFavorites);
  };

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
    <Container>
      <ClickArea onClick={redirectToUrl} />
      <TitleArea>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <SponsorText>{data.lead_sponsor_name}</SponsorText>
          <FavoriteIcon
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite();
            }}
            isFavorite={isFavorite}
          />
        </div>
        <MainTitle>{data.title}</MainTitle>
      </TitleArea>
      <AdditionalInfo>
        <LocationInfo>실시기관지역 | {locationDisplay}</LocationInfo>
        <CompletionDate>
          모집일 | {data.start_date} ~ {data.completion_date}
        </CompletionDate>
        <AvailableAge>
          나이제한 | {data.minimum_age_display} ~{" "}
          {data.maximum_age_display || "제한없음"}
        </AvailableAge>
        <TagArea>
          <ResultTag>{data.phases}</ResultTag>
          <ResultTag>{data.gender}</ResultTag>
        </TagArea>
      </AdditionalInfo>
      <Summary>
        {(data.brief_summary &&
          (data.brief_summary.length > 300
            ? data.brief_summary.slice(0, 300) + "..."
            : data.brief_summary)) ||
          "No summary available"}
      </Summary>
    </Container>
  );
};

export default ResultCard;

interface FavoriteIconProps {
  isFavorite: boolean;
}

const FavoriteIcon = styled.div<FavoriteIconProps>`
  cursor: pointer;
  width: 14px;
  height: 22px;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  background-color: ${(props) => (props.isFavorite ? "#007BE9" : "#ccc")};
  transition: background-color 0.2s;
  &:hover {
    background-color: #ffd700;
  }
`;

const ClickArea = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
`;

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
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
  padding: 20px; // Container와 동일한 padding
  position: absolute;
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

  /* PC */
  top: 48px;

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    top: 40px;
  }

  /* 모바일 */
  @media (max-width: 767px) {
    top: 30px;
  }
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
