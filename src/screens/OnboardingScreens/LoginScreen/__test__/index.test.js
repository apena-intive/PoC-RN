import { render, fireEvent, waitFor } from 'test-utils';

import LoginScreen from '../LoginScreen';

jest.mock('../../../../services/hooks/useLogin', () => ({
  useLogin: jest.fn(() => ({
    loading: false,
    error: '',
    handler: jest.fn(),
  })),
}));

const setup = () => render(LoginScreen);

describe('LoginScreen', () => {
  describe('Generals', () => {
    it('Should Render', () => {
      const { getByText, getAllByText } = setup();

      expect(getByText(/login/i)).toBeTruthy();
      expect(getByText(/email/i)).toBeTruthy();
      expect(getAllByText(/password/i)).toBeTruthy();
      expect(getByText(/account/i)).toBeTruthy();
    });

    it('Should Navigate To Register', () => {
      const { getByText, navigation } = setup();

      const button = getByText(/account/i);

      fireEvent.press(button);

      expect(navigation.navigate).toBeCalledWith('RegisterScreen');
    });
  });

  describe('Inputs', () => {
    it('Should write an email', () => {
      const { getByPlaceholderText } = setup();

      const input = getByPlaceholderText('example@gmail.com');

      fireEvent.changeText(input, 'hola');

      // TODO: Ver y mejorar
      expect(input.props.value).toEqual('hola');
    });

    it('Should write an invalid email', async () => {
      const { getByPlaceholderText, getByText, queryByText } = setup();

      const button = getByText(/login/i);
      const input = getByPlaceholderText('example@gmail.com');

      fireEvent.changeText(input, 'hola');
      fireEvent.press(button);

      await waitFor(() => {
        expect(queryByText(/Please enter a valid email format/i)).toBeTruthy();
      });

      expect(getByText(/Please enter a valid email format/i)).toBeTruthy();
    });

    it('Should write a password', () => {
      const { getByPlaceholderText } = setup();

      const input = getByPlaceholderText('Enter password');

      fireEvent.changeText(input, '1234567');
      // TODO: Ver y mejorar
      expect(input.props.value).toEqual('1234567');
    });

    it('Should write an invalid password', async () => {
      const { queryByText, getByText } = setup();

      const button = getByText(/login/i);

      fireEvent.press(button);

      await waitFor(() => {
        expect(queryByText(/8 characters/i)).toBeTruthy();
      });

      expect(getByText(/8 characters/i)).toBeTruthy();
    });
  });

  describe('Submit', () => {
    test.todo('Should show a loading transaction');
    // , async () => {
    //   const { getByPlaceholderText, getByText } = setup();

    //   const inputEmail = getByPlaceholderText('example@gmail.com');
    //   const inputPassword = getByPlaceholderText('Enter password');
    //   const button = getByText(/login/i);

    //   fireEvent.changeText(inputEmail, 'fede@intive.com');
    //   fireEvent.changeText(inputPassword, '123123123');
    //   fireEvent.press(button);

    //   await waitFor(() => {
    //     // expect(queryByText(/loading/i)).toBeTruthy();
    //   });

    //   // expect(getByText(/loading/i)).toBeTruthy();
    // });
  });

  //   it('Should SignIn', () => {});
  //   it('Should have Error', () => {});
  //   it('Should Go back', () => {});
  //   it('Should Navigate to SignUp', () => {});
});
