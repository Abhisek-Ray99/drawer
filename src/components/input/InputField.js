import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputField = ({
    placeholder,
    underlinecolor,
    password=false,
    InputStyle,
    ...other
}) => {
  return (
    <TextInput
        placeholder={placeholder}
        underlineColorAndroid={underlinecolor}
        secureTextEntry={password}
        style={[styles.input, InputStyle]}
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
    borderColor: 'grey',
    borderRadius: 7,
    paddingHorizontal: 16,
    fontSize: 16
  }
})