import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchContainer from "./containers/search/SearchContainer";
import FavoritesContainer from "./containers/favorites/FavoritesContaner";
import Header from "./components/Header";

function App() {
  return (
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
  );
}

export default App;
