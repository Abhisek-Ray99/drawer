import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native'
import React, { useEffect } from 'react'

const Reports = ({navigation}) => {

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
      <Text>Reports</Text>
    </View>
  )
}

export default Reports

const styles = StyleSheet.create({})