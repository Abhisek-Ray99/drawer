import React, {memo} from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard/Dashboard';
import Reports from '../screens/Reports/Reports';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import TopTabNavigation from './TopTabNavigation';
import Transactions from '../screens/transactions/Transactions';
import { colors } from '../constants/colors';


const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({route}) => {
    const { items, transactions } = route.params.params[0]
  return (
    <Tab.Navigator
        screenOptions={{
            initialRouteName: "dashboard",  
            tabBarActiveTintColor: 'blue',
            tabBarStyle: { 
                height: 70, 
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                position: 'absolute',
                overflow: 'hidden',
                borderTopWidth: 1,
                borderColor: colors.grey100,
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '600',
                marginBottom: 6
            },
            
        }}
    >
      <Tab.Screen 
        name="dashboard" 
        component={Dashboard} 
        initialParams={route.params}
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
        initialParams={items}
        options={{
            tabBarLabel: "Items",
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <Feather name="shopping-bag" size={22} color={focused? 'blue':'grey'} />
            ),

        }} />
      <Tab.Screen 
        name="reports" 
        component={Reports}
        options={{
            tabBarLabel: "Reports",
            headerTitle: "Reports",
            headerLeft: null,
            tabBarIcon: ({focused}) => (
                <Octicons name="graph" size={22} color={focused? 'blue':'grey'} />
            ),
            headerStyle: {
                backgroundColor: '#cfd9df'
            }, 
        }} />
      <Tab.Screen 
        name="transactions" 
        component={Transactions}
        initialParams={transactions}
        options={{
            tabBarLabel: "Transactions",
            headerTitle: "Transactions History",
            headerLeft: null,
            tabBarIcon: ({focused}) => (
                <Octicons name="history" size={22} color={focused? 'blue':'grey'} />
            ),
            headerStyle: {
                backgroundColor: '#cfd9df'
            },  
        }} />
    </Tab.Navigator>
  )
}

export default memo(BottomTabNavigation)