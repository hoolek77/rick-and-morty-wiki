import React from 'react';

import episodesLogo from 'assets/episodesLogo.png';
import { ScreenImage } from 'components/ScreenImage';
import { ScreenWrapper } from 'components/ScreenWrapper';

export const Episodes = () => {
  return (
    <ScreenWrapper>
      <ScreenImage src={episodesLogo} alt="characters" />
    </ScreenWrapper>
  );
};
