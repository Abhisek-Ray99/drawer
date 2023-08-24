import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'

import { windowHeight, windowWidth } from '../../../utils/Dimension'
import { colors } from '../../../constants/colors';
import ItemInputField from './ItemInputField';

const boxHeight = (windowHeight - 0 * 2)/22;
const boxWidth = (windowWidth - 0 * 2)/2.011;

const ValuesView = () => {
  return (
    <View style={styles.container}>
      <ItemInputField inputHeight={boxHeight} inputWidth={boxWidth} fieldStyle={styles.input} fieldLabel={'Quantity'} inputStyle={styles.inputfield}/>
      <ItemInputField inputHeight={boxHeight} inputWidth={boxWidth} fieldStyle={styles.input} fieldLabel={'Measure'} inputStyle={styles.inputfield} />
      <ItemInputField inputHeight={boxHeight} inputWidth={boxWidth} fieldStyle={styles.input} fieldLabel={'Price'} inputStyle={styles.inputfield} />
      <ItemInputField inputHeight={boxHeight} inputWidth={boxWidth} fieldStyle={styles.input} fieldLabel={'Quantity'} inputStyle={styles.inputfield} />
    </View>
  )
}

export default memo(ValuesView)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  input: {
    borderWidth: 0.5,
    borderColor: colors.grey100
  },
  inputfield: {
    borderWidth: 0,
    borderRadius: 0,
  }
})