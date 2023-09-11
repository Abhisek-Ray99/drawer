import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../../utils/Dimension'
import { colors } from '../../constants/colors'

const Divider = ({

}) => {
  return (
    <View style={styles.divider}/>
  )
}

export default Divider

const styles = StyleSheet.create({
    divider:{
        width: windowWidth,
        height: 1,
        backgroundColor: colors.grey400
    }
})