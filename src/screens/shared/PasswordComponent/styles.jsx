import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  form: {
    paddingHorizontal: 15,
    width: '100%',
  },
  text: {
    fontSize: 19,
    margin: 10,
    textAlign: 'center',
    color: Colors.black,
    fontWeight: 'bold',
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
  button: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  biometricText: {
    color: Colors.white,
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'orange',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
});
