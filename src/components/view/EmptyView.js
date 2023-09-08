import { StyleSheet, Text, View, Image } from 'react-native'
import React, {memo} from 'react'

const EmptyView = ({
    imagesource
}) => {
  return (
    <View style={styles.container}>
        <Image source={imagesource} style={styles.emptyimg} /> 
        <Text>No Item Found</Text>
    </View>
  )
}

export default memo(EmptyView)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    emptyimg:{
        width: 100,
        height: 100
    }
})