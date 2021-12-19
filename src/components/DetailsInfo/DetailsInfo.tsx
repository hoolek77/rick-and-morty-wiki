import { MAIN_BREAKPOINT } from 'constants/breakpoints';
import styled from 'styled-components';

export const DetailsInfoAdditionalWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;

  @media (max-width: ${MAIN_BREAKPOINT}) {
    width: 90%;
  }
`;

export const DetailsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailInfoTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
`;

export const DetailsInfo = styled.h3`
  font-size: 14px;
  color: #6e798c;
`;
