import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../constants/colors'
import AppText from '../../../components/text/AppText'

const Summary = () => {
  return (
    <View>
      <Ionicons name="layers" size={24} color={colors.grey1900} />
      <AppText>Inventory Summary</AppText>
      <View>
        <View>
            
        </View>
      </View>
    </View>
  )
}

export default memo(Summary)

const styles = StyleSheet.create({})