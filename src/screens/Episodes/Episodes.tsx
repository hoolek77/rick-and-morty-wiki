import React from 'react';

import episodesLogo from 'assets/episodesLogo.png';
import { ScreenImage } from 'components/ScreenImage';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { useEpisodes } from 'hooks/useEpisodes';

export const Episodes = () => {
  const { data } = useEpisodes();

  console.log(data);

  return (
    <ScreenWrapper>
      <ScreenImage src={episodesLogo} alt="characters" />
    </ScreenWrapper>
  );
};
