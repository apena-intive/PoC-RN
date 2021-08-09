import React from 'react';
import { Text, View } from 'react-native';
import { formatNumber } from 'react-native-currency-input';
import moment from 'moment';

import { styles } from './styles';

const ItemMov = ({ description, date, amount, type }) => {
  const amountFormatted = formatNumber(amount, {
    separator: '.',
    prefix: '$',
    precision: 2,
    delimiter: ',',
    signPosition: 'beforePrefix',
  });

  let newDescription = description;
  if (type === 'FOUNDS_IN') {
    newDescription = `Received from ${description}`;
  } else if (type === 'FOUNDS_OUT') {
    newDescription = `Sent to ${description}`;
  }

  return (
    <View style={styles.item}>
      <Text style={styles.date}>{moment(date).format('DD/MM/YYYY HH:mm')}</Text>
      <Text style={styles.description}>{newDescription}</Text>
      {type === 'FOUNDS_OUT' ? (
        <Text style={styles.amountNegative}>-{amountFormatted}</Text>
      ) : (
        <Text style={styles.amount}>{amountFormatted}</Text>
      )}
    </View>
  );
};

export default ItemMov;
