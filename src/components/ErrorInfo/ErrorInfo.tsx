import React from 'react';

import { ErrorMessage } from 'components/ErrorMessage';
import { ScreenWrapper } from 'components/ScreenWrapper';
import { NOT_FOUND_MESSAGE } from 'constants/errorMessages';

export const ErrorInfo = () => {
  return (
    <ScreenWrapper>
      <ErrorMessage>{NOT_FOUND_MESSAGE}</ErrorMessage>
    </ScreenWrapper>
  );
};
