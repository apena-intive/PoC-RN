/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import { Alert } from 'react-native';

const useBiometricSettings = (onSuccess, onError) => {
  const [isBiometricSupported, setIsBiometricSupported] = useState();
  const [isBiometricSaved, setIsBiometricSaved] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        setIsBiometricSupported(compatible);

        const isEnrolledAuth = await LocalAuthentication.isEnrolledAsync();
        setIsBiometricSaved(isEnrolledAuth);

        if (!isEnrolledAuth && compatible) {
          Alert.alert(
            'Enable Biometric is available on this device. To enable:',
            '1.Open Device Settings\n2.Open Security menu options\n3.Register your biometric identity\n4.Come back and enjoy it',
          );
        }

        if (compatible && isEnrolledAuth) {
          const biometricAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Verify your identity to continue',
            cancelLabel: 'Cancel',
            disableDeviceFallback: true,
          });
          if (biometricAuth.success) {
            onSuccess();
          }
        }
      } catch (err) {
        onError();
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isBiometricSupported,
    isBiometricSaved,
    isLoading,
  };
};

export default useBiometricSettings;
