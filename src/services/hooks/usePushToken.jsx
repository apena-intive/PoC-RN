/* eslint-disable prefer-destructuring */
import * as Notifications from 'expo-notifications';
import firebase from 'firebase/app';
import 'firebase/auth';

export const usePushToken = () => {
  const registerForPushNotifications = async () => {
    const { status: lastStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = lastStatus;

    if (lastStatus !== 'granted') {
      // eslint-disable-next-line no-shadow
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);

    const uid = firebase.auth().currentUser.uid;
    await firebase
      .database()
      .ref('users')
      .child(uid)
      .update({ expoPushToken: token });
  };
  registerForPushNotifications();
};
