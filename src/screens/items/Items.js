import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useCallback, useRef, useLayoutEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


import ActionButton from './components/ActionButton'
import BottomSheet from './components/BottomSheet'
import { windowHeight, windowWidth } from '../../utils/Dimension'

const Items = ({navigation}) => {

  const ref = useRef(null)
  const onPress = useCallback(() => {
    const isActive = ref.current.isActive()
    if(isActive){
      ref.current.scrollTo(0)
    }else{
      navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' }, tabBarVisible: false });
      ref.current.scrollTo(-320)
    }
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <ActionButton 
            onPress = {onPress}
        />
        <BottomSheet 
          ref = {ref}
        />
      </View>
      
    </GestureHandlerRootView>
  )
}

export default Items

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchbutton: {
    width: windowWidth / 10,
    height: windowHeight / 20,
    backgroundColor: '#C2E5FF',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cTitle: {
    textAlign: 'center',
    color: '#000000',
    fontSize: windowHeight / 42,
    fontWeight: 'bold',
  },
})