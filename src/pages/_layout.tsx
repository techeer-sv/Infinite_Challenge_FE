import  { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: white;
`

export default function Layout() {
  return (
    <Container>
      <Suspense>
        <Header/>
        <Outlet/>
      </Suspense>
    </Container>
  );
}
