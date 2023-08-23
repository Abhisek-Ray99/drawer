import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../text/AppText'
import { colors } from '../../constants/colors'

const Tag = ({
    children,
    boxColor=colors.grey100,
    titleColor=colors.heavyblue,
    borderColor=null,
    borderW=null
}) => {
  return (
    <View style={[{ backgroundColor: boxColor, borderWidth:borderW , borderColor: borderColor}, styles.tagStyle]}>
      <AppText style={[{color: titleColor}, styles.tagText]}>{children.toUpperCase()}</AppText>
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
    tagStyle: {
        alignItems: 'center',
        borderRadius: 7
    },
    tagText:{
        fontSize: 12,
        fontWeight: '700',
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 4
        
    }
})