import { createBrowserRouter } from "react-router-dom";
import Search from "./pages/Search";

export const router = createBrowserRouter([
  { path: "/", element: <Search /> },
  { path: "/bookmarks", element: <div>즐겨찾기</div> },
]);
