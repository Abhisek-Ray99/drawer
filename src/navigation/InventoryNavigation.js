import { StyleSheet, StatusBar } from 'react-native'
import React, {memo} from 'react'

import { 
  createDrawerNavigator,
} from '@react-navigation/drawer';


import BottomTabNavigation from './BottomTabNavigation';
import CustomDrawerContent from './components/CustomDrawerContent';

const Drawer = createDrawerNavigator();


const InventoryNavigation = ({route}) => {
  const { inventories } = route.params[0]
  // console.log(route)
  return (
    <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent inventories={inventories} userData={route.params[0]} /> }
        screenOptions={{
            headerShown: false,
            drawerType: 'slide',
            drawerStyle: { width: '85%' },
            swipeEdgeWidth: 350,
        }}
        initialRouteName={inventories[0].name}
    >
      {
        inventories.map((inventory,index) => (
          <Drawer.Screen 
            key={index}
            name={inventory.name} 
            initialParams={{params: inventories.filter(shopData => shopData.name == inventory.name)}}
            component={BottomTabNavigation} 
            options={{
                
            }}
          />
        ))
      }
    </Drawer.Navigator>
  )
}

export default memo(InventoryNavigation)

const styles = StyleSheet.create({})