import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import CustomHeader from '../../components/view/CustomHeader'
import { styles } from './sales.styles'

const Sales = () => {
  return (
    <View style={styles.salescontainer}>
      <CustomHeader/>
    </View>
  )
}

export default memo(Sales)