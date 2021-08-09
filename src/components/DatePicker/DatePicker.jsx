/* eslint-disable no-self-compare */
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { View, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

// quedan los OR ya que si o si lo necesitamos setear.

const getDateFromValue = (value) => {
  const date = new Date(value);
  if (date.getTime() === date.getTime()) {
    return date;
  }
  return new Date();
};

const DatePicker = ({ name, label, disabled }) => {
  const [show, setShow] = useState(false);
  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <Controller
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const onChangeHandler = (event, selectedDate) => {
          const currentDate = selectedDate || value;
          setShow(false);
          onChange(currentDate);
        };

        return (
          <View>
            <View>
              <Text style={styles.label}>{label}</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.datelabel}
                onPress={showDatepicker}
                testID="testid-calendar"
                disabled={disabled}>
                <View style={styles.input}>
                  <Text style={styles.pickedDate}>
                    {value ? new Date(value).toDateString() : 'Select a date'}
                  </Text>
                </View>
                <Ionicons
                  style={styles.icon}
                  name="calendar"
                  size={24}
                  color="#555"
                />
              </TouchableOpacity>
              {error && <Text style={styles.error}>{error.message}</Text>}
              {show && (
                <DateTimePicker
                  value={getDateFromValue(value)}
                  testID="testid-datetimepicker"
                  mode="date"
                  display="default"
                  onChange={onChangeHandler}
                />
              )}
            </View>
          </View>
        );
      }}
    />
  );
};
export default DatePicker;
