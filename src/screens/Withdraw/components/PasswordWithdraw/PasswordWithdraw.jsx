import React from 'react';
import { Alert } from 'react-native';

import { useWithdraw } from '../../hooks';
import PasswordComponent from '../../../shared/PasswordComponent';

const PasswordWithdraw = ({ route }) => {
  const { handleExec, loading } = useWithdraw();

  const onSuccess = () => {
    handleExec(route.params.dataTransfer);
  };

  const onError = () => {
    Alert.alert(
      'Incorrect Password',
      'The password you entered is incorrect. Please try again',
    );
  };

  return (
    <PasswordComponent
      loading={loading}
      onSuccess={onSuccess}
      onError={onError}
    />
  );
};

export default PasswordWithdraw;
