import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../constants/colors'


const InputField = ({
    placeholder,
    underlinecolor,
    password=false,
    InputStyle,
    focusColor,
    ...other
}) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <TextInput
        placeholder={placeholder}
        underlineColorAndroid={underlinecolor}
        secureTextEntry={password}
        style={[styles.input, InputStyle, isFocused && {backgroundColor: colors.grey1400}]}
        onFocus={ () => setIsFocused(true) }
        {...other}
    >
    </TextInput>
  )
}

export default InputField

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: colors.grey500,
    borderRadius: 7,
    paddingHorizontal: 16,
    fontSize: 16
  }
})