import { useEffect } from 'react';
import { SERVICE_NAMES } from '../../constants/Constants';
import { useCloudFunction } from './useCloudFunction';

export const useProfileInfo = () => {
  const { data, error, loading, exec } = useCloudFunction(
    SERVICE_NAMES.USER_GET_ONE,
  );

  useEffect(() => {
    exec();
  }, []);

  return {
    loading,
    error,
    data,
  };
};
