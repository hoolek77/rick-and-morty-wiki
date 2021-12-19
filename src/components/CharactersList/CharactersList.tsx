import React from 'react';

import { ApolloError } from '@apollo/client';
import { CharacterCard } from 'components/CharacterCard';
import { ErrorMessage } from 'components/ErrorMessage';
import { ListWrapper } from 'components/ListWrapper';
import { Loader } from 'components/Loader';
import { NOT_FOUND_MESSAGE } from 'constants/errorMessages';
import { CharactersResult } from 'hooks/useCharacters';

interface Props {
  characters: CharactersResult[];
  title?: string;
  loading?: boolean;
  error?: ApolloError;
}

export const CharactersList = ({ characters, loading, error, title }: Props) => {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage>{NOT_FOUND_MESSAGE}</ErrorMessage>;
  }

  return (
    <ListWrapper title={title}>
      {characters?.map((character) => {
        return <CharacterCard {...character} key={character.id} />;
      })}
    </ListWrapper>
  );
};
