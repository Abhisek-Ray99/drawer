import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import CategoryElement from './components/CategoryElement'
import { products } from '../../data/data'

const Category = ({navigation}) => {

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
      <FlatList
        data={categoriesData }
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) =>(
          <CategoryElement 
            categoryName={item.categoryName} 
            totalItems={item.totalItems}  
            onPress={()=> navigation.navigate('category-screen', { categoryName: item.categoryName})} />
        )}
        keyExtractor={(item) => item.categoryName}
      />
    </View>
  )
}


export default memo(Category)

const styles = StyleSheet.create({
  categoryContainer:{
    flex:1,
    paddingHorizontal: 10
  }
})