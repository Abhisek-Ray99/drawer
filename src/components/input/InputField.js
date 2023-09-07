import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, memo } from 'react'
import { colors } from '../../constants/colors'


const InputField = ({
    placeholder,
    underlinecolor,
    password=false,
    InputStyle,
    focusColor,
    InputRightElement=null,
    ...other
}) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        underlineColorAndroid={underlinecolor}
        secureTextEntry={password}
        style={[styles.input, InputStyle, isFocused ]}
        onFocus={ () => setIsFocused(true) }
        {...other}
      />
      {InputRightElement}
    </View>
  )
}

export default memo(InputField)

const styles = StyleSheet.create({
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.grey500,
    borderRadius: 7,
    backgroundColor: colors.grey1400
  },
  input: {
    flex: 1,
    height: 60,
    borderColor: colors.grey500,
    borderRadius: 7,
    paddingHorizontal: 16,
    fontSize: 16,
  }
})