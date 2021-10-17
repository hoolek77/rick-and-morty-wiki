import React from 'react';

import { CharactersList } from 'components/CharactersList';
import { ErrorMessage } from 'components/ErrorMessage';
import { Loader } from 'components/Loader';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { MAIN_BREAKPOINT } from 'constants/breakpoints';
import { useLocationDetails } from 'hooks/useLocationDetails';
import styled from 'styled-components';
import { getIdFromPathname } from 'utils/strings';

const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  margin: 30px;
  text-align: center;
`;

const LocationAdditionalInfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;

  @media (max-width: ${MAIN_BREAKPOINT}) {
    width: 90%;
  }
`;

const LocationInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
`;

const Info = styled.h3`
  font-size: 14px;
  color: #6e798c;
`;

export const LocationDetails = () => {
  const id = getIdFromPathname();
  const { data, error, loading } = useLocationDetails({ id });

  if (loading) {
    return (
      <ScreenWrapper>
        <Loader />
      </ScreenWrapper>
    );
  }

  if (error || !data || !data.location) {
    return (
      <ScreenWrapper>
        <ErrorMessage>There is nothing here 😵‍💫</ErrorMessage>
      </ScreenWrapper>
    );
  }

  const { name, type, dimension, residents } = data.location;

  return (
    <ScreenWrapper>
      <Title>{name}</Title>
      <LocationAdditionalInfoWrapper>
        <LocationInfoWrapper>
          <InfoTitle>Type</InfoTitle>
          <Info>{type}</Info>
        </LocationInfoWrapper>
        <LocationInfoWrapper>
          <InfoTitle>Dimension</InfoTitle>
          <Info>{dimension}</Info>
        </LocationInfoWrapper>
      </LocationAdditionalInfoWrapper>
      <CharactersList characters={residents} title="Residents" />
    </ScreenWrapper>
  );
};
