import { StyleSheet, Pressable, View } from 'react-native'
import React, {memo} from 'react'
import AppText from '../text/AppText'
import { colors } from '../../constants/colors'

const TextBtn = ({
    bg=false,
    leftImg=null,
    leftIcon=null,
    TextTitle,
    rightIcon=null,
    TextStyle,
    onPress,
    style,
    viewStyle
}) => {
  return (
    <View style={[styles.container,{ backgroundColor: bg ? colors.grey2000 : null}, viewStyle]}>
        <Pressable 
            android_ripple={{color: colors.grey1900, borderless: false}}
            style={[styles.TextBtnView, style]}
            onPress={onPress}
        >
            {leftIcon}
            {leftImg}
            <AppText style={[styles.TextBtnText, TextStyle]}>{TextTitle}</AppText>
            <View style={styles.righticon}>
                {rightIcon}
            </View>
        </Pressable>
    </View>
  )
}

export default memo(TextBtn)

const styles = StyleSheet.create({
    container:{
        overflow: 'hidden'
    },
    TextBtnView:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    TextBtnText:{
        fontSize: 16,
        paddingHorizontal: 20
    },
    righticon:{
        position: 'absolute',
        right: 10
    }
})