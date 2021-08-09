import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderBottomColor: '#888',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  input: {
    flex: 0.9,
    height: 40,
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    paddingTop: 15,
  },

  check: {
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 2,
    color: 'grey',
  },

  error: {
    color: Colors.error,
    paddingVertical: 5,
    fontSize: 13,
  },
});
