import { StyleSheet, Text, View, Image, Pressable, Animated } from 'react-native'
import React, {useRef, memo} from 'react'
import AppText from '../text/AppText'
import { colors } from '../../constants/colors'
import { windowHeight, windowWidth } from '../../utils/Dimension'
import { mesh_51 } from '../../constants/Images'

const ImgBtn = ({
    onPress,
    Title,
    disabled,
    leftIcon,
    height= windowHeight/13,
    width= windowWidth/1.13,
    style
}) => {

  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    // Animate the button press effect
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: false, // Set to false when using layout properties like scale
    }).start();
  };

  const handlePressOut = () => {
    // Reset the button scale to its original size
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Pressable
        onPress={disabled ? null :onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.8}
    >
        <Animated.View style={[{opacity: disabled ? 0.4 : 1}, { transform: [{ scale: !disabled ?scaleValue: 1 }] }]}>
            <Image
            style={[{width: width, height: height},styles.img, style]}
            source={mesh_51}
            />
            <View style={styles.textview}>
                {leftIcon}
                <AppText style={styles.text}>{Title}</AppText>
            </View>
        </Animated.View>
    </Pressable>
  )
}

export default memo(ImgBtn)

const styles = StyleSheet.create({
    img:{
        borderRadius: 15,
    },
    text:{
        color: colors.white,
        fontSize: 18,
        fontWeight: '700',
    },
    textview:{
        position: 'absolute', 
        flexDirection: 'row',
        alignItems: 'center',
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 12, 
        justifyContent: 'center', 
        alignItems: 'center',
        gap: 10,
        paddingTop: 10
    }
})