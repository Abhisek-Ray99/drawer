/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from "react-redux";

import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './src/redux/store';

import App from './App';
import {name as appName} from './app.json';

export default function Main() {
    return (
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            
            <PaperProvider>
              <App />
            </PaperProvider>
      
        </PersistGate>
      </ReduxProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
