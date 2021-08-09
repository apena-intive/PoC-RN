import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useRegister } from '../../../services/hooks/useRegister';
import { styles } from './styles';
import InputText from '../../../components/InputText';
import { RegisterSchema } from '../../../validation/FormSchemas';
import FlexButton from '../../../components/Buttons';
import Colors from '../../../constants/Colors';
import DatePicker from '../../../components/DatePicker';
import OptionSelect from '../../../components/OptionSelect';
import { GENDERS_OPTIONS } from '../../../constants/Genders';
import Loader from '../../shared/Loader';

const RegisterScreen = () => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      surname: '',
      birthDate: '',
      gender: '',
    },
    resolver: yupResolver(RegisterSchema),
  });

  const { handleSubmit, getValues } = methods;

  const { exec, loading, error } = useRegister(getValues);

  return !loading ? (
    <View style={styles.container}>
      <Text style={styles.error}>{error.message}</Text>
      <FormProvider {...methods}>
        <ScrollView style={styles.form}>
          <View style={styles.secondaryView}>
            <Text style={styles.subtitle}>Account Information</Text>
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
            <InputText
              name="passwordConfirmation"
              placeholder="Confirm password"
              label="Confirm Password"
              required
              isPassword
            />
          </View>
          <View style={styles.secondaryView}>
            <Text style={styles.subtitle}>Personal Information</Text>
            <InputText name="name" label="Name" placeholder="John" required />
            <InputText
              name="surname"
              label="Surname"
              placeholder="Smith"
              required
            />

            <DatePicker name="birthDate" label="BirthDate" />
            <OptionSelect
              name="gender"
              label="Gender"
              options={GENDERS_OPTIONS}
            />
          </View>
        </ScrollView>
        <View style={styles.form}>
          <FlexButton
            color={Colors.primary}
            text="Register"
            onPress={handleSubmit(exec)}
          />
        </View>
      </FormProvider>
    </View>
  ) : (
    <Loader />
  );
};

export default RegisterScreen;
