import React from 'react';

import { CharactersList } from 'components/CharactersList';
import { DetailInfoTitle, DetailsInfo, DetailsInfoAdditionalWrapper, DetailsInfoWrapper } from 'components/DetailsInfo';
import { ErrorInfo } from 'components/ErrorInfo';
import { Loader } from 'components/Loader';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { useLocationDetails } from 'hooks/useLocationDetails';
import styled from 'styled-components';
import { getIdFromPathname } from 'utils/strings';

const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  margin: 30px;
  text-align: center;
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
    return <ErrorInfo />;
  }

  const { name, type, dimension, residents } = data.location;

  return (
    <ScreenWrapper>
      <Title>{name}</Title>
      <DetailsInfoAdditionalWrapper>
        <DetailsInfoWrapper>
          <DetailInfoTitle>Type</DetailInfoTitle>
          <DetailsInfo>{type}</DetailsInfo>
        </DetailsInfoWrapper>
        <DetailsInfoWrapper>
          <DetailInfoTitle>Dimension</DetailInfoTitle>
          <DetailsInfo>{dimension}</DetailsInfo>
        </DetailsInfoWrapper>
      </DetailsInfoAdditionalWrapper>
      <CharactersList characters={residents} title="Residents" />
    </ScreenWrapper>
  );
};
