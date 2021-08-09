import { useNavigation } from '@react-navigation/native';

import { SCREEN_NAMES, SERVICE_NAMES } from '../../../constants/Constants';
import { useCloudFunction } from '../../../services/hooks/useCloudFunction';
import { useAppContext } from '../../../context';

export const useWithdraw = () => {
  const {
    state: { user },
  } = useAppContext();

  const { navigate } = useNavigation();

  const onSuccess = () => {
    navigate(SCREEN_NAMES.ERROR_SUCCESS, {
      isError: false,
      message: 'Succesful transaction',
    });
  };
  const onError = () => {
    navigate(SCREEN_NAMES.ERROR_SUCCESS, {
      isError: true,
      message: 'Failed transaction',
    });
  };
  const { data, error, loading, exec } = useCloudFunction(
    SERVICE_NAMES.ACCOUNT_FOUNDS_OUT,
    onSuccess,
    onError,
    true,
  );

  const handleExec = (args) => {
    const formatedArgs = {
      ...args,
      senderData: { name: user.name, surname: user.surname, uid: user.uid },
    };
    exec(formatedArgs);
  };

  return {
    loading,
    error,
    data,
    handleExec,
  };
};
