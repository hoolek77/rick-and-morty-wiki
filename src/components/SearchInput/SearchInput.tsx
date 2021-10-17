import React, { ChangeEventHandler, ComponentPropsWithoutRef } from 'react';

import searchIcon from 'assets/searchIcon.png';
import styled from 'styled-components';

interface Props extends ComponentPropsWithoutRef<'div'> {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Wrapper = styled.div`
  position: relative;
  width: 240px;
  height: 56px;
  margin: 8px;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.input};
  border-radius: 8px;
  font-size: 16px;
  padding-left: 48px;
  color: ${({ theme }) => theme.input};

  &:hover {
    border-color: #cbd5e0;
  }
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 16px;
  top: 16px;
`;

export const SearchInput = ({ placeholder, onChange, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <Input type="text" placeholder={placeholder} onChange={onChange} />
      <SearchIcon src={searchIcon} alt="search icon" />
    </Wrapper>
  );
};
