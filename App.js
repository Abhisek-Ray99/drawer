import React, {memo} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';

import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";
import { globalstyles } from './src/styles/global.style';


function App() {

  const isDarkMode = useColorScheme() === 'dark';

  return (
    
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={'#fff'}
        />
        
        <RootNavigation />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({});

export default memo(App);
