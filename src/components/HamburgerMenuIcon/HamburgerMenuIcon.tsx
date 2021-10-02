import React, { Dispatch, SetStateAction } from 'react';

import { MENU_BREAKPOINT } from 'constants/menuBreakpoint';
import styled from 'styled-components';

interface Props {
  isMenu: boolean;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}

const Icon = styled.div<{ isMenu: boolean }>`
  width: 2rem;
  height: 2rem;
  display: none;
  @media (max-width: ${MENU_BREAKPOINT}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.hamburgerMenuIcon};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ isMenu }) => (isMenu ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ isMenu }) => (isMenu ? 'translateX(-100%)' : 'translateX(0)')};
      opacity: ${({ isMenu }) => (isMenu ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isMenu }) => (isMenu ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const HamburgerMenuIcon = ({ isMenu, setIsMenu }: Props) => {
  return (
    <Icon isMenu={isMenu} onClick={() => setIsMenu((prev) => !prev)}>
      <div />
      <div />
      <div />
    </Icon>
  );
};
