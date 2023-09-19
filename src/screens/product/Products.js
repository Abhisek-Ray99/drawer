import { StyleSheet, View, SafeAreaView, BackHandler} from 'react-native'
import React, { useCallback, useRef, useMemo,useState, memo, useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, withTiming, Easing, } from 'react-native-reanimated';
import { useRoute, useFocusEffect } from '@react-navigation/native';



import animation from '../../assets/img/animation_1.json';
import ActionButton from '../items/components/ActionButton'
import Button from '../items/components/Button';
import { colors } from '../../constants/colors';
import ProductElement from './components/ProductElement';
import SearchFilter from '../../components/input/Search&Filter';
import { windowHeight } from '../../utils/Dimension';
import EmptyView from '../../components/view/LottieView';
import LottieView from '../../components/view/LottieView';
import Popup from '../../components/popup/Popup';


const Products = ({route, navigation}) => {

  const data = Object.values(route.params.products)

  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState(data)
  const [selectedData, setSelectedData] = useState([])

  // Create an array to track the active state for each item
  const [activeStates, setActiveStates] = useState([]);

  useEffect(() => {
    setActiveStates(filteredData.map(() => false));
  }, [filteredData]);

  useEffect(() => {
    // Update selectedData whenever activeStates changes
    setSelectedData(filteredData.filter((_, index) => activeStates[index]));
  }, [activeStates]);

  const toggleActiveState = (index) => {
    // Update the active state for the specific item
    setActiveStates((prevStates) => {
      const newActiveStates = [...prevStates];
      newActiveStates[index] = !newActiveStates[index];
      return newActiveStates;
    })
  };

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
  const snapPoints = useMemo(() => ['12%', '35%'], []);

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
        translateY.value = 160;
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

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('dashboard');
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onBackPress
        );
      };
    }, []),
  );

  const popupTranslateX = useSharedValue(0);
  const popupTranslateY = useSharedValue(0);

  const handlePress = () => {
    if(activeStates.every(element => element === false)){
      popupTranslateY.value = 0;
    }else{
      popupTranslateY.value = -84;
    }
  };
  handlePress();

  const handlePressdown = () => {
      popupTranslateX.value = 0
      popupTranslateY.value = 0;
      setActiveStates(filteredData.map(() => false))
  }
  
  const popupBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(popupTranslateY.value, {
            duration: 300,
            easing: Easing.inOut(Easing.quad),
          }),
        },
      ],
    };
  });

  const handlePressRight = () => {
    if (popupTranslateX.value === 0) {
      popupTranslateX.value = -100;
    } else {
      popupTranslateX.value = 0;
    }
  };
  const popupBarRightStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(popupTranslateX.value, {
            duration: 300,
            easing: Easing.inOut(Easing.quad),
          }),
        },
      ],
    };
  });
  

  return (
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <SafeAreaView style={[styles.container, ]}>
            <View>
              {
              Array.isArray(data) && data?.length ? (
                <View style={styles.emptycontainer}>
                  <View>
                    <SearchFilter onChangeText={value => handleInputChange(value)} value={searchTerm} />
                  </View>
                  <Animated.FlatList
                    contentContainerStyle={{ paddingBottom: 140, paddingTop: 50 }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={filteredData}
                    renderItem={({item, index}) =>
                        <ProductElement 
                          item={item} 
                          onPress={()=> navigation.navigate('product-screen')} 
                          onLongPress={()=> {
                            toggleActiveState(index);
                          }}
                          activebar={activeStates[index]}
                        />
                    }
                    ListEmptyComponent={
                      <EmptyView 
                        title="no product found"
                        imagesource={animation}
                        style={{marginTop: 100}} 
                      />
                    }
                    keyExtractor={item => item.id}
                    style={styles.productflatlist}
                    scrollEventThrottle={16}
                    onScroll={scrollHandler}
                  />
                </View>
              ) : (
                <View style={styles.emptycontainer}>
                  <View style={styles.containerlottie}>
                      <LottieView
                        title="It's empty here"
                        imagesource={animation}
                        description="Add your item by tapping the '+' "
                        size={200}
                      />
                    </View>
                </View>
              )
            }
            </View>
            <Animated.View style={actionBarStyle}>
              {
                activeStates.every(element => element === false) && <ActionButton
                onPress={()=> {
                  handlePresentModalPress()
                }}
                title="Present Modal"
                color="black"
              />
              }
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
              <Popup 
                style={popupBarStyle} 
                style2={popupBarRightStyle}
                moveRight={handlePressRight} 
                handledown={handlePressdown}
              />
              
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
  containerlottie: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left:0,
    right: 0,
    margin: 'auto',
  },
  actbtn:{
    
  },
  emptycontainer:{
    height: windowHeight/1.1,
  }
})
