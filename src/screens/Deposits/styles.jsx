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
    width: '90%',
    height: '30%',
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
  cardInputs: {
    flex: 1,
    width: '90%',
    height: '60%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 25,
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: Colors.white,
  },
});
