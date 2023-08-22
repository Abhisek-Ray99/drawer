import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

import { MONTSERRAT } from '../../constants/fonts';
import { colors } from '../../constants/colors';

const AppText = ({
    children,
    fontWeight = 400,
    style,
    ...other
}) => {
  return (
    <Text
        style={[styles.text, {fontFamily: MONTSERRAT[fontWeight]}, style]}
        {...other}
    >{children}</Text>
  )
}

export default memo(AppText)

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: colors.black
  },
})