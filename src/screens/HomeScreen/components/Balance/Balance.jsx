/* eslint-disable react/jsx-fragments */
import React from 'react';
import { Text, View } from 'react-native';
import { formatNumber } from 'react-native-currency-input';
import LottieView from 'lottie-react-native';

import { useAppContext } from '../../../../context';
import { dataMov } from '../../../../data/dataMov';
import { styles } from './styles';
import loadingDots from '../../../../../assets/loadingDots.json';

export const totalBalance = dataMov
  .map((mov) => mov.amount)
  .reduce((a, b) => a + b)
  .toFixed(2);

const Balance = () => {
  const {
    state: {
      account: { balance, loading },
    },
  } = useAppContext();

  const totalBalanceFormated = formatNumber(balance, {
    separator: '.',
    prefix: '$',
    precision: 2,
    delimiter: ',',
    signPosition: 'beforePrefix',
  });
  return (
    <View style={styles.balance}>
      {loading ? (
        <View style={{ height: 50, width: 50 }}>
          <LottieView
            style={styles.animation}
            source={loadingDots}
            autoPlay
            loop
          />
        </View>
      ) : (
        <View>
          <Text style={styles.text}>Your Balance</Text>
          <Text style={styles.text}>{totalBalanceFormated}</Text>
        </View>
      )}
    </View>
  );
};
export default Balance;
