import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {memo} from 'react'
import AppText from '../../../components/text/AppText'

const ViewItem = ({
    icon,
    title,
    descript,
    bgColor="grey",
    borderC="black",
    TxtColor,
    style
}) => {
  return (
    <Pressable>
      <View style={[{backgroundColor: bgColor, borderColor: borderC}, styles.container, style]}>
      {icon}
        <View style={[styles.textview, {color: TxtColor}]}>
          <AppText style={styles.text1}>{title}</AppText>
          <Text>{descript}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default memo(ViewItem)

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: 1,
        paddingVertical: 14,
        paddingHorizontal: 18
    },
    textview:{
        marginHorizontal: 20
    },
    text1:{
      fontSize: 20
    }
})