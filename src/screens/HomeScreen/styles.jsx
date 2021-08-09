import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 10,
    fontWeight: 'bold',
    color: Colors.darkGray,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
  },
});
