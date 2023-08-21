import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { memo, useLayoutEffect } from 'react'

import { windowWidth } from '../../utils/Dimension'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { colors } from '../../constants/colors'
import ImageSelect from './components/ImageSelect'
import ValuesView from './components/ValuesView'
import ItemInputField from './components/ItemInputField'
import AppText from '../../components/text/AppText'
import AppBtn from '../../components/button/AppBtn'

const AddItem = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
        headerLeft: () => (
          <Pressable onPress={()=> navigation.goBack()} style={styles.icon}>
            <AntDesign name="close" size={24} />
          </Pressable>
        )
    });
  }, [navigation])
  return (
    <View style={styles.barContainer}>
      <View style={styles.barContainer1}>
        <ImageSelect/>
      </View>
      <View style={styles.barContainer2}>
        <ItemInputField 
          fieldPlaceholder="Enter Item Name" 
          fieldIcon={<FontAwesome name="folder" size={16} style={{marginLeft: 20}} color={colors.grey1900} />}
          fieldLabel={"Item"}
          fieldStyle={styles.field} 
          inputStyle={styles.input} 
        />
      </View>
      <View style={styles.barContainer3}>
        <ValuesView/>
      </View>
      <View style={styles.barContainer4}>
        <AppText style={styles.container4Title}>QR / Barcodes ?</AppText>
        <AppBtn 
          title="CREATE CUSTOM LABEL" 
          BtnStyle={styles.btnStyle} 
          titleStyle={styles.btntitle} 
          leftIcon={
            <Ionicons name="pricetags-outline" size={24} style={styles.btnIcon} color={colors.grey1900} />
          }
        />
        <AppBtn 
          title="LINK QR / BARCODE" 
          BtnStyle={styles.btnStyle} 
          titleStyle={styles.btntitle} 
          leftIcon={
            <Ionicons name="barcode-outline" size={24} style={styles.btnIcon} color={colors.grey1900}/>
          }
        />
      </View>
    </View>
  )
}

export default memo(AddItem)

const styles = StyleSheet.create({
  barContainer:{
    flex: 1,
    backgroundColor: colors.white,
  },
  barContainer1:{
    flex: 1,
    alignItems: 'center'
  },
  barContainer2:{
    flex: 0.7,
  },
  barContainer3:{
    flex: 1,
  },
  barContainer4:{
    flex: 2,
    padding: 10
  },
  icon: {
    marginLeft: 20
  },
  field:{
    width: (windowWidth - 0 * 2)/1,
    borderWidth: 0,
  },
  input:{
    fontSize: 26,
    borderWidth: 0,
    color: colors.grey1500
  },
  textIcon:{
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    marginLeft: 20
  },
  container4Title:{
    color: colors.grey1500,
    fontWeight: '700',
    padding: 10
  },
  btnStyle:{
    backgroundColor: colors.grey1600,
    borderWidth: 1,
    borderColor: colors.grey1700,
    elevation: 0,
    margin: 10,
  },
  btntitle:{
    color: colors.grey1800,
    fontWeight: '700'
  },
})