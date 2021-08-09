import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

import profilePic from '../../../assets/profile-placeholder.png';

import { styles } from './styles';
import { useImageUploader } from './useImgUploader';

import loadingDots from '../../../assets/loadingDots.json';

const ProfilePic = () => {
  const { handler, image, loading } = useImageUploader();

  return (
    <View>
      <TouchableOpacity
        onPress={handler}
        style={styles.images}
        disabled={loading}>
        {loading ? (
          <LottieView
            style={styles.animation}
            source={loadingDots}
            autoPlay
            loop
          />
        ) : (
          <Image
            source={image || profilePic}
            style={styles.images}
            testID="testid-profile-image"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePic;
