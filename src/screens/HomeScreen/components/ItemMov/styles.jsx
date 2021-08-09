import { StyleSheet } from 'react-native';

import Colors from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    margin: 8,
    padding: 8,
    height: 65,
  },
  date: {
    flex: 0.8,
    fontSize: 14,
    color: Colors.secondary,
    alignSelf: 'center',
  },
  description: {
    flex: 1.5,
    alignSelf: 'center',
  },
  amount: {
    flex: 0.7,
    alignSelf: 'center',
    textAlign: 'right',
    color: Colors.positive,
  },
  amountNegative: {
    flex: 0.7,
    alignSelf: 'center',
    textAlign: 'right',
    color: Colors.negative,
  },
});
