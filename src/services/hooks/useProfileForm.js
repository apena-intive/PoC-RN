import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { SERVICE_NAMES, SCREEN_NAMES, TYPE } from '../../constants/Constants';
import { useCloudFunction } from './useCloudFunction';
import { useAppContext } from '../../context';

export const useProfileForm = () => {
  const { navigate } = useNavigation();
  const { dispatch } = useAppContext();
  const [values, setValues] = useState();

  const onError = () =>
    navigate(SCREEN_NAMES.ERROR_SUCCESS, {
      isError: true,
      message: "We can't update your profile now",
    });

  const { data, error, loading, exec } = useCloudFunction(
    SERVICE_NAMES.USER_UPDATE,
    undefined,
    onError,
  );

  useEffect(() => {
    if (data && values && !loading) {
      dispatch({ type: TYPE.USER_UPDATE, payload: values });
      navigate(SCREEN_NAMES.ERROR_SUCCESS, {
        isError: false,
        message: 'Your profile was successfully updated',
      });
    }
  }, [values, data, loading]);

  const handleExec = (args) => {
    exec(args);
    setValues(args);
  };

  return {
    loading,
    error,
    data,
    handleExec,
  };
};
