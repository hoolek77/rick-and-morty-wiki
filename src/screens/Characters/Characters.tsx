import React from 'react';

import charactersLogo from 'assets/charactersLogo.png';
import { CharacterCard } from 'components/CharacterCard';
import { ScreenImage } from 'components/ScreenImage';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { useCharacters } from 'hooks/useCharacters';

export const Characters = () => {
  const { data } = useCharacters();

  console.log(data);

  return (
    <ScreenWrapper>
      <ScreenImage src={charactersLogo} alt="characters" />

      <CharacterCard
        id="xd"
        name="Rick Sanchez"
        species="Human"
        src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
      />
    </ScreenWrapper>
  );
};
