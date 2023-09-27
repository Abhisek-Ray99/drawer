import { View } from 'react-native'
import React, {memo} from 'react'
import { styles } from './customers.styles'
import CustomHeader from '../../components/view/CustomHeader'

const Customers = () => {
  return (
    <View style={styles.customercontainer}>
      <CustomHeader/>
    </View>
  )
}

export default memo(Customers)