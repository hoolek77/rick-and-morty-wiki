import React, { FC } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 16px;
  justify-items: center;
  margin-bottom: 48px;
`;

export const ListWrapper: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
