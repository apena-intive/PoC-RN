/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Controller } from 'react-hook-form';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';

// ISSUE: Se debe llamar dentro de una ScrollView, caso contrario se colapsa el contenido.

const InputText = ({
  name,
  placeholder,
  label,
  isPassword,
  required,
  disabled,
  editable,
  keyboardType,
  onPressIn,
}) => {
  const [isSecureEntry, setSecureEntry] = useState(isPassword);

  return (
    <Controller
      name={name}
      rules={{ required }}
      render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
        <View>
          {label && <Text style={styles.label}>{label}</Text>}
          <View style={styles.mainView}>
            <TextInput
              {...rest}
              placeholder={placeholder}
              style={styles.input}
              onChangeText={(e) => onChange(e)}
              disabled={disabled}
              editable={editable}
              secureTextEntry={isSecureEntry}
              keyboardType={keyboardType}
              onPressIn={onPressIn}
            />
            {error && <Text style={styles.error}>{error.message}</Text>}
            {isPassword && (
              <View style={styles.check}>
                <TouchableOpacity onPress={() => setSecureEntry((old) => !old)}>
                  {isSecureEntry ? (
                    <FontAwesome name="eye" size={24} color="#555" />
                  ) : (
                    <FontAwesome name="eye-slash" size={24} color="#555" />
                  )}
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}
    />
  );
};
export default InputText;
