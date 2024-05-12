import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "@/domain/KoreaClinicalInfo/pages/MainPage";
import FavoritesPage from "@/domain/KoreaClinicalInfo/pages/FavoritesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
