import { css } from 'styled-components';

export const spinnerAnimation = css`
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: rotating 1s linear infinite;
`;
