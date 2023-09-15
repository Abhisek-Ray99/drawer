import { StyleSheet } from 'react-native'
import React, {memo} from 'react'

import { CardStyleInterpolators, createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, TransitionPresets } from '@react-navigation/stack';

import AddItem from '../screens/items/AddItem';
import BarcodeItem from '../screens/items/BarcodeItem'
import CategoryScreen from '../screens/category/Category.screen';
import { colors } from '../constants/colors';
import ProductDetailsScreen from '../screens/product/ProductDetails.screen';
import InventoryNavigation from './InventoryNavigation';
import ViewMembersScreen from '../screens/members/ViewMembers.screen';
import PreferencesScreen from '../screens/preferences/Preferences.screen';
import InvoiceScreen from '../screens/transactions/Invoice.screen';
import SettingsScreen from '../screens/settings/Settings.screen';
import ProfileScreenEdit from '../screens/profile/Profile.screen.edit';
import Profile from '../screens/profile/Profile';
import NewPurchaseScreen from '../screens/purchase/NewPurchase.screen';
import NewSaleScreen from '../screens/sale/NewSale.screen';
import Sales from '../screens/sale/Sales';
import Purchase from '../screens/purchase/Purchase';
import WelcomeInventoryScreen from '../screens/Inventory/WelcomeInventory.screen';


const RootStack = createStackNavigator()

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 10,
    },
  };

const RootNavigation = ({userData}) => {

    const initialScreen = (Array.isArray(userData[0]?.inventories) && !userData[0]?.inventories?.length)
    ? "welcome-inventory" : "home"

    return (
        <RootStack.Navigator
            initialRouteName= {initialScreen}
        >
            <RootStack.Screen
                name="welcome-inventory"
                initialParams={userData[0]}
                component={WelcomeInventoryScreen} 
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    ...TransitionPresets.FadeFromBottomAndroid,
                }}
                
            />
            <RootStack.Screen
                name="home"
                initialParams={userData}
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
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
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
                    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    ...TransitionPresets.ScaleFromCenterAndroid,
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
                    transitionSpec: {
                        open: TransitionSpecs.FadeOutToBottomAndroidSpec,
                        close: TransitionSpecs.FadeInFromBottomAndroidSpec,
                    },
                    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                }}
                
                />
            <RootStack.Screen
                name="profile-edit"
                component={ProfileScreenEdit} 
                options={{
                    headerTitle: 'Edit Profile',
                    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    transitionSpec: {
                        open: TransitionSpecs.RevealFromBottomAndroidSpec,
                        close: TransitionSpecs.TransitionIOSSpec,
                    },
                    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                }}
                
                />
            <RootStack.Screen
                name="profile"
                component={Profile} 
                options={{
                    headerShown: false,
                    transitionSpec: {
                        open: TransitionSpecs.RevealFromBottomAndroidSpec,
                        close: TransitionSpecs.TransitionIOSSpec,
                    },
                    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                }}
                
                />
            <RootStack.Screen
                name="new-purchase"
                component={NewPurchaseScreen} 
                options={{
                    // headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    ...TransitionPresets.FadeFromBottomAndroid,
                }}
                
                />
            <RootStack.Screen
                name="new-sale"
                component={NewSaleScreen} 
                options={{
                    // headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    ...TransitionPresets.FadeFromBottomAndroid,
                }}
                
                />
            <RootStack.Screen
                name="sales"
                component={Sales} 
                options={{
                    // headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    ...TransitionPresets.FadeFromBottomAndroid,
                }}
                
                />
            <RootStack.Screen
                name="purchase"
                component={Purchase} 
                options={{
                    // headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    ...TransitionPresets.FadeFromBottomAndroid,
                    transitionSpec: {
                        open: config,
                        close: config,
                      },
                }}
                
                />
        </RootStack.Navigator>
    )
}

export default memo(RootNavigation)

const styles = StyleSheet.create({})