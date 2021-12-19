import React from 'react';

import { CharactersList } from 'components/CharactersList';
import { ErrorInfo } from 'components/ErrorInfo';
import { Loader } from 'components/Loader';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { MAIN_BREAKPOINT } from 'constants/breakpoints';
import { useEpisodeDetails } from 'hooks/useEpisodeDetails';
import styled from 'styled-components';
import { getIdFromPathname } from 'utils/strings';

const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  margin: 30px;
  text-align: center;
`;

const EpisodeAdditionalInfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;

  @media (max-width: ${MAIN_BREAKPOINT}) {
    width: 90%;
  }
`;

const EpisodeInfoWrapper = styled.div`
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
      <EpisodeAdditionalInfoWrapper>
        <EpisodeInfoWrapper>
          <InfoTitle>Episode</InfoTitle>
          <Info>{episode}</Info>
        </EpisodeInfoWrapper>
        <EpisodeInfoWrapper>
          <InfoTitle>Date</InfoTitle>
          <Info>{airDate}</Info>
        </EpisodeInfoWrapper>
      </EpisodeAdditionalInfoWrapper>
      <CharactersList characters={characters} title="Cast" />
    </ScreenWrapper>
  );
};
