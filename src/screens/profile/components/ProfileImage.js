import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../../constants/colors'

import Ionicons from 'react-native-vector-icons/Ionicons'

const ProfileImage = ({
    image=null,
    width=80,
    height=80,
    style
}) => {
  return (
    <View style={style}>
        {
            image ? (
                <Pressable>
                    <Image source={{ uri:'https://i.pravatar.cc/300'}} style={[{width: width, height: height},styles.profileimg]}/>
                </Pressable>
            ) : (
                <Pressable>
                    <View style={styles.imageview}>
                        <Ionicons name="person" size={40} color={colors.white} />
                    </View>
                </Pressable>
            )
        }
    </View>
  )
}

export default ProfileImage

const styles = StyleSheet.create({
    profileimg:{
        borderRadius: 50,
    },
    imageview:{
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: colors.profileblue,
        alignItems: 'center',
        justifyContent: 'center'
    }
})