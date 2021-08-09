import React from 'react';
import { View, Text } from 'react-native';

import ListMovements from './components/ListMovements';
import CardBalance from './components/CardBalance';
import { styles } from './styles';
import { usePushToken } from '../../services/hooks/usePushToken';

const HomeScreen = () => {
  usePushToken();
  return (
    <View style={styles.container}>
      <CardBalance />
      <Text style={styles.title}>Last transactions</Text>
      <ListMovements />
    </View>
  );
};
export default HomeScreen;
