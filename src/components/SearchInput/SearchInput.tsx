import React, { ComponentPropsWithoutRef } from 'react';

import searchIcon from 'assets/searchIcon.png';
import styled from 'styled-components';

interface Props extends ComponentPropsWithoutRef<'input'> {
  wrapperWidth?: string;
}

const Wrapper = styled.div`
  position: relative;
  width: 240px;
  height: 56px;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.inputColor};
  border-radius: 8px;
  font-size: 16px;
  padding-left: 48px;
  color: ${({ theme }) => theme.inputColor};
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 16px;
  top: 16px;
`;

export const SearchInput = ({ wrapperWidth, ...props }: Props) => {
  return (
    <Wrapper style={{ width: wrapperWidth }}>
      <Input type="text" {...props} />
      <SearchIcon src={searchIcon} alt="search icon" />
    </Wrapper>
  );
};
