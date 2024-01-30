import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import InputField from '../../../components/input/InputField'
import { colors } from '../../../constants/colors'

const ItemInputField = ({
    fieldPlaceholder,
    fieldIcon,
    fieldLabel,
    fieldStyle,
    inputStyle,
    inputHeight,
    inputWidth
}) => {
  return (
    <View style={fieldStyle}>
      <View style={styles.labelView}>
           {fieldIcon}
           <Text style={styles.fieldText}>{fieldLabel}</Text>
      </View>
      <InputField height={inputHeight} width={inputWidth} placeholder={fieldPlaceholder} InputStyle={inputStyle} />
    </View>
  )
}

export default memo(ItemInputField)

const styles = StyleSheet.create({
    labelView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    fieldText:{
        padding: 10,
        color: colors.grey1500
    }
})