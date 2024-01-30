import React, {memo} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Pressable, StyleSheet } from 'react-native';

import TopTabNavigation from './TopTabNavigation';
import { colors } from '../constants/colors';
import { NotoSans } from '../constants/fonts';
import TabIcon from './components/TabIcon';
import AppText from '../components/text/AppText';

// screens
import { Dashboard, Reports, Transactions } from '../screens';

// navigation props
import navigation from './navigation';
import { ROUTES } from './routes';
import { dashboard_active, dashboard_inactive, items_active, items_inactive, report_active, report_inactive, transaction_active, transaction_inactive } from '../constants/Images';


const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({route}) => {
  const { items, transactions } = route.params.params[0]
  
  return (
    <Tab.Navigator
        screenOptions={{
            initialRouteName: ROUTES.DASHBOARD,  
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
        name={ROUTES.DASHBOARD}
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
                      <TabIcon img={dashboard_active} size={30} />
                    ) : (
                      <TabIcon img={dashboard_inactive} size={30} />
                    )}
                    <AppText style={focused ? styles.activefont : styles.inactivefont}>Dashboard</AppText>
                  </Pressable>
                </View>
              ),
        }} />
      <Tab.Screen 
        name={ROUTES.ITEM} 
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
                      <TabIcon img={items_active} size={30} />
                    ) : (
                        <TabIcon img={items_inactive} size={30} />
                    )}
                    <AppText style={focused ? styles.activefont : styles.inactivefont}>Products</AppText>
                  </Pressable>
                </View>
            ),
        }} />
      <Tab.Screen 
        name={ROUTES.REPORTS}
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
                      <TabIcon img={report_active} size={28} />
                    ) : (
                      <TabIcon img={report_inactive} size={28} />
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
        name={ROUTES.TRANSACTIONS} 
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
                      <TabIcon img={transaction_active} size={30} />
                    ) : (
                        <TabIcon img={transaction_inactive} size={30} />
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
        fontFamily: NotoSans["700"],
        color: colors.royalblue200
    },
    inactivefont: {
        fontSize: 12,
        bottom: 8,
        fontFamily: NotoSans['700'],
        color: colors.black
    },
    pressablestyle:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width:  100,
    }
})