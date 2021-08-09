/* eslint-disable react/display-name */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text, View } from 'react-native';

import LoginScreen from '../../screens/OnboardingScreens/LoginScreen';
import RegisterScreen from '../../screens/OnboardingScreens/RegisterScreen';
import Onboarding from '../../screens/OnboardingScreens';
import Logo from '../../../assets/adaptive-icon.png';
import { styles } from './styles';

const Stack = createStackNavigator();

const OnboardingNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Onboarding"
      component={Onboarding}
      //     options={{ headerShown: false }}
      options={{ title: 'My Wallet' }}
    />
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{
        headerTitle: () => (
          <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{
        headerTitle: () => (
          <View style={styles.container}>
            <Text style={styles.text}>Register</Text>
            <Image style={styles.image} source={Logo} resizeMode="contain" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);
export default OnboardingNavigation;
