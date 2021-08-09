import { useNavigation } from '@react-navigation/native';

import { SCREEN_NAMES, SERVICE_NAMES } from '../../../constants/Constants';
import { useCloudFunction } from '../../../services/hooks/useCloudFunction';

export const useDeposit = () => {
  const { navigate } = useNavigation();
  const onSuccess = () =>
    navigate(SCREEN_NAMES.ERROR_SUCCESS, {
      isError: false,
      message: 'Succesful transaction',
    });
  const onError = () =>
    navigate(SCREEN_NAMES.ERROR_SUCCESS, {
      isError: true,
      message: 'Failed transaction',
    });

  const { data, error, loading, exec } = useCloudFunction(
    SERVICE_NAMES.ACCOUNT_DEPOSIT,
    onSuccess,
    onError,
  );

  return {
    loading,
    error,
    data,
    exec,
  };
};
