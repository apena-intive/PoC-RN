import React from 'react';
import { Text, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { Controller } from 'react-hook-form';

import { styles } from './styles';

const InputCurrency = ({
  name,
  required,
  placeholder,
  keyboardType,
  prefix,
  delimiter,
  separator,
  precision,
  minValue,
}) => (
  <Controller
    name={name}
    rules={{ required }}
    render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
      <View>
        <CurrencyInput
          {...rest}
          style={styles.input}
          onChangeValue={(e) => onChange(e)}
          placeholder={placeholder}
          keyboardType={keyboardType}
          prefix={prefix}
          delimiter={delimiter}
          separator={separator}
          precision={precision}
          minValue={minValue}
        />
        {error && <Text style={styles.error}>{error.message}</Text>}
      </View>
    )}
  />
);

export default InputCurrency;
