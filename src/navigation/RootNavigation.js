import { StyleSheet } from 'react-native'
import React, {memo} from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../screens/onboarding/Onboarding';
import OwnerLogin from '../screens/auth/OwnerLogin';
import StaffLogin from '../screens/auth/StaffLogin';
import BottomTabNavigation from './BottomTabNavigation';
import AddItem from '../screens/items/AddItem';
import BarcodeItem from '../screens/items/BarcodeItem'


const RootStack = createStackNavigator()

const RootNavigation = () => {
    return (
        <RootStack.Navigator
        >
            <RootStack.Screen
                name="onboarding"
                component={Onboarding}
                options={{
                    headerShown: false,
                }} 
            />
            <RootStack.Screen
                name="owner-login"
                component={OwnerLogin}
                options={{
                    headerShown: false,
                }} />
            <RootStack.Screen
                name="staff-login"
                component={StaffLogin}
                options={{
                    headerShown: false,
                }} />
            <RootStack.Screen
                name="home"
                component={BottomTabNavigation} 
                options={{
                    headerShown: false,
                }}/>
            <RootStack.Screen
                name="add-item"
                component={AddItem} 
                options={{
                    presentation: 'modal',
                    headerTitleStyle: {display: 'none'},
                }}
                />
            <RootStack.Screen
                name="barcode-item"
                component={BarcodeItem} 
                options={{
                    presentation: 'modal',
                    headerTitleStyle: {display: 'none'},
                    
                }}
                />
        </RootStack.Navigator>
    )
}

export default memo(RootNavigation)

const styles = StyleSheet.create({})