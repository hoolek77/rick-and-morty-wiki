import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/smallLogo.png';
import { HamburgerMenuIcon } from 'components/HamburgerMenuIcon';
import { MenuItem } from 'components/MenuItem';
import { MAIN_BREAKPOINT } from 'constants/breakpoints';
import { ROUTES } from 'constants/routes';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 0 10%;

  @media (max-width: ${MAIN_BREAKPOINT}) {
    padding: 0 5%;
  }
`;

const Logo = styled.img`
  width: 46px;
  height: 49px;
`;

const MenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${MAIN_BREAKPOINT}) {
    display: none;
  }
`;

const HamburgerMenuWrapper = styled.div<{ isMenu: boolean }>`
  display: none;

  @media (max-width: ${MAIN_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: ${({ isMenu }) => (isMenu ? 'translateX(0)' : 'translateX(100%)')};
    width: 100%;
    margin-top: 60px;
    height: calc(100vh - 60px);
    background-color: ${({ theme }) => theme.secondary};
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    transition: all 0.5s ease-in-out;
  }
`;

export const Menu = () => {
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);

  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logo} alt="rick-and-morty-logo" />
      </Link>
      <MenuItemsWrapper>
        {ROUTES.map((route) => (
          <MenuItem name={route} key={route} />
        ))}
      </MenuItemsWrapper>
      <HamburgerMenuIcon isMenu={isHamburgerMenu} setIsMenu={setIsHamburgerMenu} />

      <HamburgerMenuWrapper isMenu={isHamburgerMenu}>
        {ROUTES.map((route) => (
          <MenuItem name={route} key={route} setIsMenu={setIsHamburgerMenu} />
        ))}
      </HamburgerMenuWrapper>
    </Wrapper>
  );
};
