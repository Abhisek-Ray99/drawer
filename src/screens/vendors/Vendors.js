import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import CustomHeader from '../../components/view/CustomHeader'
import {styles} from './vendors.styles'

const Vendors = () => {
  return (
    <View style={styles.customercontainer}>
      <CustomHeader/>
    </View>
  )
}

export default memo(Vendors)