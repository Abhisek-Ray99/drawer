import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { windowHeight } from '../../../utils/Dimension'

const Button = ({name, IconName, ...other}) => {
  return (
    <TouchableOpacity style={styles.btn} {...other}>
        <Text style={styles.btnText}>{name}</Text>
        <MaterialCommunityIcons style={styles.btnIcon} name={IconName} size={24}/>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#000',
        height: windowHeight / 13,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row'
    },
    btnText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 16
    },
    btnIcon: {
        color: '#fff',
        left: 12
    }
})