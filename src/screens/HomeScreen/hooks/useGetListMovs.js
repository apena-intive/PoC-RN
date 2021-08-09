import { useEffect } from 'react';

import { SERVICE_NAMES, TYPE } from '../../../constants/Constants';
import { useAppContext } from '../../../context';
import { useCloudFunction } from '../../../services/hooks/useCloudFunction';

export const useGetListMovs = () => {
  const {
    dispatch,
    state: { transactions },
  } = useAppContext();

  const onSuccess = (result) => {
    const formatedData = result.map((mov) => ({
      description: `${mov.foreingData.name} ${mov.foreingData.surname}`,
      docID: mov.docID,
      amount: mov.amount,
      date: mov.date,
      type: mov.type,
    }));
    dispatch({
      type: TYPE.LIST_TRANSACTIONS,
      payload: { transactions: formatedData },
    });
  };

  const { loading, exec } = useCloudFunction(
    SERVICE_NAMES.TRANSACTIONS_GET_PAGINATED,
    onSuccess,
  );

  const handlerGetMore = (docID) => {
    exec({ docID });
  };

  useEffect(() => {
    if (transactions.length === 0) {
      exec({});
    }
  }, []);

  return {
    loading,
    handlerGetMore,
  };
};
