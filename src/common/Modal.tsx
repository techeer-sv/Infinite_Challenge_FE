/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { styled } from "styled-components";

interface ModalProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  closeModal: () => void;
  onClick: any;
}

const Modal = ({ onClick, children, closeModal, ...rest }: ModalProps) => {
  return (
    <Wrapper>
      <ModalTitle>{children}</ModalTitle>
      <div>
        <Closebutton onClick={closeModal}>취소</Closebutton>
        <OpenButton onClick={onClick} {...rest}>
          확인
        </OpenButton>
      </div>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 436px;
  height: 162px;

  top: calc(50% - 81px);
  left: calc(50% - 243px);
  padding: 10px 0px 10px 0px;
  gap: 30px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);

  & > div {
    display: flex;
  }
`;

const ModalTitle = styled.h4`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

const Closebutton = styled.button`
  width: 114px;
  height: 41px;
  padding: 10px 9px 10px 9px;
  gap: 48px;
  border-radius: 10px;
  opacity: 0px;
  background: rgba(238, 240, 242, 1);
  color: black;
  border: none;
  cursor: pointer;
  margin-right: 30px;
  margin-left: 30px;
  &:hover {
    opacity: 0.8;
  }
`;

const OpenButton = styled(Closebutton)`
  background: rgba(91, 160, 229, 1);
  color: white;
`;
