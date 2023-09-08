import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import PurSaleView from '../../../components/view/PurSaleView'
import { colors } from '../../../constants/colors'

const PurchaseView = ({
  onPress
}) => {
  return (
      <PurSaleView bgColor={colors.paleblue} BtnTitle="View purchase" img={require('../../../assets/img/simplistic-mobile-bank.png')} onPress={onPress}  />
  )
}

export default memo(PurchaseView)

const styles = StyleSheet.create({})