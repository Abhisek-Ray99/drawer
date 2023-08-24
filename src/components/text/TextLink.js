import { StyleSheet, Pressable } from 'react-native'
import React, {memo} from 'react'
import AppText from './AppText'

import { colors } from '../../constants/colors'

const TextLink = ({
    title,
    onPress,
    titleStyle
}) => {
  return (
    <Pressable
        onPress={onPress}
    >
        <AppText
            style={[styles.color, titleStyle]}
        >
            {title}
        </AppText>
    </Pressable>
  )
}

export default memo(TextLink)

const styles = StyleSheet.create({
    color: {
        color: colors.primary 
    }
})