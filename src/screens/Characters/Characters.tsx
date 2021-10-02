import React from 'react';

import charactersLogo from 'assets/charactersLogo.png';
import { ScreenImage } from 'components/ScreenImage';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { useCharacters } from 'hooks/useCharacters';

export const Characters = () => {
  const { data } = useCharacters();

  console.log(data);

  return (
    <ScreenWrapper>
      <ScreenImage src={charactersLogo} alt="characters" />
    </ScreenWrapper>
  );
};
