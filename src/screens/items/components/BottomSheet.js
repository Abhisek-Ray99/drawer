import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useImperativeHandle } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

import { useNavigation } from '@react-navigation/native';

import Button from './Button'

const {height: SCREEN_HEIGHT} = Dimensions.get('window')
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50


const BottomSheet = React.forwardRef(({}, ref) => { 

    const navigation = useNavigation();

    // ----------------- similar to Animated.Values -------------------
    const translateY = useSharedValue(0)
    const active = useSharedValue(false)

    // -------------- Scroll animation of View Component ---------- //
    const scrollTo = useCallback((destination) => {
        "worklet"
        if(destination === 0){
            active.value = false
        }else{
            active.value = true
        }
        // provides a basic spring physics model (withSpring)
        translateY.value = withSpring(destination, { damping: 50 })
    },[])

    // -----------------  Track of Animation Active or Deactive ------------ //
    const isActive = useCallback(() => {
        return active.value;
    }, [])

    // ----------- use to reference with BottomSheet Component -------- //
    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive])

    const context = useSharedValue({ y: 0 })
    const gesture = Gesture.Pan()
    .onStart(() => {
        context.value = { y: translateY.value }
    })
    .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y
        translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT)
    })
    .onEnd(() => {
        if(translateY.value > -SCREEN_HEIGHT/3){
            scrollTo(0)
        }else if(translateY.value < -SCREEN_HEIGHT/1.5){
            scrollTo(MAX_TRANSLATE_Y)
        }
    })

    //----------------- border radius animation of bottom sheet -------
    const rBottomSheetStyle = useAnimatedStyle(() => {
        // -----------interpolate used to map the range , where animation appear
        const borderRadius = interpolate(
            translateY.value, 
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y], 
            [25,5],
            Extrapolate.CLAMP
        )
        return{
            borderRadius,
            transform: [{ translateY: translateY.value }]
        }
    })
    // ----------------- END ------------------------------------------

  return (
    // ---------------- Detect hand Gesture on Device <GestureDetector> ------------- 
    <GestureDetector gesture={gesture}>

        {/* Animation of View Component so used Animated.View */}
        <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
            <View style={styles.line}/>
            <View>
                <Button name="Add a Item" IconName="package-variant" onPress={()=> navigation.navigate('add-item')} />
                <Button name="Add Item via Scan" IconName="barcode-scan" onPress={()=> navigation.navigate('barcode-item')}/>
            </View>
        </Animated.View>
    </GestureDetector>
  )
})

export default BottomSheet

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: '#F5EFE6',
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2,
    }
})