import { StyleSheet, Pressable, ActivityIndicator, } from 'react-native'
import React, {memo} from 'react'

import AppText from '../text/AppText'
import { colors } from '../../constants/colors'

const AppBtn = ({
    title,
    titleStyle,
    BtnStyle,
    color = 'primary',
    leftIcon = null,
    rightIcon = null,
    isLoading = false,
    disabled,
    onPress
}) => {
  return (
    <Pressable
        style={[
        styles.button,
        {backgroundColor: colors[disabled ? 'grey300' : color]},
        BtnStyle,
      ]}
        onPress={onPress}
    >
        {leftIcon}
        {isLoading && <ActivityIndicator color={colors.white} />}
        <AppText
            fontWeight={'700'}
            style={[styles.text, titleStyle]}
        >
            {title}
        </AppText>
        {rightIcon}
    </Pressable>
  )
}

export default memo(AppBtn)

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        height: 50,
        gap: 10,
    },
    text:{
        color: colors.white,
        textAlign: 'center'
    }
})