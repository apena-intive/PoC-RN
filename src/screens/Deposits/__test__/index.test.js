import { render, fireEvent, waitFor } from 'test-utils';

import Deposits from '../Deposits';

// jest.mock('firebase', () => ({
//   firestore: jest.fn().mockReturnValue({
//     collection: jest.fn().mockReturnValue({
//       doc: jest.fn().mockReturnValue({
//         add: jest.fn().mockResolvedValue({
//           amount: 1000,
//         }),
//       }),
//     }),
//   }),
// }));

const setup = (state) => render(Deposits, state);

describe('Should render Deposit Screen', () => {
  describe('Generals', () => {
    it('Should render Balance component', () => {
      const { getByText } = setup({
        account: { balance: 10000, loading: false },
      });

      expect(getByText(/balance/i)).toBeTruthy();
    });

    it('Should render DepositFounds component', () => {
      const { getAllByText, getByPlaceholderText, getByText } = setup({
        account: { balance: 10000, loading: false },
      });

      expect(getByText(/much/i)).toBeTruthy();
      expect(getAllByText(/deposit/i)).toBeTruthy();
      expect(getByPlaceholderText(/amount/i)).toBeTruthy();
    });
  });

  describe('Input', () => {
    it('Should write an amount', () => {
      const { getByPlaceholderText } = setup({
        account: { balance: 10000, loading: false },
      });
      const input = getByPlaceholderText('Amount: $0.00');

      fireEvent.changeText(input, '10000');

      expect(input.props.value).toEqual('$100.00');
    });

    it('Should show an error validation message', async () => {
      const { getByPlaceholderText, getByText, queryByText } = setup({
        account: { balance: 10000, loading: false },
      });

      const input = getByPlaceholderText('Amount: $0.00');
      const button = getByText('DEPOSIT');

      fireEvent.changeText(input, '0');
      fireEvent.press(button);

      await waitFor(() => {
        expect(queryByText(/greater/i)).toBeTruthy();
      });

      expect(getByText(/greater/i)).toBeTruthy();
    });

    // it('Should navigate to Error/Success', async () => {
    //   const { getByPlaceholderText, getByText, navigation } = setup({
    //     account: { balance: 10000, loading: false },
    //   });

    //   const input = getByPlaceholderText('Amount: $0.00');
    //   const button = getByText('DEPOSIT');

    //   fireEvent.changeText(input, '10000');
    //   fireEvent.press(button);

    //   await waitFor(() => {
    //     expect(navigation.navigate).toBeCalledWith('ErrorSuccess', {
    //       isError: false,
    //       message: 'Succesful transaction',
    //     });
    //   });
    // });
  });
});
