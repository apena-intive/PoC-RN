import { render, fireEvent } from 'test-utils';

import ProfileCardScreen from '../ProfileCardScreen';

const setup = () =>
  render(ProfileCardScreen, {
    user: {
      email: 'testingmock@gmail.com',
      name: 'Testing',
      surname: 'Mock',
      birthDate: '02/08/2020',
      gender: 'Other',
      avatar: '',
    },
  });

describe('Component ProfileCard', () => {
  describe('Generals', () => {
    it('Should Render', async () => {
      const { getByText, getByTestId } = setup();

      expect(getByTestId('testid-image')).toBeTruthy();
      expect(getByText(/name/i)).toBeTruthy();
      expect(getByText(/email/i)).toBeTruthy();
      expect(getByText(/gender/i)).toBeTruthy();
      expect(getByText(/birthdate/i)).toBeTruthy();
    });
  });

  describe('Card', () => {
    it('Should Show Info', () => {
      const { getByText, getAllByText } = setup({});

      expect(getAllByText(/testing mock/i)).toBeTruthy();
      expect(getByText(/testingmock@gmail/i)).toBeTruthy();
      expect(getByText(/other/i)).toBeTruthy();
    });

    it('Should Navigate to Profile Form', () => {
      const { getByText, navigation } = setup();
      const button = getByText('Edit Profile');
      fireEvent.press(button);

      expect(navigation.navigate).toBeCalledWith('ProfileForm');
    });
  });
  describe('Logout', () => {
    it.todo('Should End Session');
  });
});
