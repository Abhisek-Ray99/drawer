import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import {
    DrawerContentScrollView,
  } from '@react-navigation/drawer';
import AppText from '../../components/text/AppText';
import DrawerItem from './DrawerItem';

const CustomDrawerContent = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.drawerContainer}>
        <View style={styles.TitleView}>
            <AppText style={styles.drawerTitle}>Inventories</AppText>
        </View>
        <DrawerContentScrollView style={styles.drawerListView}>
            <DrawerItem ItemTitle="shop1" />
            <DrawerItem ItemTitle="shop1" />
        </DrawerContentScrollView>
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
        padding: 10
    },
    drawerTitle:{
        fontSize: 22,
        fontWeight: '700'
    }
})