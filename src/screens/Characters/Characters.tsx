import React from 'react';

import charactersLogo from 'assets/charactersLogo.png';
import { CharactersList } from 'components/CharactersList';
import { LoadMoreButton } from 'components/LoadMoreButton';
import { ScreenImage } from 'components/ScreenImage';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { useCharacters } from 'hooks/useCharacters';

export const Characters = () => {
  const { data, loadMoreCharacters, isNextPage } = useCharacters();

  return (
    <ScreenWrapper>
      <ScreenImage src={charactersLogo} alt="characters" />
      <CharactersList characters={data} />
      {isNextPage && <LoadMoreButton onClick={loadMoreCharacters} />}
    </ScreenWrapper>
  );
};
