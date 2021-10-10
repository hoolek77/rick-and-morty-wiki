import React, { ComponentPropsWithoutRef } from 'react';

import { buttonAnimation } from 'animations/buttons';
import { Loader as OLoader } from 'components/Loader';
import styled, { css } from 'styled-components';

interface Props extends ComponentPropsWithoutRef<'button'> {
  loading?: boolean;
  disabled?: boolean;
}

const Loader = styled(OLoader)`
  width: 32px;
  height: 32px;
`;

const disabledButtonStyling = css`
  background-color: #e5e5e5;
`;

const Button = styled.button<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 154px;
  height: 36px;
  margin-bottom: 48px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14);
  font-size: 14px;
  font-weight: 500;
  color: #2196f3;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f2f9fe;

  ${({ disabled }) => (disabled ? disabledButtonStyling : buttonAnimation)}
`;

export const LoadMoreButton = ({ loading = false, disabled = false, ...props }: Props) => {
  return (
    <Button type="button" disabled={disabled} {...props}>
      {loading ? <Loader /> : 'Load More'}
    </Button>
  );
};
