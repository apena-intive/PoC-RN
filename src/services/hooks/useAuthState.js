/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';

export const useAuthState = () => {
  const [isSigned, setIsSigned] = useState(false);

  return {
    isSigned,
    setIsSigned,
  };
};
