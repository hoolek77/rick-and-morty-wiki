import React from 'react';

import locationsLogo from 'assets/locationsLogo.png';
import { ScreenImage } from 'components/ScreenImage';
import { ScreenWrapper } from 'components/ScreenWrapper';

export const Locations = () => {
  return (
    <ScreenWrapper>
      <ScreenImage src={locationsLogo} alt="characters" />
    </ScreenWrapper>
  );
};
