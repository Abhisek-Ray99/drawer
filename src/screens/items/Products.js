import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useRef, useMemo } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import ActionButton from './components/ActionButton'

import {
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import Button from './components/Button';
import { colors } from '../../constants/colors';
import ProductElement from './components/ProductElement';

const Products = ({navigation}) => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <View style={styles.container}>
            <ProductElement onPress={()=> navigation.navigate('product-screen')} />
            <ActionButton
              onPress={handlePresentModalPress}
              title="Present Modal"
              color="black"
            />
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
          </View>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
  )
}

export default Products

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.wheat100
  },
})