import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React, { useCallback, useRef, useMemo,useState, memo } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import ActionButton from '../items/components/ActionButton'

import {
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import Button from '../items/components/Button';
import { colors } from '../../constants/colors';
import ProductElement from './components/ProductElement';

import { products } from '../../data/data';

import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, withTiming, Easing, } from 'react-native-reanimated';
import SearchFilter from '../../components/input/Search&Filter';


const Products = ({navigation}) => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    // console.log('handleSheetChanges', index);
  }, []);

  const [visible, setVisible] = useState(false);
  const show = () => {
    setVisible(true)
    // console.log("hide")
  }
  const hide = () => {
    setVisible(false)
  }

  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const translateY = useSharedValue(0);

  const actionBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY.value, {
            duration: 300,
            easing: Easing.inOut(Easing.quad),
          }),
        },
      ],
    };
  });

  const searchFilterStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY.value , {
            duration: 300,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (
        lastContentOffset.value > event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = 0;
        // console.log("scrolling up");
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = 110;
        // console.log("scrolling down");
      }
      lastContentOffset.value = event.contentOffset.y;
    },
    onBeginDrag: (e) => {
      isScrolling.value = true;
    },
    onEndDrag: (e) => {
      isScrolling.value = false;
    },
  });

  return (
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <SafeAreaView style={[styles.container, ]}>
              <Animated.View style={searchFilterStyle}>
                <SearchFilter/>
              </Animated.View>
              <Animated.FlatList
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 50 }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={products}
                renderItem={({item}) => <ProductElement item={item} onPress={()=> navigation.navigate('product-screen')} show={show} hide={hide} visible={visible} />}
                keyExtractor={item => item.id}
                style={styles.productflatlist}
                scrollEventThrottle={16}
                onScroll={scrollHandler}
              />
            <Animated.View style={actionBarStyle}>
              <ActionButton
                onPress={handlePresentModalPress}
                title="Present Modal"
                color="black"
              />
            </Animated.View>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
            >
              <View style={styles.contentContainer}>
                <Button name="Add a Item" IconName="package-variant" onPress={()=> navigation.navigate('add-item')} />
                <Button name="Add Item via Scan" IconName="barcode-scan" onPress={()=> navigation.navigate('barcode-item')}/>
              </View>
            </BottomSheetModal>
          </SafeAreaView>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
  )
}

export default memo(Products);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.wheat100
  },
  productflatlist:{
    padding: 10,
    zIndex: -10
  },
})