import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import AppText from '../../../components/text/AppText'
import LottieView from '../../../components/view/LottieView'
import ImgBtn from '../../../components/button/ImgBtn'

const WelcomeStage = ({
  mailid
}) => {
  return (
    <View style={styles.welcomecontainer}>
      <AppText style={styles.welcometitle}>Let's get started!</AppText>
      <AppText style={{textAlign: 'center'}}>
        You have confirmed 
        <AppText style={{ fontWeight: 'bold'}}> {mailid} </AppText>
        You're all set to create your first online inventory for your shop
      </AppText>
      <View>
        <LottieView
          imagesource={require('../../../assets/img/animation_3.json')}
          size={250}
        />
      </View>
      <View style={styles.btnview}>
        <ImgBtn Title="Create a new Inventory" />
      </View>
    </View>
  )
}

export default memo(WelcomeStage)

const styles = StyleSheet.create({
  welcometitle:{
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 20
  },
  welcomecontainer:{
    flex: 1,
    flexDirection: 'column',
    gap: 30,
  },
  btnview:{
    paddingHorizontal: 20,
    paddingVertical: 40
  }
})