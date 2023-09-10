import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import Animated from 'react-native-reanimated'
import { colors } from '../../constants/colors'

const Purchase = () => {
  return (
    <Animated.View  style={{ backgroundColor: colors.paleblue, flex: 1 }}>
      
      <Text>Purchase</Text>
    </Animated.View>
  )
}

export default memo(Purchase)

const styles = StyleSheet.create({})