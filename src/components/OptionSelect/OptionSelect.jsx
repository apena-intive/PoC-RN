/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Controller } from 'react-hook-form';
import { View, Text, Button } from 'react-native';
import { Picker as SelectPicker } from '@react-native-picker/picker';

import { styles } from './styles';
import Colors from '../../constants/Colors';

const OptionSelect = ({ name, label, disabled, options }) => {
  const optionsWithDefault = [
    {
      id: 0,
      label: 'Select an option',
      value: undefined,
      color: '#aaa',
    },
    ...options,
  ];
  return (
    <Controller
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View>
          {label && <Text style={styles.label}>{label}</Text>}
          <SelectPicker
            mode="dropdown"
            testID="testid-select"
            selectedValue={value}
            onValueChange={onChange}
            disabled={disabled}>
            {optionsWithDefault.map((option, idx) => (
              <SelectPicker.Item
                label={option.label}
                value={option.value}
                key={option.id}
                color={
                  error && error.message && idx === 0
                    ? Colors.error
                    : option.color
                }
              />
            ))}
          </SelectPicker>
          {error && <Text style={styles.error}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default OptionSelect;
