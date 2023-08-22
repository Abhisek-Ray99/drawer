import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryElement from './components/CategoryElement'

const Category = ({navigation}) => {
  return (
    <View style={styles.categoryContainer}>
      <CategoryElement 
        categoryName={"Items Not in Any Category"} 
        totalItems={1}  
        onPress={()=> navigation.navigate('category-screen')} />
      <CategoryElement 
        categoryName={"Pants👖"} 
        totalItems={1}
        onPress={()=> navigation.navigate('category-screen')} />
      <CategoryElement 
        categoryName={"Shirts👕"} 
        totalItems={23}
        onPress={()=> navigation.navigate('category-screen')} />
      <CategoryElement 
        categoryName={"Perfumes"} 
        totalItems={0}
        onPress={()=> navigation.navigate('category-screen')} />
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  categoryContainer:{
    flex:1,
    paddingHorizontal: 10
  }
})