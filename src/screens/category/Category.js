import { StyleSheet } from 'react-native'
import React, {memo, useState} from 'react'
import CategoryElement from './components/CategoryElement'

import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, withTiming, Easing, } from 'react-native-reanimated';
import SearchFilter from '../../components/input/Search&Filter';
import { SafeAreaView } from 'react-native-safe-area-context';

const Category = ({route, navigation}) => {

  const products = Object.values(route.params.products);

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
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState(categoriesData)

  const handleInputChange = (value) => {
    setSearchTerm(value);
    filterData(value)
  }

  const filterData = (searchTerm) => {
    const filteredData = categoriesData.filter((item) => 
      item.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredData(filteredData)
  }

  return (
    <SafeAreaView style={styles.categoryContainer}>
      <Animated.View style={actionBarStyle}>
        <SearchFilter onChangeText={value => handleInputChange(value)} value={searchTerm} />
      </Animated.View>
      <Animated.FlatList
        data={ filteredData }
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 60 }}
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
    </SafeAreaView>
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