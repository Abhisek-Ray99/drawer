import React, {memo} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Pressable, StyleSheet } from 'react-native';

import Dashboard from '../screens/dashboard/Dashboard';
import Reports from '../screens/Reports/Reports';
import TopTabNavigation from './TopTabNavigation';
import Transactions from '../screens/transactions/Transactions';
import { colors } from '../constants/colors';
import TabIcon from './components/TabIcon';
import AppText from '../components/text/AppText';
import navigation from './navigation';


const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({route}) => {
  const { items, transactions } = route.params.params[0]
  
  return (
    <Tab.Navigator
        screenOptions={{
            initialRouteName: "dashboard",  
            tabBarActiveTintColor: colors.dodgerblue100,
            tabBarStyle: { 
                height: 80, 
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                position: 'absolute',
                overflow: 'hidden',
                borderTopWidth: 1,
                borderColor: colors.grey100,
                elevation: 0
            },
            tabBarIconStyle:{
                top: 2
            },
            tabBarShowLabel: false,
            
        }}
    >
        
      <Tab.Screen 
        name="dashboard" 
        component={Dashboard} 
        initialParams={route.params}
        options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View style={styles.tabContainer}>
                  <Pressable
                    onPress={() => {navigation.navigate('dashboard')}}
                    android_ripple={{color: colors.grey1900, borderless: true}}
                    style={styles.pressablestyle}
                  >
                    {focused ? (
                      <TabIcon img={require('../assets/img/dashboard-active.png')} size={30} />
                    ) : (
                      <TabIcon img={require('../assets/img/dashboard-inactive.png')} size={30} />
                    )}
                    <AppText style={focused ? styles.activefont : styles.inactivefont}>Dashboard</AppText>
                  </Pressable>
                </View>
              ),
        }} />
      <Tab.Screen 
        name="item" 
        component={TopTabNavigation}
        initialParams={items}
        options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View style={styles.tabContainer}>
                  <Pressable
                    onPress={() => {navigation.navigate('item')}}
                    android_ripple={{color: colors.grey1900, borderless: true}}
                    style={styles.pressablestyle}
                  >
                    {focused ? (
                      <TabIcon img={require('../assets/img/items-active.png')} size={30} />
                    ) : (
                        <TabIcon img={require('../assets/img/items-inactive.png')} size={30} />
                    )}
                    <AppText style={focused ? styles.activefont : styles.inactivefont}>Products</AppText>
                  </Pressable>
                </View>
            ),
        }} />
      <Tab.Screen 
        name="reports" 
        component={Reports}
        options={{
            headerTitle: "Reports",
            headerLeft: null,
            tabBarIcon: ({ focused }) => (
                <View style={styles.tabContainer}>
                  <Pressable
                    onPress={() => {navigation.navigate('reports')}}
                    android_ripple={{color: colors.grey1900, borderless: true}}
                    style={styles.pressablestyle}
                  >
                    {focused ? (
                      <TabIcon img={require('../assets/img/report-active.png')} size={28} />
                    ) : (
                      <TabIcon img={require('../assets/img/report-inactive.png')} size={28} />
                    )}
                    <AppText style={focused ? styles.activefont : styles.inactivefont}>Reports</AppText>
                  </Pressable>
                </View>
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
            headerTitle: "Transactions History",
            headerLeft: null,
            tabBarIcon: ({ focused }) => (
                <View
                style={styles.tabContainer}
                >
                  <Pressable
                    onPress={() => {navigation.navigate('transactions')}}
                    android_ripple={{color: colors.grey1900, borderless: true}}
                    style={styles.pressablestyle}
                  >
                    {focused ? (
                      <TabIcon img={require('../assets/img/transaction-active.png')} size={30} />
                    ) : (
                        <TabIcon img={require('../assets/img/transaction-inactive.png')} size={30} />
                    )}
                    <AppText style={focused ? styles.activefont : styles.inactivefont}>Transactions</AppText>
                  </Pressable>
                </View>
              ),
            headerStyle: {
                backgroundColor: '#cfd9df'
            },  
        }} />
    </Tab.Navigator>
  )
}

export default memo(BottomTabNavigation)

const styles = StyleSheet.create({
    activefont:{
        fontSize: 12,
        bottom: 8,
        fontFamily: 'NotoSans-Bold',
        color: colors.royalblue200
    },
    inactivefont: {
        fontSize: 12,
        bottom: 8,
        fontFamily: 'NotoSans-Bold',
        color: colors.black
    },
    pressablestyle:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width:  100,
    }
})