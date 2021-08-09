import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  card: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: Colors.black,
  },
  text: {
    fontStyle: 'italic',
    fontSize: 18,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: Colors.white,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  button: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 15,
  },
});
