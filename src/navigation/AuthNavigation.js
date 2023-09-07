import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../screens/onboarding/Onboarding';
import Login from '../screens/auth/Login';

const Stack = createStackNavigator();

const AuthNavigation = () => {

  return (
    <Stack.Navigator initialRouteName={'onboarding'}>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
            headerShown: false,
        }}
      />
      <Stack.Screen
        name="onboarding"
        component={Onboarding}
        options={{
            headerShown: false,
        }} 
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;