import { render, fireEvent, waitFor } from 'test-utils';

import Withdraw from '../Withdraw';

const setup = () =>
  render(Withdraw, {
    account: { balance: 10000, loading: false },
  });

jest.mock('../hooks/useGetAllUsers', () => ({
  useGetAllUsers: jest.fn(() => ({
    loading: false,
    data: [
      {
        label: 'Fede Prueba',
        id: 1,
        value: 'fede prueba',
      },
    ],
  })),
}));

jest.mock('../../../services/hooks/useCloudFunction', () => ({
  useCloudFunction: jest.fn((fnName, successHandler, errorHandler) => {
    successHandler();
    errorHandler();
    return {
      loading: false,
      error: '',
      data: undefined,
      exec: jest.fn(),
    };
  }),
}));

describe('Should render Withdraw Screen', () => {
  describe('Generals', () => {
    it('Should render Balance component', () => {
      const { getByText } = setup();

      expect(getByText(/balance/i)).toBeTruthy();
    });

    it('Should render TransferFounds component', () => {
      const { getAllByText, getByPlaceholderText, getByText } = setup();

      expect(getAllByText(/transfer/i)).toBeTruthy();
      expect(getByText(/receiver/i)).toBeTruthy();
      expect(getByPlaceholderText(/amount/i)).toBeTruthy();
    });
  });

  describe('Input', () => {
    it('Should write an amount', () => {
      const { getByPlaceholderText } = setup();
      const input = getByPlaceholderText('Amount: $0.00');

      fireEvent.changeText(input, '10000');

      expect(input.props.value).toEqual('$100.00');
    });

    it('Should select a user with the SelectPicker', () => {
      const { getByTestId } = setup();
      const select = getByTestId('testid-select');

      fireEvent(select, 'onValueChange', {
        label: 'Fede Prueba',
        id: 1,
        value: 'fede prueba',
      });
    });
  });

  describe('Validations', () => {
    it('Should show an amount error validation message', async () => {
      const { getByText, queryByText } = setup();
      const button = getByText('TRANSFER');

      fireEvent.press(button);

      await waitFor(() => {
        expect(queryByText(/valid number/i)).toBeTruthy();
      });

      expect(getByText(/valid number/i)).toBeTruthy();
    });

    it('Should show an picker error validation message', async () => {
      const { getByPlaceholderText, getByText, queryByText } = setup();

      const input = getByPlaceholderText('Amount: $0.00');
      const button = getByText('TRANSFER');

      fireEvent.changeText(input, '0');
      fireEvent.press(button);

      await waitFor(() => {
        expect(queryByText(/required field/i)).toBeTruthy();
      });

      expect(getByText(/required field/i)).toBeTruthy();
    });

    it('Should show an error when the amount is greater than the balance', async () => {
      const { getByPlaceholderText, getByText, queryByText } = setup();

      const input = getByPlaceholderText('Amount: $0.00');
      const button = getByText('TRANSFER');

      fireEvent.changeText(input, '5000000');
      fireEvent.press(button);

      await waitFor(() => {
        expect(queryByText(/lower amount/i)).toBeTruthy();
      });
      expect(getByText(/lower amount/i)).toBeTruthy();
    });
  });

  describe('Navigations', () => {
    it('Should navigate to Success screen', async () => {
      const { getByPlaceholderText, getByText, navigation } = setup();

      const input = getByPlaceholderText('Amount: $0.00');
      const button = getByText('TRANSFER');

      fireEvent.changeText(input, '10000');
      fireEvent.press(button);

      await waitFor(() => {
        expect(navigation.navigate).toBeCalledWith('ErrorSuccess', {
          isError: false,
          message: 'Succesful transaction',
        });
      });
    });

    it('Should navigate to Error screen', async () => {
      const { getByPlaceholderText, getByText, navigation } = setup();

      const input = getByPlaceholderText('Amount: $0.00');
      const button = getByText('TRANSFER');

      fireEvent.changeText(input, '10000');
      fireEvent.press(button);

      await waitFor(() => {
        expect(navigation.navigate).toBeCalledWith('ErrorSuccess', {
          isError: true,
          message: 'Failed transaction',
        });
      });
    });
  });
});
