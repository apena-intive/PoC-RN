/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import firebase from 'firebase/app';

import { useCloudFunction } from './useCloudFunction';
import { useAppContext } from '../../context';
import { SERVICE_NAMES, TYPE } from '../../constants/Constants';

export const useRegister = (getValues) => {
  const { dispatch } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSuccess = () => {
    const values = getValues();
    const payload = {
      ...values,
      avatar: '',
    };
    dispatch({ type: TYPE.USER_SIGN_IN, payload });
    setLoading(false);
  };

  const { data, ...fnMethods } = useCloudFunction(
    SERVICE_NAMES.USER_CREATE,
    onSuccess,
  );

  const handler = async (params) => {
    try {
      setLoading(true);

      await firebase
        .auth()
        .createUserWithEmailAndPassword(params.email, params.password);

      fnMethods.exec(params);
    } catch (err) {
      setError(err);
    }
  };

  const allLoading = loading || fnMethods.loading;
  const allError = error || fnMethods.error;

  return {
    loading: allLoading,
    error: allError,
    data,
    exec: handler,
  };
};
