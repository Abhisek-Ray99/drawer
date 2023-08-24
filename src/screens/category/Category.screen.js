import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {memo, useState} from 'react'
import { colors } from '../../constants/colors'

import { products } from '../../data/data'
import ProductElement from '../product/components/ProductElement'

const CategoryScreen = ({route, navigation}) => {
  // console.log(route.params.categoryName);
  const items = products.filter((item) => item.category == route.params.categoryName)

  const [visible, setVisible] = useState(false);
  const show = () => {
    setVisible(true)
    console.log("hide")
  }
  const hide = () => {
    setVisible(false)
  }

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