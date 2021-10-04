import { css } from 'styled-components';

export const buttonAnimation = css`
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;
