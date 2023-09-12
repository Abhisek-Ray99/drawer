import { StyleSheet, View, BackHandler } from 'react-native'
import React, {memo, useCallback} from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const PreferencesScreen = () => {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('dashboard');
        return true;
      };
      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );
      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onBackPress
        );
      };
    }, []),
  );

  return (
    <View>
      
    </View>
  )
}

export default memo(PreferencesScreen)

const styles = StyleSheet.create({})