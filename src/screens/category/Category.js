import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import CategoryElement from './components/CategoryElement'
import { products } from '../../data/data'

import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, withTiming, Easing, } from 'react-native-reanimated';
import SearchFilter from '../../components/input/Search&Filter';

const Category = ({navigation}) => {

  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const translateY = useSharedValue(0);

  const actionBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY.value, {
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
        translateY.value = -2;
        // console.log("scrolling up");
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = -100;
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

  const categoriesList = {}
  products.map((item) => {
    if(categoriesList.hasOwnProperty(item.category)){
      categoriesList[item.category] += 1;
    }else{
      categoriesList[item.category] = 1;
    }
  })

  const categoriesData = Object.keys(categoriesList).map(categoryName => ({
    categoryName,
    totalItems: categoriesList[categoryName]
  }));

  return (
    <View style={styles.categoryContainer}>
      <Animated.View style={actionBarStyle}>
        <SearchFilter/>
      </Animated.View>
      <FlatList
        data={categoriesData }
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 50 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) =>(
          <CategoryElement 
            categoryName={item.categoryName} 
            totalItems={item.totalItems}  
            onPress={()=> navigation.navigate('category-screen', { categoryName: item.categoryName})} />
        )}
        keyExtractor={(item) => item.categoryName}
        style={styles.flat}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      />
    </View>
  )
}


export default memo(Category)

const styles = StyleSheet.create({
  categoryContainer:{
    flex:1,
  },
  flat:{
    zIndex: -10
  }
})