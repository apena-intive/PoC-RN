import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import Balance from '../HomeScreen/components/Balance';
import DepositFounds from './components/DepositFounds';

const Deposits = () => (
  <View style={styles.container}>
    <View style={styles.cardBalance}>
      <Balance />
    </View>
    <View style={styles.cardInputs}>
      <DepositFounds />
    </View>
  </View>
);

export default Deposits;
