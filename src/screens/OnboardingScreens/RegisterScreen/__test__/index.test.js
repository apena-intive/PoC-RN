import { render, fireEvent, waitFor } from 'test-utils';
import RegisterScreen from '../RegisterScreen';

const setup = () => render(RegisterScreen);

describe('RegisterScreen', () => {
  describe('Generals', () => {
    it('Should Render', async () => {
      const { getByText, getAllByText } = setup();

      expect(getByText(/email/i)).toBeTruthy();
      expect(getAllByText(/password/i)).toBeTruthy();
      expect(getByText(/confirm password/i)).toBeTruthy();
      expect(getAllByText(/name/i)).toBeTruthy();
      expect(getByText(/surname/i)).toBeTruthy();
      expect(getByText(/birthdate/i)).toBeTruthy();
      expect(getByText(/gender/i)).toBeTruthy();
    });
  });
});
describe('Inputs', () => {
  it('Should require fields', async () => {
    const { getByText, getAllByText } = setup();

    const button = getByText(/register/i);

    fireEvent.press(button);
    await waitFor(() => {
      expect(getAllByText(/required/i)).toHaveLength(6);
      expect(getByText(/8 characters/i)).toBeTruthy();
    });
  });
  it('Should write an email', () => {
    const { getByPlaceholderText } = setup();

    const input = getByPlaceholderText('example@gmail.com');
    fireEvent.changeText(input, 'example@example.com');
    expect(input.props.value).toEqual('example@example.com');
  });

  it('Should write an invalid email', async () => {
    const { getByPlaceholderText, getByText, queryByText } = setup();

    const button = getByText(/register/i);
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

    const pass = getByPlaceholderText('Enter password');
    const confirmPass = getByPlaceholderText('Confirm password');

    fireEvent.changeText(pass, '1234567');
    fireEvent.changeText(confirmPass, '1234567');
    expect(pass.props.value).toEqual('1234567');
    expect(confirmPass.props.value).toEqual('1234567');
  });
  it('Should have diffrent passwords', async () => {
    const { getByPlaceholderText, getByText } = setup();

    const pass = getByPlaceholderText('Enter password');
    const confirmPass = getByPlaceholderText('Confirm password');

    fireEvent.changeText(pass, '12345678');
    fireEvent.changeText(confirmPass, '12312312');
    const button = getByText(/register/i);

    fireEvent.press(button);
    await waitFor(() => {
      expect(getByText(/must match/i)).toBeTruthy();
    });
  });

  it('Should write a name', () => {
    const { getByPlaceholderText } = setup();

    const input = getByPlaceholderText('John');
    fireEvent.changeText(input, 'John');
    expect(input.props.value).toEqual('John');
  });
  it.todo('Should select a date');
  // it('Should select a date', async () => {
  //   const { getByTestId, queryByTestId, debug } = setup();

  //   const date = getByTestId('testid-calendar');
  //   fireEvent.press(date);

  //   await waitFor(() => {

  //     const button = queryByTestId("testid-datetimepicker");
  //     expect(button).toBeTruthy();
  //   });
  //   debug()
  // });
  it('Should select a gender', () => {
    const { getByTestId } = setup();
    const gender = getByTestId('testid-select');
    fireEvent(gender, 'onValueChange', {
      label: 'Male',
      id: 1,
      value: 'Male',
    });
  });
  it.todo('Should Submit');
});
