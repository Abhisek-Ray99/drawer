import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { windowWidth } from '../../../utils/Dimension'
import AppText from '../../../components/text/AppText'
import { colors } from '../../../constants/colors'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native';

const HeaderBar = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.header}>
      <AppText style={styles.headerTitle}>Profile</AppText>
      <View style={styles.icons}>
        <Pressable onPress={()=> navigation.navigate("settings")} android_ripple={{color: colors.grey1900, borderless: false}}>
              <Ionicons name="settings" size={26} color={colors.black} />
        </Pressable>
        <Pressable onPress={()=> navigation.navigate("profile-edit")} android_ripple={{color: colors.grey1900, borderless: false}}>
            <FontAwesome name="edit" size={26} color={colors.black} />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
    header:{
        widht: windowWidth * 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 6,
        paddingVertical: 10,
    },
      headerTitle:{
        fontSize: 26,
        fontWeight: '700',
        paddingHorizontal: 10,
    },
      icons:{
        marginRight: 16,
        width: windowWidth/4,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})