import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'

import AppText from '../../components/text/AppText'
import AppBtn from '../../components/button/AppBtn'
import { colors } from '../../constants/colors'
import InputField from '../../components/input/InputField'
import TextLink from '../../components/text/TextLink'

const StaffView = ({navigation}) => {
  return (
    <View 
      style={styles.ownerLoginContainer} >
      <View style={styles.ownerLoginView1}>
        <AppText style={styles.ownerLoginTitle1} >Welcome to Drawer</AppText>
        <AppText style={styles.ownerLoginTitle2}>Staff Login</AppText>
      </View>
      <View style={styles.ownerLoginView2}>
        <InputField placeholder={"Email"}/>
        <InputField placeholder={"Password"} password={true} />
        <TextLink title="Forgot Password?" titleStyle={[styles.forgot, {paddingVertical: 10}]}/>
        <AppBtn
          title="Continue"
          onPress={()=> navigation.navigate('home')}
          BtnStyle={styles.OwnerContinueBtn}
          titleStyle={[styles.forgot]}
        />
      </View>
      <View style={{flex: 0.2,flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#D3D3D3'}} />
        </View>
      <View style={styles.ownerLoginView3}>
        <AppBtn 
          title="I am a Owner" 
          BtnStyle={styles.OwnerLoginBtn} 
          titleStyle={styles.OwnerLoginBtnTitle}
          onPress={()=> navigation.navigate('owner-login')}
        />
      </View>
    </View>
  )
}

export default memo(StaffView)

const styles = StyleSheet.create({
  ownerLoginContainer: {
    flex: 1,
  },
  ownerLoginView1: {
    flex: 1,
    padding: 22,
  },
  ownerLoginView2: {
    flex: 2,
    justifyContent: 'space-around',
    padding: 22,
  },
  ownerLoginView3: {
    flex: 1.5,
    justifyContent: 'flex-start',
    padding: 22,
  },
  ownerLoginTitle1: {
    fontSize: 36
  },
  ownerLoginTitle2: {
    fontSize: 28, 
    paddingTop: 16
  },
  OwnerLoginBtn: {
    backgroundColor: colors.lightblue,
    elevation: 0
  },
  OwnerLoginBtnTitle: {
    color: colors.heavyblue,
    fontSize: 16,
    fontWeight: 'bold'
  },
  OwnerContinueBtn: {
    height: 60,
  },
  forgot:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  }
})