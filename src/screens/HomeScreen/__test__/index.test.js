import { render, fireEvent, waitFor } from 'test-utils';

import HomeScreen from '../HomeScreen';
import { useGetListMovs } from '../hooks/useGetListMovs';

const setup = () =>
  render(HomeScreen, {
    account: { balance: 10000, loading: false },
    transactions: [
      {
        description: `Fede Prueba`,
        docID: 12,
        amount: 12000,
        date: '2015-03-25T12:00:00Z',
        type: 'FOUNDS_IN',
      },
      {
        description: `Jose Prueba`,
        docID: 1,
        amount: 600,
        date: '2020-03-25T12:00:00Z',
        type: 'FOUNDS_OUT',
      },
      {
        description: `Chacho Prueba`,
        docID: 14,
        amount: 5000,
        date: '2021-03-25T12:00:00Z',
        type: 'FOUNDS_OUT',
      },
    ],
  });

const mockHandlerGetMore = jest.fn();

jest.mock('../hooks/useGetListMovs', () => ({
  useGetListMovs: jest.fn(() => ({
    loading: false,
    handlerGetMore: mockHandlerGetMore,
  })),
}));

describe('Should render Home Screen', () => {
  describe('Generals', () => {
    it('Should render Balance component', () => {
      useGetListMovs.mockImplementation(() => ({
        loading: false,
      }));
      const { getByText } = setup();

      expect(getByText(/balance/i)).toBeTruthy();
    });

    it('Should render Spinner in TransactionsList', () => {
      useGetListMovs.mockImplementation(() => ({
        loading: true,
      }));
      const { getByAccessibilityHint } = setup();

      getByAccessibilityHint('loading');
    });

    it('Should render TransactionsList', () => {
      const { getByText, getAllByText } = setup();

      expect(getByText(/received from/i));
      expect(getAllByText(/sent to/i));
      expect(getByText(/fede prueba/i));
      expect(getByText(/12,000.00/i));
      expect(getByText(/600.00/i));
      expect(getByText(/5,000.00/i));
      expect(getByText(/chacho/i));
      expect(getByText(/jose/i));
      expect(getByText(/2015/i));
      expect(getByText(/2020/i));
      expect(getByText(/2021/i));
    });
  });

  describe('Navigation', () => {
    it('Should navigation to deposit screen', async () => {
      const { getByText, navigation } = setup();

      const button = getByText('DEPOSIT');
      fireEvent.press(button);

      await waitFor(() => {
        expect(navigation.navigate).toBeCalledWith('Deposits');
      });
    });
  });
});
