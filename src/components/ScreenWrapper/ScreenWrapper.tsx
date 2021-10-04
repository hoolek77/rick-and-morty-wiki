import React, { ComponentPropsWithoutRef, ReactNode } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 120px);
`;

interface Props extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode | ReactNode[];
}

export const ScreenWrapper = ({ children, ...props }: Props) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};
