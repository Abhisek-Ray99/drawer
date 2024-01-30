import React, {memo} from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import ImmersiveMode from 'react-native-immersive-mode';

import { colors } from './src/constants/colors';
import NetInfo from './src/components/network/NetInfo';
import AppStack from './src/navigation/AppStack';
import navigation from './src/navigation/navigation';

function App() {
  ImmersiveMode.setBarTranslucent(true);
  const isDarkMode = useColorScheme() === 'dark';
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white
    },
  };
  const handleNavRef = (navigatorRef) => {
    navigation.setTopLevelNavigator(navigatorRef)
  };
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={MyTheme} ref={handleNavRef}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          translucent backgroundColor="transparent"
        />
        <AppStack/>
        <NetInfo/>
      </NavigationContainer>
    </NativeBaseProvider>
    
  );
}

const styles = StyleSheet.create({});

export default memo(App);
