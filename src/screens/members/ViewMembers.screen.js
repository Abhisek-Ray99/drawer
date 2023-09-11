import { StyleSheet, Text, View, BackHandler } from 'react-native'
import React, {memo, useEffect} from 'react'

import { useNavigation } from '@react-navigation/native'

const ViewMembersScreen = () => {
  const navigation = useNavigation()
  function handleBackButtonClick() {
    navigation.navigate('dashboard');
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);

  return (
    <View>
      
    </View>
  )
}

export default memo(ViewMembersScreen)

const styles = StyleSheet.create({})