import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import AppText from '../text/AppText'
import { colors } from '../../constants/colors'

const ImgBtn = ({
    onPress,
    Title,
    disabled
}) => {
  return (
    <Pressable
        onPress={onPress}
    >
        <View style={[styles.container, {opacity: disabled ? 0.6 : 1}]}>
            <Image
            style={styles.img}
            source={require('../../assets/img/mesh-51.png')}
            />
            <View style={styles.textview}>
                <AppText style={styles.text}>{Title}</AppText>
            </View>
        </View>
    </Pressable>
  )
}

export default ImgBtn

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        borderRadius: 15,
        overflow: 'hidden'
    },
    img:{
        height: 60,
        borderRadius: 15,
    },
    text:{
        color: colors.white,
        fontSize: 18,
        fontWeight: '700',
        paddingTop: 10
    },
    textview:{
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 12, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})