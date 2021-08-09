/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { styles } from './styles';
import splash from '../../../../assets/splash.png';
import InputText from '../../../components/InputText';
import { LoginSchema } from '../../../validation/FormSchemas';
import FlexButton from '../../../components/Buttons';
import Colors from '../../../constants/Colors';
import Loader from '../../shared/Loader';
import { useLogin } from '../../../services/hooks/useLogin';
import { SCREEN_NAMES } from '../../../constants/Constants';

const LoginScreen = ({ navigation }) => {
  const { handler, error, loading } = useLogin();

  const handlePress = () => navigation.navigate(SCREEN_NAMES.REGISTER);

  const methods = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(LoginSchema),
  });

  const { handleSubmit } = methods;

  return !loading ? (
    <View style={styles.container}>
      <Image source={splash} style={styles.image} />
      <Text style={styles.error}>{error.message}</Text>
      <FormProvider {...methods}>
        <View style={styles.form}>
          <ScrollView style={styles.secondaryView}>
            <InputText
              name="email"
              placeholder="example@gmail.com"
              label="Email"
              required
            />
            <InputText
              name="password"
              placeholder="Enter password"
              label="Password"
              required
              isPassword
            />
          </ScrollView>
          <FlexButton
            color={Colors.primary}
            text="Login"
            onPress={handleSubmit(handler)}
          />
          <View style={styles.link}>
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.text}>Do not have an account?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </FormProvider>
    </View>
  ) : (
    <Loader />
  );
};

export default LoginScreen;
