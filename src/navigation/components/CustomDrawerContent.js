import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import {
    DrawerContentScrollView,
  } from '@react-navigation/drawer';
import AppText from '../../components/text/AppText';
import DrawerItem from './DrawerItem';
import { colors } from '../../constants/colors';
import AppBtn from '../../components/button/AppBtn';

import Ionicons from 'react-native-vector-icons/Ionicons'
import TextBtn from '../../components/button/TextBtn';

const CustomDrawerContent = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.drawerContainer}>
            <View style={styles.TitleView}>
                <AppText style={styles.drawerTitle}>Inventories</AppText>
            </View>
            <DrawerContentScrollView style={styles.drawerListView}>
                <DrawerItem ItemTitle="Drawer Shop" onPress={() => navigation.navigate('shop1')} />
                <DrawerItem ItemTitle="Stationary Shop" onPress={() => navigation.navigate('shop2')} />
            </DrawerContentScrollView>
            <View style={styles.preferenceView}>
                <TextBtn 
                    TextTitle="Create a new inventory" 
                    onPress={()=> navigation.navigate('create-inventory')}
                    leftIcon={
                        <Ionicons name="add-circle-outline" size={24} />
                    } 
                />
                <TextBtn 
                    TextTitle="View Members" 
                    onPress={()=> navigation.navigate('view-members')}
                    leftIcon={
                        <Ionicons name="people-outline" size={24} />
                    } 
                />
                <TextBtn 
                    TextTitle="Preferences" 
                    onPress={()=> navigation.navigate('preferences')}
                    leftIcon={
                        <Ionicons name="settings-outline" size={24} />
                    } 
                />
            </View>
        </View>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    drawerContainer:{
        flex:1,
    },
    TitleView:{
        padding: 14,
       
    },
    drawerListView:{
        flex: 1,
        padding: 10,
    },
    drawerTitle:{
        fontSize: 22,
        fontWeight: '700'
    },
    preferenceView:{
        flex:0.23,
        borderTopWidth: 0.5,
        borderTopColor: colors.grey1900
    }
})