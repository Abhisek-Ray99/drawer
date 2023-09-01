import { StyleSheet, Text, View, Image } from 'react-native'
import React, {memo} from 'react'
import { windowWidth, windowHeight } from '../../utils/Dimension'
import AppBtn from '../button/AppBtn'
import { colors } from '../../constants/colors'

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const PurSaleView = ({
    bgColor="grey",
    BtnTitle,
    img
}) => {
  return (
    <View style={[{backgroundColor: bgColor}, styles.Container]}>

        <Image source={img} style={styles.img} />
        <AppBtn 
            BtnStyle={styles.btn} 
            title={BtnTitle}  
            rightIcon={
                <View style={styles.icon}>
                    <FontAwesome6 name="arrow-right-long" color={colors.white} size={16}  />
                </View>
            }
        />
    </View>
  )
}

export default memo(PurSaleView)

const styles = StyleSheet.create({
    Container:{
        width: windowWidth/2.4,
        height: windowHeight/4,
        borderRadius: 17,
        overflow: 'hidden'
    },
    btn:{
        position: 'absolute',
        backgroundColor: colors.sapphire,
        opacity: 0.9,
        borderRadius: 10,
        bottom: 4,
        left: 0,
        right: 0,
        margin: 12
    },
    icon:{
        backgroundColor: colors.asenic,
        padding: 4,
        borderRadius: 50,
    },
    img:{
        position: 'absolute',
        width: '40%',
        height: '60%',
        resizeMode: 'cover',
        bottom: -10,
        right: -4
    }
})