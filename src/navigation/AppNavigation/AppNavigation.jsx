/* eslint-disable react/display-name */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../../screens/HomeScreen';
import ProfileCardScreen from '../../screens/ProfileScreen/ProfileCardScreen';
import ProfileFormScreen from '../../screens/ProfileScreen/ProfileFormScreen';
import Withdraw from '../../screens/Withdraw';
import Deposits from '../../screens/Deposits';
import ErrorSuccess from '../../screens/shared/ErrorSuccess';
import PasswordWithdraw from '../../screens/Withdraw/components/PasswordWithdraw';
import PasswordDeposits from '../../screens/Deposits/components/PasswordDeposits';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const WithdrawStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeNavigation = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Deposits" component={Deposits} />
    <HomeStack.Screen
      name="PasswordDeposits"
      component={PasswordDeposits}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="ErrorSuccess"
      component={ErrorSuccess}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);

const WithdrawNavigation = () => (
  <WithdrawStack.Navigator>
    <WithdrawStack.Screen name="Withdraw" component={Withdraw} />
    <WithdrawStack.Screen
      name="PasswordWithdraw"
      component={PasswordWithdraw}
      options={{ headerShown: false }}
    />
    <WithdrawStack.Screen
      name="ErrorSuccess"
      component={ErrorSuccess}
      options={{ headerShown: false }}
    />
  </WithdrawStack.Navigator>
);

const ProfileNavigation = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileCardScreen} />
    <ProfileStack.Screen name="ProfileForm" component={ProfileFormScreen} />
    <ProfileStack.Screen
      name="ErrorSuccess"
      component={ErrorSuccess}
      options={{ headerShown: false }}
    />
  </ProfileStack.Navigator>
);

const AppNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      keyboardHidesTabBar: true,
    }}>
    <Tab.Screen
      name="Home"
      component={HomeNavigation}
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => (
          <Ionicons name="home" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Withdraw"
      component={WithdrawNavigation}
      options={{
        title: 'Withdraw',
        tabBarIcon: ({ color }) => (
          <Ionicons name="wallet" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileNavigation}
      options={{
        title: 'Profile',
        tabBarIcon: ({ color }) => (
          <Ionicons name="person-circle-outline" size={24} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigation;
