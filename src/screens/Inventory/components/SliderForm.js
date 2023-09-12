import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import AppText from '../../../components/text/AppText'
import InputField from '../../../components/input/InputField'
import { colors } from '../../../constants/colors'
import ImgBtn from '../../../components/button/ImgBtn'

const SliderForm = ({
  title,
  placeholder,
}) => {
  return (
    <>
      <AppText style={styles.formtitle}>{title}</AppText>
      <View style={styles.inputview}>
        <InputField 
            placeholder={placeholder}
            InputViewStyle={styles.inputstyle}
        />
        <ImgBtn Title="Next" disabled={true} />
      </View>
    </>
  )
}

export default memo(SliderForm)

const styles = StyleSheet.create({
    formtitle:{
        fontSize: 24,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        fontWeight: '700'
    },
    inputstyle:{
        borderColor: colors.grey1800,
        height: 50
    },
    inputview:{
        padding: 10,
        flexDirection: 'column',
        gap: 20
    }
})