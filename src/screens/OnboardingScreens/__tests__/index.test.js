import { render, fireEvent } from 'test-utils';

import OnboardingScreen from '../OnboardingScreen';

const setup = () => render(OnboardingScreen);

describe('Onboarding screen', () => {
  it('Should render', () => {
    const { getByText } = setup();

    expect(getByText(/login/i)).toBeTruthy();
    expect(getByText(/register/i)).toBeTruthy();
  });

  it('Should navigate to login', () => {
    const { getByText, navigation } = setup();

    const button = getByText(/login/i);

    fireEvent.press(button);

    expect(navigation.navigate).toBeCalledWith('LoginScreen');
  });

  it('Should navigate to register', () => {
    const { getByText, navigation } = setup();

    const button = getByText(/register/i);

    fireEvent.press(button);

    expect(navigation.navigate).toBeCalledWith('RegisterScreen');
  });
});
