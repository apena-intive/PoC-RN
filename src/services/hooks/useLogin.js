/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import firebase from 'firebase/app';

import { useAppContext } from '../../context';
import { SERVICE_NAMES, TYPE } from '../../constants/Constants';
import { useCloudFunction } from './useCloudFunction';

export const useLogin = () => {
  const { dispatch } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSuccess = (data) => {
    dispatch({ type: TYPE.USER_SIGN_IN, payload: data });
    setLoading(false);
  };

  const { exec } = useCloudFunction(SERVICE_NAMES.USER_GET_ONE, onSuccess);
  const handler = async (data) => {
    try {
      setLoading(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);

      exec();
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return {
    handler,
    loading,
    error,
  };
};
