import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import AppText from '../text/AppText'
import { colors } from '../../constants/colors'
import { windowHeight, windowWidth } from '../../utils/Dimension'

const ImgBtn = ({
    onPress,
    Title,
    disabled,
    leftIcon,
    height= windowHeight/14,
    width= windowWidth/1.14,
    style
}) => {
  return (
    <Pressable
        onPress={disabled ? null :onPress}
    >
        <View style={[{opacity: disabled ? 0.4 : 1}]}>
            <Image
            style={[{width: width, height: height},styles.img, style]}
            source={require('../../assets/img/mesh-51.png')}
            />
            <View style={styles.textview}>
                {leftIcon}
                <AppText style={styles.text}>{Title}</AppText>
            </View>
        </View>
    </Pressable>
  )
}

export default ImgBtn

const styles = StyleSheet.create({
    img:{
        borderRadius: 15,
    },
    text:{
        color: colors.white,
        fontSize: 18,
        fontWeight: '700',
    },
    textview:{
        position: 'absolute', 
        flexDirection: 'row',
        alignItems: 'center',
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 12, 
        justifyContent: 'center', 
        alignItems: 'center',
        gap: 10,
        paddingTop: 10
    }
})