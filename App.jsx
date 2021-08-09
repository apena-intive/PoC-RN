import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';

import { ContextProvider } from './src/context';
import Root from './Root';

const firebaseConfig = {
  apiKey: 'AIzaSyBOO-yxu0LGUzsWbw10aXgSeCgwp6CVWnU',
  authDomain: 'react-native-poc-01.firebaseapp.com',
  projectId: 'react-native-poc-01',
  storageBucket: 'react-native-poc-01.appspot.com',
  messagingSenderId: '969706403233',
  appId: '1:969706403233:web:38bd5d2b5c82d77262c7e0',
};
// Firebase sets some timeers for a long period, which will trigger some warnings. Let's turn that off for this example
LogBox.ignoreLogs([`Setting a timer for a long period`]);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Indica que hacer con las notificaciones cuando la app esta en 1° plano.
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const App = () => {
  useEffect(() => {
    // Listener que se activa cuando la app esta en 1°plano
    const backgroundSubscription =
      Notifications.addNotificationResponseReceivedListener();

    // Listener para interactuar con la notificacion
    const foregroundSubscription =
      Notifications.addNotificationReceivedListener();

    return () => {
      backgroundSubscription.remove();
      foregroundSubscription.remove();
    };
  }, []);

  return (
    <NavigationContainer>
      <ContextProvider>
        <Root />
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
