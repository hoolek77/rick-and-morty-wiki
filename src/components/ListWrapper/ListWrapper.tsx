import React, { ComponentPropsWithoutRef } from 'react';

import styled from 'styled-components';

interface Props extends ComponentPropsWithoutRef<'div'> {
  title?: string;
}

const Wrapper = styled.div`
  width: 80%;
`;

const ItemsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 16px;
  justify-items: center;
  margin-bottom: 48px;
`;

const Title = styled.h3`
  margin: 64px 0 24px 0;
  font-size: 20px;
  color: #8e8e93;
  align-self: flex-start;
`;

export const ListWrapper = ({ title, children, ...props }: Props) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <ItemsWrapper {...props}>{children}</ItemsWrapper>
    </Wrapper>
  );
};
