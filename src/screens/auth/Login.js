import { StyleSheet, Text, View, Image, StatusBar, Pressable, Alert, Button } from 'react-native';
import React, {memo, useState, useEffect} from 'react';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import AppText from '../../components/text/AppText'
import { colors } from '../../constants/colors'
import InputField from '../../components/input/InputField'
import TextLink from '../../components/text/TextLink'
import { windowHeight, windowWidth } from '../../utils/Dimension'
import ImgBtn from '../../components/button/ImgBtn'
import { users } from '../../data/data'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useDispatch, useSelector } from '../../redux/store'
import { setLoggedIn } from '../../redux/slices/user'
import { mesh_51 } from '../../constants/Images'
import AppBtn from '../../components/button/AppBtn';
import SocialBtn from '../../components/button/SocialBtn';
import GoogleIcon from '../../assets/icons/google.svg'


const Login = ({navigation}) => {

  const dispatch = useDispatch();


  const [checked, setChecked] = useState(false)
  const [show, setShow] = useState(false);

  const handleCheckboxPress = () => {
    setChecked(prev => {
      return !prev
    })
  }
  

  const [mail, setMail] = useState('');
  const [pwd, setPwd] = useState('');
  // console.log(user)

  const handleLogin = () => {
    try{
        const user = users?.filter(data => data?.mail === mail && data?.password === pwd)
        if(Array.isArray(user) && !user.length){
          Alert.alert("Error !", "Wrong Email or Password")
        }else{
          dispatch(setLoggedIn(user))
        }
    }catch(error){
      console.warn("got error")
    }
  }

  function validateEmailPassword() {
    var mailFormat =  /\S+@\S+\.\S+/;
    if (mail.match(mailFormat) && pwd.length >= 6) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '598950884388-nmavr5ab3dh14k7a4opvaq0q6378ll15.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
    isSignedIn();
  }, [])

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('due__', userInfo);
    } catch (error) {
      console.log('Message__', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('User Cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('Operation in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('play services not available or outdated');
      } else {
        // some other error happened
        console.log('some other error happened');
      }
    }
    // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // // Get the users ID token
    // const { idToken } = await GoogleSignin.signIn();
  
    // // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
  }

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('please Login');
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log('User has not signed in yet');
      } else {
        console.log('Something went wrong');
      }
    }
  };
  
  
  return (
    <View style={styles.ownerLoginContainer} >
      <View style={styles.LoginView1}>
        <Image
          style={styles.loginImg}
          source={mesh_51}
        />
      </View>
      <View style={styles.LoginView2}>
        <View style={styles.loginTitle}>
          <AppText style={styles.ownerLoginTitle1} >Welcome Back</AppText>
          <AppText style={styles.ownerLoginTitle2}>To keep connected with us please login with your info</AppText>
        </View>
        <View style={styles.loginfields}>
          <InputField 
            placeholder={"Email"}  
            onChangeText={value => setMail(value)} 
            cursorColor={colors.black}
          />
          <InputField 
            placeholder={"Password"} 
            secureTextEntry={show ? false : true} 
            onChangeText={value => setPwd(value)}
            cursorColor={colors.black}
            InputRightElement={
              pwd && 
              (<Pressable onPress={() => setShow(!show)} style={styles.inputicon}>
                  <MaterialCommunityIcons
                    name={show ? "eye-outline" : "eye-off-outline"}
                    color={colors.grey1500}
                    size={24}
                  />
              </Pressable>)
            }
          />
          <View style={styles.infoview}>
            <Pressable onPress={handleCheckboxPress} style={styles.checkboxview}>
              <View style={styles.checkbox} >
                <AnimatedCheckbox
                  checked={checked}
                  highlightColor="#4444ff"
                  checkmarkColor="#ffffff"
                  boxOutlineColor="#4444ff"
                />
              </View>
              <Text style={styles.remember}>Stay Signed</Text>
            </Pressable>
            <TextLink title="Forgot Password?" titleStyle={[styles.forgot, {paddingVertical: 10}]}/>
          </View>
          <ImgBtn Title="Sign in" onPress={handleLogin} disabled={validateEmailPassword() ? false:true} />
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
            <View style={{width: '40%', height: 1, backgroundColor: colors.primary}}/>
            <Text style={{paddingHorizontal: 20, fontSize: 16, color: colors.primary}}>or</Text>
            <View style={{width: '45%', height: 1, backgroundColor: colors.primary}}/>
          </View>
          <SocialBtn 
            title="Sign in with Google" 
            onPress={onGoogleButtonPress}
            leftIcon={
              <View style={{
                width: 60, 
                height: '90%', 
                backgroundColor: 'white',
                borderTopLeftRadius: 18,
                borderBottomLeftRadius: 18,
                borderTopRightRadius: 2,
                borderBottomRightRadius: 2,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <GoogleIcon width={30} height={30} />
              </View>
            }
            BtnStyle={{
              borderRadius: 18+2,
              elevation: 0,
              paddingLeft: 2
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default memo(Login)

const styles = StyleSheet.create({
  ownerLoginContainer: {
    flex: 1,
  },
  LoginView1: {
    flex: 0.3,
  },
  LoginView2: {
    flex: 1,
    position: 'absolute',
    height: windowHeight/ 1.3,
    width: windowWidth,
    backgroundColor: colors.white,
    justifyContent: 'space-around',
    paddingHorizontal: 22,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    bottom: 0,
  },
  loginTitle:{
    flex: 1,
    marginTop: 40
  },
  ownerLoginTitle1: {
    fontSize: 26,
    fontWeight: '700',
  },
  ownerLoginTitle2: {
    fontSize: 16, 
  },
  loginfields:{
    flex: 3,
    flexDirection: 'column',
    gap: 10
  },
  infoview:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  forgot:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginImg:{
    width: '100%',
    height: '100%'
  },
  checkboxview:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  checkbox: {
    width: 30,
    height: 30,
    flexDirection: 'row',
  },
  remember:{
    fontWeight: '700'
  },
  inputicon:{
    padding: 10,
  }
})