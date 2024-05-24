import { createBrowserRouter } from "react-router-dom";
import Search from "./pages/Search";
import Bookmark from "./pages/Bookmark";

export const router = createBrowserRouter([
  { path: "/", element: <Search /> },
  { path: "/bookmarks", element: <Bookmark /> },
]);
