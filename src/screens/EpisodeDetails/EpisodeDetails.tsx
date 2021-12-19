import React from 'react';

import { CharactersList } from 'components/CharactersList';
import { DetailInfoTitle, DetailsInfo, DetailsInfoAdditionalWrapper, DetailsInfoWrapper } from 'components/DetailsInfo';
import { ErrorInfo } from 'components/ErrorInfo';
import { Loader } from 'components/Loader';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { useEpisodeDetails } from 'hooks/useEpisodeDetails';
import styled from 'styled-components';
import { getIdFromPathname } from 'utils/strings';

const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  margin: 30px;
  text-align: center;
`;

export const EpisodeDetails = () => {
  const id = getIdFromPathname();
  const { data, error, loading } = useEpisodeDetails({ id });

  if (loading) {
    return (
      <ScreenWrapper>
        <Loader />
      </ScreenWrapper>
    );
  }

  if (error || !data || !data.episode) {
    return <ErrorInfo />;
  }

  const { name, characters, episode, air_date: airDate } = data.episode;

  return (
    <ScreenWrapper>
      <Title>{name}</Title>
      <DetailsInfoAdditionalWrapper>
        <DetailsInfoWrapper>
          <DetailInfoTitle>Episode</DetailInfoTitle>
          <DetailsInfo>{episode}</DetailsInfo>
        </DetailsInfoWrapper>
        <DetailsInfoWrapper>
          <DetailInfoTitle>Date</DetailInfoTitle>
          <DetailsInfo>{airDate}</DetailsInfo>
        </DetailsInfoWrapper>
      </DetailsInfoAdditionalWrapper>
      <CharactersList characters={characters} title="Cast" />
    </ScreenWrapper>
  );
};
