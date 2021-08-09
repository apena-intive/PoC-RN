import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  form: {
    paddingHorizontal: 15,
    width: '100%',
  },
  link: {
    justifyContent: 'center',
    paddingTop: 10,
  },
  text: {
    fontSize: 12,
    paddingTop: 10,
    color: Colors.link,
  },
  secondaryView: {
    paddingBottom: 40,
  },
  image: {
    height: 100,
    width: 150,
    margin: 10,
    alignContent: 'center',
  },
  error: {
    paddingBottom: 25,
    color: Colors.negative,
    paddingHorizontal: 20,
  },
});
