/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

import { REGION } from '../../constants/Constants';

export const useCloudFunction = (
  fnName,
  successHandler,
  errorHandler,
  shouldSendNotification = false,
) => {
  const [shouldExecute, setShouldExecute] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState();
  const [params, setParams] = useState();

  const handler = async () => {
    try {
      setLoading(true);

      const { data: result } = await firebase
        .app()
        .functions(REGION)
        .httpsCallable(fnName)(params);
      if (result.haveError) {
        throw new Error(result.message);
      }
      setData(result.data);
      if (shouldSendNotification) {
        try {
          const dbResult = await firebase
            .database()
            .ref('users')
            .child(params.receiverData.uid)
            .get();
          if (dbResult.exists()) {
            const { expoPushToken } = dbResult.val();
            const message = {
              to: expoPushToken,
              sound: 'default',
              title: 'You recived money!',
              body: `${params.senderData.name} ${params.senderData.surname} sent you a new tranfer`,
            };

            await fetch('https://exp.host/--/api/v2/push/send', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(message),
            });
          }
        } catch (err) {
          console.log('>>>>>>err', err);
        }
      }
      if (successHandler) successHandler(result.data);
    } catch (err) {
      setError(err);
      console.log(err);
      if (errorHandler) errorHandler(err);
      // hacer utils para parsear el mensaje a algo legible para usuario
    } finally {
      setLoading(false);
      setShouldExecute(false);
    }
  };

  useEffect(() => {
    if (shouldExecute) {
      handler();
    }
  }, [shouldExecute]);

  const exec = (args) => {
    setParams(args);
    setShouldExecute(true);
  };

  return {
    loading,
    error,
    data,
    exec,
  };
};
