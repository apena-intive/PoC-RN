import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FlexButton from '../../../../components/Buttons';
import Colors from '../../../../constants/Colors';
import { styles } from './styles';
import Balance from '../Balance';
import { SCREEN_NAMES } from '../../../../constants/Constants';

const CardBalance = () => {
  const navigation = useNavigation();

  const goToDeposits = () => navigation.navigate(SCREEN_NAMES.DEPOSITS);

  return (
    <View style={styles.card}>
      <View style={styles.balance}>
        <Balance />
      </View>
      <View style={styles.button}>
        <FlexButton
          color={Colors.primary}
          text="DEPOSIT"
          onPress={goToDeposits}
        />
      </View>
    </View>
  );
};
export default CardBalance;
