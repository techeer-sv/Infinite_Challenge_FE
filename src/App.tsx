import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
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
      <Suspense fallback={"로딩중입니다 ..."}>
        <div className="App">
          <Nav />
          <div>{elem}</div>
        </div>
      </Suspense>
    </>
  );
}

export default App;
