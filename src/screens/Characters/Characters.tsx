import React from 'react';

import charactersLogo from 'assets/charactersLogo.png';
import { ScreenImage } from 'components/ScreenImage';
import { ScreenWrapper } from 'components/ScreenWrapper';

export const Characters = () => {
  return (
    <ScreenWrapper>
      <ScreenImage src={charactersLogo} alt="characters" />
    </ScreenWrapper>
  );
};
