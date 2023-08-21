import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Category from '../screens/items/Category';
import Items from '../screens/items/Items';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="products" 
            component={Items}   
            options={{
                
            }}
        />
        <Tab.Screen 
            name="categories" 
            component={Category} 
            options={{
                
            }}
        />
    </Tab.Navigator>
  )
}

export default TopTabNavigation

const styles = StyleSheet.create({})