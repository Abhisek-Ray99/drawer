import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppText from '../text/AppText';
import { windowHeight, windowWidth } from '../../utils/Dimension';

const AppGradientBtn = ({
  title,
  height = windowHeight / 18,
  width = windowWidth / 3,
  borderRadius= 10,
  colors = ['#16222A', '#3A6073', '#16222A'],
  fontfamily="NotoSans-Bold",
}) => {
  return (
    <LinearGradient
        style={[styles.gradientBackground, {height: height, width: width, borderRadius: borderRadius}]}
        colors={colors}
        start={{ x: 0.5, y: 0.3 }}
        end={{ x: 1, y: 0.5 }}
        locations={[0, 0.61, 1]}
    >
        <AppText style={[styles.buttonText, {fontFamily: fontfamily}]}>{title}</AppText>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default AppGradientBtn;
