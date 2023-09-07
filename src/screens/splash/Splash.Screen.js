import { StyleSheet, Text, View, Image } from 'react-native'
import React, {memo} from 'react'
import { windowHeight, windowWidth } from '../../utils/Dimension'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/img/splash.png')} style={{ height: windowHeight - 100, width: windowWidth - 100 }}
        resizeMode='contain'/>
    </View>
  )
}

export default memo(SplashScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 15
    },
})