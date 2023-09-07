import React, {memo, useEffect} from 'react';
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
import { colors } from './src/constants/colors';
import NetInfo from './src/components/network/NetInfo';
import AppStack from './src/navigation/AppStack';
import BootSplash from "react-native-bootsplash";

function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);
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
      <NavigationContainer theme={MyTheme} onReady={() => BootSplash.hide()}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor="transparent"
        />
        <AppStack/>
        <NetInfo/>
      </NavigationContainer>
    </NativeBaseProvider>
    
  );
}

const styles = StyleSheet.create({});

export default memo(App);
