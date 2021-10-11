import React, { ComponentPropsWithoutRef } from 'react';

import styled from 'styled-components';

type Props = ComponentPropsWithoutRef<'div'>;

const Wrapper = styled.div`
  margin: auto;
  font-size: 24px;
  font-weight: 700;
  color: red;
`;

export const ErrorMessage = ({ children, ...props }: Props) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};
