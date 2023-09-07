import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import PurSaleView from '../../../components/view/PurSaleView'
import { colors } from '../../../constants/colors'

const SaleView = () => {
  return (
      <PurSaleView bgColor={colors.pastelpink} BtnTitle="View sale" img={require('../../../assets/img/outline-mobile-bank.png')} />
  )
}

export default memo(SaleView)

const styles = StyleSheet.create({})