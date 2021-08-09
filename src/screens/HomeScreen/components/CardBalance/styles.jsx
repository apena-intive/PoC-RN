import { StyleSheet } from 'react-native';

import Colors from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  card: {
    height: '25%',
    width: '96%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 15,
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: Colors.white,
  },
  balance: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
});
