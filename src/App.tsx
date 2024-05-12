import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchContainer from "./containers/search/SearchContainer";
import FavoritesContainer from "./containers/favorites/FavoritesContaner";
import { styled } from "styled-components";
import Header from "./components/layout/Header";

function App() {
  return (
    <Container>
      <Router>
        <nav>
          <Header />
        </nav>
        <Routes>
          {/* TODO */}
          <Route path='/' element={<SearchContainer />} />
          {/* TODO */}
          <Route path='/favorites' element={<FavoritesContainer />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  font-size: 2rem;
  width: 100vw;
  min-height: 100vh;
`;
