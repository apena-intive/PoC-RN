import React from 'react';

import RootApp from './RootApp';
import { useAppContext } from './src/context';
import OnboardingNavigation from './src/navigation/OnboardingNavigation';

const Root = () => {
  const {
    state: { auth },
  } = useAppContext();

  return auth.isSigned ? <RootApp /> : <OnboardingNavigation />;
};

export default Root;
