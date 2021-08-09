/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import firebase from 'firebase/app';
import moment from 'moment';

import FlexButton from '../../../components/Buttons/FlexButton';
import { styles } from './styles';
import Colors from '../../../constants/Colors';
import { useAppContext } from '../../../context';
import profilePlaceholder from '../../../../assets/profile-placeholder.png';
import { SCREEN_NAMES, TYPE } from '../../../constants/Constants';

const ProfileCardScreen = ({ navigation }) => {
  const {
    state: { user },
    dispatch,
  } = useAppContext();

  const handleEdit = () => navigation.navigate(SCREEN_NAMES.PROFILE_FORM);

  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: TYPE.USER_LOGOUT }));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image
            style={styles.image}
            testID="testid-image"
            source={
              user.avatar !== '' ? { uri: user.avatar } : profilePlaceholder
            }
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Name:</Text>
          <Text style={styles.text}>
            {user.name} {user.surname}
          </Text>
          <Text style={styles.title}>Email:</Text>
          <Text style={styles.text}>{user.email}</Text>
          <Text style={styles.title}>Gender:</Text>
          <Text style={styles.text}>{user.gender}</Text>
          <Text style={styles.title}>Birthdate:</Text>
          <Text style={styles.text}>
            {moment(user.birthDate).format('MM/DD/YYYY')}
          </Text>
        </View>
      </ScrollView>
      <View>
        <FlexButton
          style={styles.button}
          color={Colors.primary}
          text="Edit Profile"
          onPress={handleEdit}
        />
        <FlexButton
          style={styles.button}
          color={Colors.secondary}
          text="Log Out"
          onPress={handleLogOut}
        />
      </View>
    </View>
  );
};

export default ProfileCardScreen;
