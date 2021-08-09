import React from 'react';
import { View, Image } from 'react-native';
import logo from '../../../assets/adaptive-icon.png';
import FlexButton from '../../components/Buttons';
import Colors from '../../constants/Colors';
import { SCREEN_NAMES } from '../../constants/Constants';
import { styles } from './styles';

const OnboardingScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.mainView}>
      <Image source={logo} style={styles.images} />
    </View>
    <View style={styles.bottomView}>
      <FlexButton
        color={Colors.primary}
        text="Login"
        onPress={() => navigation.navigate(SCREEN_NAMES.LOGIN)}
      />
      <FlexButton
        color={Colors.secondary}
        text="Register"
        onPress={() => navigation.navigate(SCREEN_NAMES.REGISTER)}
      />
    </View>
  </View>
);

export default OnboardingScreen;
