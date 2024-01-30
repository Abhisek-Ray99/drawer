import { StyleSheet, Text, View, BackHandler } from 'react-native'
import React, {memo, useCallback} from 'react'

import { useFocusEffect } from '@react-navigation/native'
import navigation from '../../navigation/navigation';

const ViewMembersScreen = () => {
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

export default memo(ViewMembersScreen)

const styles = StyleSheet.create({
})