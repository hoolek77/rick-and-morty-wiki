import React from 'react';

import charactersLogo from 'assets/charactersLogo.png';
import { CharactersList } from 'components/CharactersList';
import { ScreenImage } from 'components/ScreenImage';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { useCharacters } from 'hooks/useCharacters';

export const Characters = () => {
  const { data } = useCharacters();

  return (
    <ScreenWrapper>
      <ScreenImage src={charactersLogo} alt="characters" />
      <CharactersList characters={data} />
    </ScreenWrapper>
  );
};
