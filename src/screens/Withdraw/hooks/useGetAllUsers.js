import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { SCREEN_NAMES, SERVICE_NAMES } from '../../../constants/Constants';
import { useCloudFunction } from '../../../services/hooks/useCloudFunction';

export const useGetAllUsers = () => {
  const { navigate } = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onSuccess = (result) => {
    const formatedUsers = result.map((us) => ({
      label: `${us.name} ${us.surname}`,
      id: us.uid,
      value: us,
    }));
    setData(formatedUsers);
    setIsLoading(false);
  };

  const onError = () => {
    navigate(SCREEN_NAMES.ERROR_SUCCESS, {
      isError: true,
      message: 'Error loading data. Please try again',
    });
    setIsLoading(false);
  };

  const { loading, exec } = useCloudFunction(
    SERVICE_NAMES.USER_GET_ALL,
    onSuccess,
    onError,
  );

  useEffect(() => {
    exec();
  }, []);

  return {
    loading: loading || isLoading,
    data,
  };
};
