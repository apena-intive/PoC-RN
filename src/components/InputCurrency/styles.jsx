import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
    height: 40,
    width: 120,
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
