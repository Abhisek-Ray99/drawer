import { StyleSheet } from 'react-native'
import React, {memo} from 'react'

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../screens/onboarding/Onboarding';
import OwnerLogin from '../screens/auth/OwnerLogin';
import StaffLogin from '../screens/auth/StaffLogin';
import AddItem from '../screens/items/AddItem';
import BarcodeItem from '../screens/items/BarcodeItem'
import CategoryScreen from '../screens/category/Category.screen';
import { colors } from '../constants/colors';
import ProductDetailsScreen from '../screens/product/ProductDetails.screen';
import InventoryNavigation from './InventoryNavigation';
import CreateInventoryScreen from '../screens/Inventory/CreateInventory.screen';
import ViewMembersScreen from '../screens/members/ViewMembers.screen';
import PreferencesScreen from '../screens/preferences/Preferences.screen';
import InvoiceScreen from '../screens/transactions/Invoice.screen';
import SettingsScreen from '../screens/settings/Settings.screen';
import ProfileScreenEdit from '../screens/profile/Profile.Screen.edit';


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
                component={InventoryNavigation} 
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
            <RootStack.Screen
                name="category-screen"
                component={CategoryScreen} 
                options={({ route }) => ({
                    title: route.params.categoryName,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    cardStyle: {
                        backgroundColor: colors.white
                    }
                })}
                />
            <RootStack.Screen
                name="product-screen"
                component={ProductDetailsScreen} 
                options={{
                    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                }}
                
                />
            <RootStack.Screen
                name="create-inventory"
                component={CreateInventoryScreen} 
                options={{
                    headerTitle: 'Create a new inventory',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                
                />
            <RootStack.Screen
                name="view-members"
                component={ViewMembersScreen} 
                options={{
                    headerTitle: 'View Members',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                
                />
            <RootStack.Screen
                name="preferences"
                component={PreferencesScreen} 
                options={{
                    headerTitle: 'Preferences',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                
                />
            <RootStack.Screen
                name="invoice"
                component={InvoiceScreen} 
                options={{
                    headerTitle: 'Invoice',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                
                />
            <RootStack.Screen
                name="settings"
                component={SettingsScreen} 
                options={{
                    headerTitle: 'Settings',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                
                />
            <RootStack.Screen
                name="profile-edit"
                component={ProfileScreenEdit} 
                options={{
                    headerTitle: 'Edit Profile',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                
                />
        </RootStack.Navigator>
    )
}

export default memo(RootNavigation)

const styles = StyleSheet.create({})