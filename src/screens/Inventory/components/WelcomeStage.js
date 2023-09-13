import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import AppText from '../../../components/text/AppText'
import LottieView from '../../../components/view/LottieView'
import ImgBtn from '../../../components/button/ImgBtn'

const WelcomeStage = ({
  mailid,
  changeStage
}) => {
  return (
    <View style={styles.welcomecontainer}>
      <View style={styles.view1}>
        <AppText style={styles.welcometitle}>Let's get started!</AppText>
        <AppText style={{textAlign: 'center'}}>
          You have confirmed 
          <AppText style={{ fontWeight: 'bold'}}> {mailid} </AppText>
          You're all set to create your first online inventory for your shop
        </AppText>
      </View>
      <View style={styles.view2}>
        <LottieView
          imagesource={require('../../../assets/img/animation_3.json')}
          size={250}
        />
      </View>
      <View style={styles.btnview}>
        <ImgBtn 
          Title="Create a new Inventory" 
          onPress={changeStage} 
          disabled={false} 
          style={{borderRadius: 7}}
        />
      </View>
    </View>
  )
}

export default memo(WelcomeStage)

const styles = StyleSheet.create({
  welcometitle:{
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  welcomecontainer:{
    flex: 1,
    flexDirection: 'column',
    gap: 30,
  },
  view1:{
    flexDirection: 'column',
    gap: 10
  },
  view2:{
    flex: 1,
  },
  btnview:{
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center'
  }
})