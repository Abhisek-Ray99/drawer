import { StyleSheet, Text, View, BackHandler } from 'react-native'
import React, {useCallback} from 'react'
import { useFocusEffect } from '@react-navigation/native';

const Reports = ({navigation}) => {

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
      <Text>Reports</Text>
    </View>
  )
}

export default Reports

const styles = StyleSheet.create({})