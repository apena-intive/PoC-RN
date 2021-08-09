import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { usePassword } from '../../../services/hooks/usePassword';
import { PasswordSchema } from '../../../validation/FormSchemas';
import useBiometricSettings from '../../../services/hooks/useBiometricSettings';
import InputText from '../../../components/InputText';
import FlexButton from '../../../components/Buttons';
import Colors from '../../../constants/Colors';
import { styles } from './styles';

const PasswordComponent = ({ onSuccess, onError, loading }) => {
  const { isBiometricSupported, isBiometricSaved } = useBiometricSettings(
    onSuccess,
    onError,
  );

  const methods = useForm({
    defaultValues: { password: '' },
    resolver: yupResolver(PasswordSchema),
  });

  const { handleSubmit, reset } = methods;
  const { onSubmit } = usePassword(reset, onError, onSuccess);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Security confirmation, please enter your password to continue with the
        operation
      </Text>
      <FormProvider {...methods}>
        <View style={styles.form}>
          <ScrollView style={styles.secondaryView}>
            <InputText
              name="password"
              placeholder="Enter password"
              label="Password"
              required
              isPassword
            />
          </ScrollView>
        </View>
        {isBiometricSupported && !isBiometricSaved && (
          <View>
            <Text style={styles.biometricText}>
              We notice that you have not activated biometrics on your device.
              If you want to use biometrics in the app, you must activate
              biometrics on your device first or you can continue with the
              password verification
            </Text>
          </View>
        )}
        <View style={styles.button}>
          <FlexButton
            color={Colors.primary}
            text="Continue"
            isLoading={loading}
            disabled={loading}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </FormProvider>
    </View>
  );
};

export default PasswordComponent;
