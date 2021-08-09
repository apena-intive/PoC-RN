/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { View, ScrollView } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { styles } from './styles';
import { useAppContext } from '../../../context';
import InputText from '../../../components/InputText';
import { ProfileSchema } from '../../../validation/FormSchemas';
import FlexButton from '../../../components/Buttons';
import Colors from '../../../constants/Colors';
import DatePicker from '../../../components/DatePicker';
import OptionSelect from '../../../components/OptionSelect';
import ProfilePic from '../../../components/ProfilePic';
import { GENDERS_OPTIONS } from '../../../constants/Genders';
import { useProfileForm } from '../../../services/hooks/useProfileForm';
import Spinner from '../../../components/Spinner';

const ProfileScreen = () => {
  //  const currentUser = users.find((user) => user.id === userLogged);
  const {
    state: { user },
  } = useAppContext();

  const { handleExec, loading } = useProfileForm();
  const methods = useForm({
    defaultValues: {
      email: user.email,
      name: user.name,
      surname: user.surname,
      birthDate: user.birthDate,
      gender: user.gender,
      avatar: user.avatar,
    },
    resolver: yupResolver(ProfileSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  console.log(errors);

  return (
    <View style={styles.container}>
      <FormProvider {...methods}>
        <ScrollView style={styles.form}>
          <ProfilePic label="Profile Image" />
          <InputText
            name="email"
            placeholder="example@gmail.com"
            label="Email"
            required
            disabled
            editable={false}
          />
          <InputText name="name" label="Name" placeholder="Example" required />
          <InputText
            name="surname"
            label="Surname"
            placeholder="Example"
            required
          />
          <DatePicker name="birthDate" label="Birthdate" />
          <OptionSelect
            name="gender"
            label="Gender"
            options={GENDERS_OPTIONS}
          />
        </ScrollView>
        <View style={styles.form}>
          <FlexButton
            color={Colors.primary}
            text={loading ? <Spinner color={Colors.white} /> : 'Update Profile'}
            disabled={loading}
            onPress={handleSubmit(handleExec)}
          />
        </View>
      </FormProvider>
    </View>
  );
};

export default ProfileScreen;
