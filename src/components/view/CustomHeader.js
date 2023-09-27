import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'

import { windowWidth } from '../../utils/Dimension'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../constants/colors'
import navigation from '../../navigation/navigation'

const CustomHeader = ({
    
}) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable
        onPress={() => {
            navigation.goBack();
        }} 
      >
        <View style={styles.headerbtn}>
            <MaterialCommunityIcons name="arrow-left-thin" size={24} color={colors.grey300} />
        </View>
      </Pressable>  
      <Pressable>
        <View style={styles.headerbtn}>
            <MaterialCommunityIcons name="plus" size={24} color={colors.grey300} />
        </View>
      </Pressable>
    </View>
  )
}

export default memo(CustomHeader)

const styles = StyleSheet.create({
    headerContainer:{
        width: windowWidth,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12
    },
    headerbtn:{
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.grey700,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    }
})