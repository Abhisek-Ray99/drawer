import React, {memo} from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/profile/Profile';
import Dashboard from '../screens/dashboard/Dashboard';
import Sales from '../screens/sale/Sales';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import TopTabNavigation from './TopTabNavigation';
import Transactions from '../screens/transactions/Transactions';


const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            initialRouteName: "dashboard",  
            tabBarActiveTintColor: 'blue',
            tabBarStyle: { 
                height: 56, 
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '600'
            },
        }}
    >
      <Tab.Screen 
        name="dashboard" 
        component={Dashboard} 
        options={{
            tabBarLabel: "Dashboard",
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <Icons name="view-dashboard-outline" size={22} color={focused? 'blue':'grey'} />
            ),
        }} />
      <Tab.Screen 
        name="item" 
        component={TopTabNavigation}
        options={{
            tabBarLabel: "Items",
            headerTitle: "Items",
            headerLeft: null,
            tabBarIcon: ({focused}) => (
                <Feather name="shopping-bag" size={22} color={focused? 'blue':'grey'} />
            )
        }} />
      <Tab.Screen 
        name="sales" 
        component={Sales}
        options={{
            tabBarLabel: "Sales",
            headerTitle: "Sales",
            headerLeft: null,
            tabBarIcon: ({focused}) => (
                <Octicons name="graph" size={22} color={focused? 'blue':'grey'} />
            )
        }} />
      <Tab.Screen 
        name="transactions" 
        component={Transactions}
        options={{
            tabBarLabel: "Transactions",
            headerTitle: "Transactions",
            headerLeft: null,
            tabBarIcon: ({focused}) => (
                <Octicons name="history" size={22} color={focused? 'blue':'grey'} />
            )
        }} />
      <Tab.Screen 
        name="profile" 
        component={Profile}
        options={{
            tabBarLabel: "Profile",
            headerTitle: "Profile",
            headerLeft: null,
            tabBarIcon: ({focused}) => (
                <Octicons name="person" size={22} color={focused? 'blue':'grey'} />
            )
        }} />
    </Tab.Navigator>
  )
}

export default memo(BottomTabNavigation)