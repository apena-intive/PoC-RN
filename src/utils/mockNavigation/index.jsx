// Vendor
import { NavigationContext } from '@react-navigation/core';
import React from 'react';

// Internal
import { getPropsWithNavigation } from './helpers';

export const getWithMockNavigation = ({
  Component,
  props,
  params,
  customNavigationProps,
}) => {
  const propsWithNavigation = getPropsWithNavigation(
    params,
    props,
    customNavigationProps,
  );

  return {
    ui: (
      <NavigationContext.Provider value={propsWithNavigation.navigation}>
        <Component {...propsWithNavigation} />
      </NavigationContext.Provider>
    ),
    props: propsWithNavigation,
  };
};
