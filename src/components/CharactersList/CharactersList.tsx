import React from 'react';

import { ApolloError } from '@apollo/client';
import { CharacterCard } from 'components/CharacterCard';
import { ErrorMessage } from 'components/ErrorMessage';
import { Loader } from 'components/Loader';
import { CharactersResult } from 'hooks/useCharacters';
import styled from 'styled-components';

interface Props {
  characters: CharactersResult[];
  loading: boolean;
  error?: ApolloError;
}

const Wrapper = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 16px;
  justify-items: center;
  margin-bottom: 48px;
`;

export const CharactersList = ({ characters, loading, error }: Props) => {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage>There is nothing here 😵‍💫</ErrorMessage>;
  }

  return (
    <Wrapper>
      {characters?.map((character) => {
        return <CharacterCard {...character} key={character.id} />;
      })}
    </Wrapper>
  );
};
