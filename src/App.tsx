import { useRoutes } from "react-router-dom";
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import Nav from "./common/Nav";

function App() {
  const elem = useRoutes([
    { path: "/", element: <Main /> },
    {
      path: "/favorites",
      element: <Favorites />,
    },
  ]);

  return (
    <>
      <div className="App">
        <Nav />
        <div>{elem}</div>
      </div>
    </>
  );
}

export default App;
