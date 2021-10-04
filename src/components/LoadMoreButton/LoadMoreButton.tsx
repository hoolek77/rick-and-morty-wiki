import React, { ComponentPropsWithoutRef } from 'react';

import { buttonAnimation } from 'animations/buttons';
import styled from 'styled-components';

type Props = ComponentPropsWithoutRef<'button'>;

const Button = styled.button`
  width: 154px;
  height: 36px;
  margin: 48px 0;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14);
  font-size: 14px;
  font-weight: 500;
  color: #2196f3;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f2f9fe;

  ${buttonAnimation}
`;

export const LoadMoreButton = ({ ...props }: Props) => {
  return (
    <Button type="button" {...props}>
      Load More
    </Button>
  );
};
