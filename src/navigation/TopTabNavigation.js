import React, {memo} from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Category from '../screens/category/Category';
import Products from '../screens/product/Products';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarBounces: true,
        tabBarPressOpacity: 0,
      }}
    >
        <Tab.Screen 
            name="products" 
            component={Products}   
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

export default memo(TopTabNavigation)