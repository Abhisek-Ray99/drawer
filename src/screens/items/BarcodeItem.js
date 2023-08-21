import { StyleSheet, Text, Pressable, View } from 'react-native'
import React, { memo, useLayoutEffect } from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../constants/colors'

const BarcodeItem = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
        headerLeft: () => (
          <Pressable onPress={()=> navigation.goBack()} style={styles.icon} >
            <AntDesign name="close" size={24} />
          </Pressable>
        )
    });
  }, [navigation])
  return (
    <View style={styles.barContainer}>
      
    </View>
  )
}

export default memo(BarcodeItem)

const styles = StyleSheet.create({
  barContainer:{
    flex: 1,
    backgroundColor: colors.white
  },
  icon: {
    marginLeft: 20
  }
})