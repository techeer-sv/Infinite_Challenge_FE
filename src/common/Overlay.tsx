import React from "react";
import { styled } from "styled-components";

interface OverlayProps {
  children: React.ReactNode;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const Overlay = ({ children }: OverlayProps) => {
  return <Back>{children}</Back>;
};

export default Overlay;

const Back = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 999;
`;
