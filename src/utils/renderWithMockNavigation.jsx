/* eslint-disable react/display-name */
/* eslint-disable import/no-extraneous-dependencies */
// Vendor
import React, { useReducer } from 'react';
import { render } from '@testing-library/react-native';
import {
  AppContext,
  reducer,
  initialState as defaultState,
} from '../context/ContextProvider';

// Internal
import { getWithMockNavigation } from './mockNavigation';

const getWrapper =
  (initialState = defaultState) =>
  ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    );
  };

/**
 *  This function, inject to the component the navigation context and props.
 *
 * @param ui Component we want to test example: Component.
 * @param params Params to pass inside of route params.
 * @param props Custom props to be pass to the component.
 * @param customNavigationProps Custom props to pass to the navigation.
 * @returns all the props and the render api.
 */
export const renderWithMockNavigation = (
  ui,
  state,
  params,
  props,
  customNavigationProps,
) => {
  const withMock = getWithMockNavigation({
    Component: ui,
    props,
    params,
    customNavigationProps,
  });

  const Wrapper = getWrapper(state);
  const renderApi = render(withMock.ui, { wrapper: Wrapper });

  return {
    ...withMock.props,
    ...renderApi,
  };
};

export default renderWithMockNavigation;
