import { View } from 'react-native'
import React, {memo} from 'react'

import {styles} from './vendors.styles'
import DetailsHeader from '../../components/view/DetailsHeader'
import { rename, simplistic_mobile_bank } from '../../constants/Images'
import { colors } from '../../constants/colors'

const Vendors = () => {
  return (
    <View style={styles.vendorcontainer}>
      <DetailsHeader
        bgColor={colors.vendor}
        headerTitle={"Vendors"}
        img={simplistic_mobile_bank}
        contentIcon={rename}
      />
    </View>
  )
}

export default memo(Vendors)