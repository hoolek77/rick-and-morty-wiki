import React, { FC } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

export const InputsWrapper: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
