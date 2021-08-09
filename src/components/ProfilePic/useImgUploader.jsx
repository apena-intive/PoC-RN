import { useState } from 'react';
import { Alert } from 'react-native';
import * as firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import { useFormContext } from 'react-hook-form';
import { useAppContext } from '../../context/ContextProvider';

export const useImageUploader = () => {
  const {
    state: { user },
  } = useAppContext();
  const { setValue, setError } = useFormContext();
  const [image, setImage] = useState(user.avatar ? { uri: user.avatar } : null);
  const [loading, setLoading] = useState(false);

  const handler = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission to access is required');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    const uploadImage = async (uri) => {
      setLoading(true);
      const response = await fetch(uri);
      const blob = await response.blob();

      const ref = firebase.storage().ref().child(`images/${user.uid}`);
      const snapshot = await ref.put(blob);
      const remoteURL = await snapshot.ref.getDownloadURL();
      return remoteURL;
    };

    if (pickerResult.cancelled === true) {
      return;
    }

    setImage({ uri: pickerResult.uri });
    uploadImage(pickerResult.uri)
      .then((response) => {
        setValue('avatar', response);
      })
      .catch((error) => {
        setError('avatar', { types: 'manual', message: 'Retry' });

        console.log(`Fail${error}`);
      })
      .finally(() => setLoading(false));
  };

  return { image, handler, loading };
};
