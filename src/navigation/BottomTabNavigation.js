import React, {memo} from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../screens/dashboard/Dashboard';
import Reports from '../screens/Reports/Reports';
import TopTabNavigation from './TopTabNavigation';
import Transactions from '../screens/transactions/Transactions';
import { colors } from '../constants/colors';
import TabIcon from './components/TabIcon';


const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({route}) => {
  const { items, transactions } = route.params.params[0]
  
  return (
    <Tab.Navigator
        screenOptions={{
            initialRouteName: "dashboard",  
            tabBarActiveTintColor: colors.dodgerblue100,
            tabBarStyle: { 
                height: 60, 
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
                fontWeight: '700',
                bottom: 4
            },
            tabBarIconStyle:{
                marginTop: 0
            }
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
                focused ? <TabIcon img={require('../assets/img/dashboard-active.png')} size={32} /> :
                <TabIcon img={require('../assets/img/dashboard-inactive.png')} size={28} />
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
                focused ? <TabIcon img={require('../assets/img/items-active.png')} size={32} /> :
                <TabIcon img={require('../assets/img/items-inactive.png')} size={26} />
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
                focused ? <TabIcon img={require('../assets/img/report-active.png')} size={30} /> :
                <TabIcon img={require('../assets/img/report-inactive.png')} size={25} />
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
                focused ? <TabIcon img={require('../assets/img/transaction-active.png')} size={32} /> :
                <TabIcon img={require('../assets/img/transaction-inactive.png')} size={26} />
            ),
            headerStyle: {
                backgroundColor: '#cfd9df'
            },  
        }} />
    </Tab.Navigator>
  )
}

export default memo(BottomTabNavigation)