import React from 'react';

import { ApolloError } from '@apollo/client';
import { ErrorMessage } from 'components/ErrorMessage';
import { ListWrapper } from 'components/ListWrapper';
import { Loader } from 'components/Loader';
import { TextCard } from 'components/TextCard';
import { AllEpisodesEpisodesResults } from 'hooks/useEpisodes';

interface Props {
  episodes: AllEpisodesEpisodesResults[];
  loading: boolean;
  error?: ApolloError;
}

export const EpisodesList = ({ episodes, loading, error }: Props) => {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage>There is nothing here 😵‍💫</ErrorMessage>;
  }

  return (
    <ListWrapper>
      {episodes?.map(({ id, name, airDate, episode }) => {
        return (
          <TextCard title={name} description={airDate} additionalInfo={episode} id={id} path="episodes" key={id} />
        );
      })}
    </ListWrapper>
  );
};
