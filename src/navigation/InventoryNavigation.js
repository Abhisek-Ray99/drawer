import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import RootNavigation from './RootNavigation';
import BottomTabNavigation from './BottomTabNavigation';

import Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

const InventoryNavigation = () => {
  return (
    <Drawer.Navigator
        screenOptions={{
            drawerType: 'slide',
            drawerStyle: { width: '85%' }
        }}
    >
      <Drawer.Screen 
        name="shop1" 
        component={BottomTabNavigation} 
        options={{
            headerTitle:"Shop1",
            drawerIcon: ({focused, size}) => (
                <Ionicons
                   name="md-home"
                   size={size}
                   color={focused ? '#7cc' : '#ccc'}
                />
             ),
             
        }}
      />
      <Drawer.Screen 
        name="shop2" 
        component={BottomTabNavigation} 
        options={{
            headerTitle:"Shop2",
            drawerIcon: ({focused, size}) => (
                <Ionicons
                   name="md-home"
                   size={size}
                   color={focused ? '#7cc' : '#ccc'}
                />
             ),
             
        }}
      />
    </Drawer.Navigator>
  )
}

export default InventoryNavigation

const styles = StyleSheet.create({})