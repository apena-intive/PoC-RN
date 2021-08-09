import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size, color }) => (
  <View>
    <ActivityIndicator accessibilityHint="loading" size={size} color={color} />
  </View>
);

export default Spinner;
