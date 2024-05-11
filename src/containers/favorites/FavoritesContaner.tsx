import { styled } from "styled-components";

const FavoritesContainer = () => {
  return (
    <Container>
      <h1>Favorites</h1>
    </Container>
  );
};

export default FavoritesContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  font-size: 2rem;
`;
