import { StyleSheet } from 'react-native'
import React from 'react'

import { 
  createDrawerNavigator,
} from '@react-navigation/drawer';


import BottomTabNavigation from './BottomTabNavigation';
import CustomDrawerContent from './components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const InventoryNavigation = () => {
  return (
    <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent /> }
        screenOptions={{
            headerShown: false,
            drawerType: 'slide',
            drawerStyle: { width: '85%' }
        }}
    >
      <Drawer.Screen 
        name="shop1" 
        component={BottomTabNavigation} 
        options={{
             
        }}
      />
      <Drawer.Screen 
        name="shop2" 
        component={BottomTabNavigation} 
        options={{
            
        }}
      />
    </Drawer.Navigator>
  )
}

export default InventoryNavigation

const styles = StyleSheet.create({})