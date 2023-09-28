import { StyleSheet, Pressable } from 'react-native'
import React, {memo} from 'react'
import AppText from './AppText'

import { colors } from '../../constants/colors'
import { NotoSans } from '../../constants/fonts'

const TextLink = ({
    title,
    onPress,
    titleStyle,
    lefticon,
}) => {
  return (
    <Pressable
        onPress={onPress}
        style={styles.container}
    >
        <AppText
            style={[styles.color, titleStyle]}
        >
            {title}
        </AppText>
        {lefticon}
    </Pressable>
  )
}

export default memo(TextLink)

const styles = StyleSheet.create({
    color: {
        color: colors.primary ,
        fontFamily: NotoSans['700']
    },
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    }
})