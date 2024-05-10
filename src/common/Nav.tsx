import React from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Image/Logo";
import { NAV_LISTS } from "../constants/nav";

const Nav = () => {
  const router = useNavigate();

  const gotoPage = (path: string) => {
    router(path);
  };

  return (
    <Wrapper>
      <InnerBar>
        <Logo onClick={() => gotoPage("./")} width="13.8" height="2.5" />
        <Lists>
          {NAV_LISTS.map((list) => {
            return (
              <List key={list.path}>
                <Link to={list.path}>{list.name}</Link>
              </List>
            );
          })}
        </Lists>
      </InnerBar>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  width: 100dvw;
  height: 5.6rem;

  flex-shrink: 0;
  position: sticky;
  inset: 0px 0px 0px auto;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  background-color: #ffffff;
  z-index: 100;
`;

const InnerBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  height: 100%;
  padding: 0 20px;
`;

const Lists = styled.ul`
  display: flex;
`;

const List = styled.li`
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    opacity: 0.8;
  }

  & > a {
    text-decoration: none;
    color: #000000;
  }
`;
