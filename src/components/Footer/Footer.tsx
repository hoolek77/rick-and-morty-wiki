import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  font-family: ${({ theme }) => theme.fontSecondary};
  font-weight: 700;
  font-size: 18px;
`;

const Link = styled(ReactLink)`
  text-decoration: none;
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Link to={{ pathname: 'https://github.com/hoolek77' }} target="_blank">
        Made by hoolek77 ⚡️⚡️
      </Link>
    </Wrapper>
  );
};
