import { View } from 'react-native'
import React, {memo} from 'react'

import { styles } from './customers.styles'
import DetailsHeader from '../../components/view/DetailsHeader'
import { rename, simplistic_mobile_bank } from '../../constants/Images'
import { colors } from '../../constants/colors'

const Customers = ({}) => {
  return (
    <View style={styles.customercontainer}>
      <DetailsHeader
        bgColor={colors.customer}
        headerTitle={"Customers"}
        img={simplistic_mobile_bank}
        contentIcon={rename}
      />
    </View>
  )
}

export default memo(Customers)