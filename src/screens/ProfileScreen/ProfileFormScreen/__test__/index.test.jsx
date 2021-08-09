import { render } from 'test-utils';
import ProfileFormScreen from '../ProfileFormScreen';

const setup = () =>
  render(ProfileFormScreen, {
    user: {
      email: 'testingmock@gmail.com',
      name: 'Testing',
      surname: 'Mock',
      birthDate: '02/08/2020',
      gender: 'Other',
      avatar: '',
    },
  });

describe('Component ProfileForm', () => {
  describe('Generals', () => {
    it('Should Render', async () => {
      const { getByText, getAllByText, getByTestId } = setup();

      expect(getByTestId('testid-profile-image')).toBeTruthy();
      expect(getByText(/email/i)).toBeTruthy();
      expect(getAllByText(/name/i)).toBeTruthy();
      expect(getByText(/surname/i)).toBeTruthy();
      expect(getByText(/birthdate/i)).toBeTruthy();
      expect(getByText(/gender/i)).toBeTruthy();
    });
  });
});
