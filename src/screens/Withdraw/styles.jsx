import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBalance: {
    flex: 0.5,
    height: '30%',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 25,
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: Colors.white,
  },
  cardInputs: {
    flex: 1,
    //    height: '80%',
    width: '90%',
    // alignSelf: 'center',
    // justifyContent: 'center',
    marginVertical: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: Colors.white,
  },
});
