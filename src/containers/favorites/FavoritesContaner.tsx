import { styled } from "styled-components";
import { useAtom } from "jotai";
import { favoriteResultsAtom } from "../../store/favorites";
import ResultCard from "../search/view/ResultCard";

const FavoritesContainer = () => {
  const [favorites] = useAtom(favoriteResultsAtom);

  return (
    <Container>
      <ResultArea>
        {Array.from(favorites.values()).map((data) => (
          <ResultCard key={data.ct_id} data={data} />
        ))}
      </ResultArea>
    </Container>
  );
};

export default FavoritesContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ResultArea = styled.div`
  width: 100%;
  max-width: 960px;
  justify-content: center;
  display: grid;

  /* PC */
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 20px;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }

  /* 모바일 */
  @media (max-width: 767px) {
    padding: 0 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`;
