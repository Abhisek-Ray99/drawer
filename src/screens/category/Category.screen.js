import { FlatList, StyleSheet, Pressable, View, BackHandler } from 'react-native'
import React, {memo, useState, useEffect, useLayoutEffect, useCallback, useRef, useMemo} from 'react'
import {
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../constants/colors'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { products } from '../../data/data'
import ProductElement from '../product/components/ProductElement'
import Button from '../items/components/Button';

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.rightbtn}>
            <Pressable
                style={{padding: 10}}
                android_ripple={{color: colors.grey1900, borderless: true}}
                onPress={()=> {
                  handlePresentModalPress()
                }}
            >
                <MaterialIcons name="add" size={22} color={colors.royalblue100} />
            </Pressable>
        </View>
    ),
    });
  }, [navigation])

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '25%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    // console.log('handleSheetChanges', index);
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
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#cfd9df', '#e2ebf0', '#E1E1EC' ]} style={styles.contentContainer}>
          <Button name="Add a Item" IconName="package-variant" onPress={()=> {handleDismissModalPress() ,navigation.navigate('add-item')}} />
          <Button name="Add Item via Scan" IconName="barcode-scan" onPress={()=> {handleDismissModalPress() ,navigation.navigate('barcode-item')}}/>
        </LinearGradient>
      </BottomSheetModal>
    </View>
  )
}
export default memo(CategoryScreen)

const styles = StyleSheet.create({
  CategoryScreen:{
    flex:1,
  },
  rightbtn:{
    backgroundColor: colors.lightblue,
    marginRight: 20,
    borderRadius: 7,
    elevation: 2
  }
})