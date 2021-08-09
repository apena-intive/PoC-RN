import React from 'react';
import { Alert } from 'react-native';

import { useDeposit } from '../../hooks/useDeposit';
import PasswordComponent from '../../../shared/PasswordComponent';

const PasswordDeposits = ({ route }) => {
  const { exec, loading } = useDeposit();

  const onSuccess = () => {
    exec(route.params.dataDeposit);
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

export default PasswordDeposits;
