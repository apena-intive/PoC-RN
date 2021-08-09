import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Spinner from '../Spinner';

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsText: { color: '#fff' },
});

const FullButton = ({ onPress, color, text, disabled, isLoading }) => {
  const buttonColor = {
    backgroundColor: disabled ? Colors.secondary : color,
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[buttonColor, styles.button]}
      onPress={onPress}>
      {isLoading ? (
        <Spinner color={Colors.white} />
      ) : (
        <Text style={styles.buttonsText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
export default FullButton;
