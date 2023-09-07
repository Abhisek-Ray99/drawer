import { StyleSheet, Text, View, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const InvoiceScreen = () => {
  const navigation = useNavigation();
  function handleBackButtonClick() {
    navigation.goBack();
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
      <Text>Invoice.screen</Text>
    </View>
  )
}

export default InvoiceScreen

const styles = StyleSheet.create({})