import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchContainer from "./containers/search/SearchContainer";
import FavoritesContainer from "./containers/favorites/FavoritesContaner";

function App() {
  return (
    <Router>
      <nav>{/* TODO 공통 헤더 만들어넣기 */}</nav>
      <Routes>
        {/* TODO */}
        <Route path='/' element={<SearchContainer />} />
        {/* TODO */}
        <Route path='/favorites' element={<FavoritesContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
