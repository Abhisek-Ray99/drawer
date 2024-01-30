import { StyleSheet, Text, Pressable } from 'react-native'
import React, {memo} from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { windowHeight } from '../../../utils/Dimension'
import { colors } from '../../../constants/colors'

const Button = ({name, IconName, ...other}) => {
  return (
    <Pressable 
        android_ripple={{color: colors.grey1900, borderless: false}}
        style={styles.btn} 
        {...other}
    >
        <Text style={styles.btnText}>{name}</Text>
        <MaterialCommunityIcons style={styles.btnIcon} name={IconName} size={24}/>
    </Pressable>
  )
}

export default memo(Button)

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