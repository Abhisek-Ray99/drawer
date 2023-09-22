import React, {memo} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Dashboard from '../screens/dashboard/Dashboard';
import Reports from '../screens/Reports/Reports';
import TopTabNavigation from './TopTabNavigation';
import Transactions from '../screens/transactions/Transactions';
import { colors } from '../constants/colors';
import TabIcon from './components/TabIcon';
import { windowWidth } from '../utils/Dimension';
import AppText from '../components/text/AppText';


const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({route}) => {
  const { items, transactions } = route.params.params[0]
  const navigation = useNavigation();
  
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
            tabBarIconStyle:{
                top: 4
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
            tabBarLabel: "Items",
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
                    <AppText style={focused ? styles.activefont : styles.inactivefont}>Items</AppText>
                  </Pressable>
                </View>
            ),
        }} />
      <Tab.Screen 
        name="reports" 
        component={Reports}
        options={{
            tabBarLabel: "Reports",
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
            tabBarLabel: "Transactions",
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
    tabContainer: {
        width: windowWidth / 4,
        height: 70, 
        alignItems: 'center',
        padding: 4,
    },
    activefont:{
        fontSize: 11,
        bottom: 8,
        fontWeight: '700'
    },
    inactivefont: {
        fontSize: 11,
        bottom: 8
    },
    pressablestyle:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 70,
    }
})