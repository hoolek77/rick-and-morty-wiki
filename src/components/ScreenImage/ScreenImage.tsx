import React, { ComponentPropsWithoutRef } from 'react';

import { MAIN_BREAKPOINT } from 'constants/breakpoints';
import styled from 'styled-components';

interface Props extends ComponentPropsWithoutRef<'img'> {
  src: string;
  alt: string;
}

const Image = styled.img`
  height: 200px;
  margin: 30px 0;
  max-width: 95%;

  @media (max-width: ${MAIN_BREAKPOINT}) {
    height: 105px;
  }
`;

export const ScreenImage = ({ src, alt, ...props }: Props) => {
  return <Image src={src} alt={alt} {...props} />;
};
