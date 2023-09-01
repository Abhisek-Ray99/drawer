import React, {memo} from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Category from '../screens/category/Category';
import Products from '../screens/product/Products';
import { colors } from '../constants/colors';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarBounces: true,
        tabBarPressOpacity: 0,
        tabBarStyle: { backgroundColor: '#cfd9df' },
        tabBarActiveTintColor: '#1D5DFF',
        tabBarInactiveTintColor: colors.grey900,
        tabBarLabelStyle:{
          fontWeight: '700'
        },
        tabBarAndroidRipple: { borderless: true,  },
        tabBarPressColor: colors.grey1900,
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