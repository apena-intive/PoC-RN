/* eslint-disable no-extra-boolean-cast */
/* eslint-disable global-require */
import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import FlexButton from '../../../components/Buttons/FlexButton';
import Colors from '../../../constants/Colors';
import { styles } from './styles';

const ErrorSuccess = ({ route, navigation }) => {
  const { isError, message } = route.params;

  const onPress = () => navigation.popToTop();

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        source={
          !isError
            ? require('../../../../assets/success.json')
            : require('../../../../assets/error.json')
        }
        autoPlay
        loop={false}
      />
      <Text style={styles.text}>{message}</Text>
      <View style={styles.button}>
        <FlexButton text="Go back" color={Colors.primary} onPress={onPress} />
      </View>
    </View>
  );
};
export default ErrorSuccess;
