import React from 'react';

import { CharacterCard } from 'components/CharacterCard';
import { CharactersResult } from 'hooks/useCharacters';
import styled from 'styled-components';

interface Props {
  characters: CharactersResult[];
}

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  column-gap: 16px;
`;

export const CharactersList = ({ characters }: Props) => {
  return (
    <Wrapper>
      {characters?.map((character) => {
        return <CharacterCard {...character} key={character.id} />;
      })}
    </Wrapper>
  );
};
