import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import PurSaleView from '../../../components/view/PurSaleView'
import { colors } from '../../../constants/colors'

const PurchaseView = () => {
  return (
    <View>
      <PurSaleView bgColor={colors.paleblue} BtnTitle="View purchase" img={require('../../../assets/img/simplistic-mobile-bank.png')} />
    </View>
  )
}

export default memo(PurchaseView)

const styles = StyleSheet.create({})