/* eslint-disable no-unused-expressions */
import firebase from 'firebase/app';

import { useAppContext } from '../../context';

export const usePassword = (reset, onError, onSuccess) => {
  const {
    state: {
      user: { email },
    },
  } = useAppContext();

  const onSubmit = async (data) => {
    try {
      const user = firebase.auth().currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(
        email,
        data.password,
      );

      await user.reauthenticateWithCredential(credential);

      onSuccess && onSuccess();
      reset();
    } catch (err) {
      onError && onError(err);
    }
  };

  return {
    onSubmit,
  };
};
