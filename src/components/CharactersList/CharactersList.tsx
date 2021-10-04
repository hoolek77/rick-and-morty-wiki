import React from 'react';

import { CharacterCard } from 'components/CharacterCard';
import { CharactersResult } from 'hooks/useCharacters';
import styled from 'styled-components';

interface Props {
  characters: CharactersResult[];
}

const Wrapper = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 16px;
  justify-items: center;
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
