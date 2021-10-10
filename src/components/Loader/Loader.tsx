import React, { ComponentPropsWithoutRef } from 'react';

import { spinnerAnimation } from 'animations/loader';
import loaderImg from 'assets/loader.png';
import styled from 'styled-components';

type Props = ComponentPropsWithoutRef<'div'>;

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: auto 0;
  ${spinnerAnimation}
`;

const LoaderImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Loader = ({ ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <LoaderImage src={loaderImg} />
    </Wrapper>
  );
};
