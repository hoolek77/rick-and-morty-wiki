import React, { Dispatch, SetStateAction } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { MAIN_BREAKPOINT, MAIN_BREAKPOINT_WITHOUT_PX } from 'constants/breakpoints';
import { Routes } from 'constants/routes';
import { useWindowSize } from 'hooks/useWindowSize';
import styled from 'styled-components';
import { capitalizeFirstLetter } from 'utils/strings';

interface Props {
  name: Routes;
  setIsMenu?: Dispatch<SetStateAction<boolean>>;
}

const Link = styled(RouterLink)`
  font-family: ${({ theme }) => theme.fonts.secondary}, sans-serif;
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  margin-right: 24px;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.hoverPrimary};
  }

  @media (max-width: ${MAIN_BREAKPOINT}) {
    font-size: 24px;
    margin: 25px 0;
  }
`;

const getEmoji = (name: Routes) => {
  if (name === 'characters') {
    return '👽';
  }

  if (name === 'locations') {
    return '🗺';
  }

  if (name === 'episodes') {
    return '🎬';
  }

  return '';
};

export const MenuItem = ({ name, setIsMenu = () => {} }: Props) => {
  const { width } = useWindowSize();

  const handleMenuItemClick = () => {
    if (width <= MAIN_BREAKPOINT_WITHOUT_PX) {
      setIsMenu(false);
    }
  };

  return (
    <Link to={name} onClick={handleMenuItemClick}>
      {capitalizeFirstLetter(name)} {getEmoji(name)}
    </Link>
  );
};
