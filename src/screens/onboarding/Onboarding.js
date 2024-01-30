import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, {memo} from 'react'
import LinearGradient from 'react-native-linear-gradient';

import AppBtn from '../../components/button/AppBtn'

import Icon from 'react-native-vector-icons/Fontisto'
import { colors } from '../../constants/colors'
import AppText from '../../components/text/AppText'
import { windowWidth } from '../../utils/Dimension';
import { img_hero } from '../../constants/Images';

const Onboarding = ({navigation}) => {

  return (
    <View style={styles.onboardContainer}>
      <LinearGradient  colors={['#cfd9df', '#e2ebf0', '#e6dee9', '#fff']} style={styles.onboardSlider}>
        <Image 
          source={img_hero}
          resizeMode='cover'
          style={styles.heroimg}
        />
      </LinearGradient>
      <AppText style={styles.text}>Drawer</AppText>
      <View style={styles.descriptText}>
          <AppText style={styles.text1}>{`Picture this: a \ninventory management app`}</AppText>
          <AppText style={styles.word}>
            <AppText style={[{color: colors.royalblue}, styles.word]}>Create</AppText>,
            <AppText style={[{color: colors.redheavy200}, styles.word]}> Customize</AppText> & 
            <AppText style={[{color: colors.green300}, styles.word]}> Manage</AppText>
          </AppText>
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
          onPress={()=> navigation.navigate('login')}
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
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  text:{
    flex: 1,
    position: 'absolute',
    textAlign: 'center',
    fontSize: 0.31*windowWidth,
    top: 40,
    fontWeight: '700'
  },
  heroimg:{
    width: 500,
    height: 500,
    zIndex: 10
  },
  descriptText:{
    position: 'absolute',
    bottom: 200,
    left: 0,
    right: 0,
    justifyContent: 'center', 
    alignItems: 'center',

  },
  text1:{
    width: windowWidth/1.2,
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },
  word:{
    width: windowWidth/1.2,
    fontSize: 20,
    fontWeight: 'bold'
  }
})
