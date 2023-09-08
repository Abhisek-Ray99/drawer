

import { StyleSheet, Text, View, SectionList, BackHandler } from 'react-native'
import React, {memo, useEffect, useState} from 'react'
import InvoiceElement from './components/InvoiceElement'
import { colors } from '../../constants/colors'

import { useNavigation } from '@react-navigation/native';

import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, withTiming, Easing, } from 'react-native-reanimated';
import SearchFilter from '../../components/input/Search&Filter'
import EmptyView from '../../components/view/EmptyView';

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

const Transactions = ({route}) => {

  const transactions = Object.values(route.params)

  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState(transactions)

  const handleInputChange = (value) => {
    setSearchTerm(value);
    filterData(value)
  }

  const filterData = (searchTerm) => {
    const filteredData = transactions.filter((item) => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredData(filteredData)
  }

  const navigation = useNavigation();

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
    <View style={styles.searchview}>
      <Animated.View style={actionBarStyle}>
        <SearchFilter onChangeText={value => handleInputChange(value)} value={searchTerm} />
      </Animated.View>
      <AnimatedSectionList
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 50 }}
        sections={filteredData}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <View style={styles.transactionslist}>
            <InvoiceElement item={item} onPress={()=> navigation.navigate("invoice",{})} />
          </View>
        )}
        renderSectionHeader={({section: {title,data}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        scrollEventThrottle={16}
        ListEmptyComponent={
          <EmptyView imagesource={require('../../assets/img/details.png')} />
        }
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.section}
      />
    </View>
  )
}

export default memo(Transactions)

const styles = StyleSheet.create({
  searchview:{
    
  },
  transactionslist:{
    paddingTop: 10
  },
  header:{
    backgroundColor: colors.grey2000,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    color: colors.black,
    marginVertical: 10
  },
  section:{
    zIndex: -10
  }
})