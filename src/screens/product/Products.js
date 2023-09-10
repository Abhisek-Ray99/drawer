import { StyleSheet, View, SafeAreaView, BackHandler} from 'react-native'
import React, { useEffect, useCallback, useRef, useMemo,useState, memo } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, withTiming, Easing, } from 'react-native-reanimated';
import { useRoute } from '@react-navigation/native';


import ActionButton from '../items/components/ActionButton'
import Button from '../items/components/Button';
import { colors } from '../../constants/colors';
import ProductElement from './components/ProductElement';
import SearchFilter from '../../components/input/Search&Filter';
import { windowHeight } from '../../utils/Dimension';
import AppText from '../../components/text/AppText';
import EmptyView from '../../components/view/EmptyView';


const Products = ({route, navigation}) => {

  const data = Object.values(route.params.products)

  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState(data)

  const handleInputChange = (value) => {
    setSearchTerm(value);
    filterData(value)
  }

  const filterData = (searchTerm) => {
    const filteredData = Object.values(route.params.products).filter((item) => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredData(filteredData)
  }
  
  const sheetroute = useRoute();
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

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (
        lastContentOffset.value > event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = -2;
        // console.log("scrolling up");
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = windowHeight;
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

  function handleBackButtonClick() {
    navigation.navigate('dashboard');
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);


  return (
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <SafeAreaView style={[styles.container, ]}>
              <View>
                <SearchFilter onChangeText={value => handleInputChange(value)} value={searchTerm} />
              </View>
              <Animated.FlatList
                contentContainerStyle={{ paddingBottom: 100, paddingTop: 50 }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={filteredData}
                renderItem={({item}) =>
                    <ProductElement item={item} onPress={()=> navigation.navigate('product-screen')} />
                }
                ListEmptyComponent={
                  <EmptyView imagesource={require('../../assets/img/details.png')} />
                }
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