import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'

import AppBtn from '../../components/button/AppBtn'

import Icon from 'react-native-vector-icons/Fontisto'
import { colors } from '../../constants/colors'

const Onboarding = ({navigation}) => {

  return (
    <View style={styles.onboardContainer}>
      <View style={styles.onboardSlider}>

      </View>
      <View style={styles.onboardView}>
        <AppBtn 
          title="Get Started" 
          BtnStyle={styles.onboardBtn} 
          titleStyle={styles.onboardTitle}
          color={colors.black}
          rightIcon={(
           <Icon name="arrow-right-l" size={30} color="#fff" /> 
          )} 
          onPress={()=> navigation.navigate('owner-login')}
          />
      </View> 
    </View>
  )
}

export default memo(Onboarding)

const styles = StyleSheet.create({
  onboardContainer: {
    flex: 1,
  },
  onboardSlider: {
    flex: 9,
  },
  onboardView: {
    flex: 1,
  },
  onboardBtn: {
    marginHorizontal: 30,
    height: 60,
    elevation: 0,
    borderRadius: 0,
  },
  onboardTitle: {
    fontSize: 16,
    fontWeight: '700',
  }
})
