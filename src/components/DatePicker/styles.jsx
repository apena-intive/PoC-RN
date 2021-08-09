import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  datelabel: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    borderBottomColor: '#888',
    borderBottomWidth: 1,
  },
  pickedDate: {
    height: 30,
    fontSize: 16,
    color: '#9a9',
  },
  input: {
    flex: 0.9,
  },
  icon: {
    padding: 2,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
    color: 'grey',
  },

  label: {
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 10,
  },

  error: {
    color: Colors.error,
    paddingVertical: 5,
    fontSize: 13,
  },
});
