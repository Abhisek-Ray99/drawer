import React, {memo} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import { NativeBaseProvider } from "native-base";

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";
import { colors } from './src/constants/colors';
import NetInfo from './src/components/network/NetInfo';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white
    },
  };
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={MyTheme} onReady={() => RNBootSplash.hide()}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor="transparent"
        />
        <RootNavigation />
        <NetInfo/>
      </NavigationContainer>
    </NativeBaseProvider>
    
  );
}

const styles = StyleSheet.create({});

export default memo(App);
