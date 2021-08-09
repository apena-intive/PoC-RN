/* eslint-disable no-extra-boolean-cast */
/* eslint-disable global-require */
import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import { styles } from './styles';

const Loader = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Loading...</Text>
    <LottieView
      style={styles.animation}
      source={require('../../../../assets/loading.json')}
      autoPlay
      loop
    />
  </View>
);

export default Loader;
