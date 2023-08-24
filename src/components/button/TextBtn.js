import { StyleSheet, Pressable } from 'react-native'
import React, {memo} from 'react'
import AppText from '../text/AppText'
import { colors } from '../../constants/colors'

const TextBtn = ({
    leftIcon=null,
    TextTitle,
    rightIcon=null,
    TextStyle,
    onPress
}) => {
  return (
    <Pressable 
        android_ripple={{color: colors.grey1900, borderless: false}}
        style={styles.TextBtnView}
        onPress={onPress}
    >
        {leftIcon}
        <AppText style={[styles.TextBtnText, TextStyle]}>{TextTitle}</AppText>
        {rightIcon}
    </Pressable>
  )
}

export default memo(TextBtn)

const styles = StyleSheet.create({
    TextBtnView:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    TextBtnText:{
        fontSize: 16,
        marginLeft: 16
    }
})