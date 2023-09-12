import { FlatList, StyleSheet, Text, View, BackHandler } from 'react-native'
import React, {memo, useState, useEffect} from 'react'
import { colors } from '../../constants/colors'

import { products } from '../../data/data'
import ProductElement from '../product/components/ProductElement'

const CategoryScreen = ({route, navigation}) => {
  // console.log(route.params.categoryName);
  const items = products.filter((item) => item.category == route.params.categoryName)

  const [visible, setVisible] = useState(false);
  const show = () => {
    setVisible(true)
    // console.log("hide")
  }
  const hide = () => {
    setVisible(false)
  }

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);

  return (
    <View style={styles.CategoryScreenContainer}>
      <FlatList
        data={ items }
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) =>(
          <ProductElement item={item} onPress={()=> navigation.navigate('product-screen')} show={show} hide={hide} visible={visible} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
export default memo(CategoryScreen)

const styles = StyleSheet.create({
  CategoryScreen:{
    flex:1,
  }
})