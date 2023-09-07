import { StyleSheet, Text, View, BackHandler } from 'react-native'
import React, {memo, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

const ProductDetailsScreen = () => {
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
      <Text>ProductDetails.screen</Text>
    </View>
  )
}

export default memo(ProductDetailsScreen)

const styles = StyleSheet.create({})