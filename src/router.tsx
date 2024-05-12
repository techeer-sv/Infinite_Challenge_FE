import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from './pages/_layout';
import { MainPage } from './pages/MainPage';

// 라우트 구성
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <MainPage></MainPage>
      },
    ]
  }
];

export const router = createBrowserRouter(routes);
