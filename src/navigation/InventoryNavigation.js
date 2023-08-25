import { StyleSheet } from 'react-native'
import React, {memo} from 'react'

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
            drawerStyle: { width: '85%' },
            swipeEdgeWidth: 350
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

export default memo(InventoryNavigation)

const styles = StyleSheet.create({})