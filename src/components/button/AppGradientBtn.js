import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppText from '../text/AppText';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import { NotoSans } from '../../constants/fonts';

const AppGradientBtn = ({
  title,
  height = windowHeight / 18,
  width = windowWidth / 3,
  borderRadius= 10,
  colors = ['#16222A', '#3A6073', '#16222A'],
  locations= [0, 0.61, 1],
  fontfamily=NotoSans['700'],
}) => {
  return (
    <LinearGradient
        style={[styles.gradientBackground, {height: height, width: width, borderRadius: borderRadius}]}
        colors={colors}
        start={{ x: 0.2, y: 0.3}}
        end={{ x: 0.7, y: 3 }}
        locations={locations}
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
