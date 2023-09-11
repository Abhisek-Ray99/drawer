import { StyleSheet, Text, View, Image } from 'react-native'
import React, {memo} from 'react'
import LottieView from 'lottie-react-native';

import AppText from '../text/AppText'
import { colors } from '../../constants/colors';

const EmptyView = ({
    imagesource,
    title,
    description,
    size=200
}) => {
  return (
    <View style={styles.container}>
        <LottieView
            source={imagesource}
            autoPlay
            loop
            style={[{width: size, height: size}]}
        />
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.desc}>{description}</AppText>
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
    title:{
        fontSize: 16,
        fontWeight: '700',
        paddingVertical: 10,
        color: colors.black,
    },
    desc:{
        color: colors.grey1800,
        textAlign: 'center',
        paddingVertical: 10
    }
})