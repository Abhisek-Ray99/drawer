import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

import { MONTSERRAT } from '../../constants/fonts';
import { colors } from '../../constants/colors';

const AppText = ({
    children,
    fontWeight = 400,
    style,
    fontfamily="san-serif",
    size,
    ...other
}) => {
  return (
    <Text
        style={[styles.text, {fontFamily: fontfamily, fontSize: size}, style]}
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