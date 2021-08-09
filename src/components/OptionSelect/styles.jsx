import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  input: {
    height: 40,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#888',
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
  },
  error: {
    color: Colors.error,
    paddingVertical: 5,
    fontSize: 13,
  },
});
