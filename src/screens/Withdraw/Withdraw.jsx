import React from 'react';
import { View } from 'react-native';

import Balance from '../HomeScreen/components/Balance';
import TransferFounds from './components/TransferFounds';
import { styles } from './styles';

const Whitdraw = () => (
  <View style={styles.container}>
    <View style={styles.cardBalance}>
      <Balance />
    </View>
    <View style={styles.cardInputs}>
      <TransferFounds />
    </View>
  </View>
);

export default Whitdraw;
