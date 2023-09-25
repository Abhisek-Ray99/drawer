import { StyleSheet, View, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React, { memo, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import TextBtn from '../../components/button/TextBtn'
import { windowHeight, windowWidth } from '../../utils/Dimension';
import { colors } from '../../constants/colors';
import AppText from '../../components/text/AppText';
import TextLink from '../../components/text/TextLink';
import Divider from '../../components/divider/Divider';
import GradientBtn from '../../components/button/GradientBtn';
import AppBtn from '../../components/button/AppBtn';
import AnimatedPressable from '../../components/button/AnimatedPressable';
import AppGradientBtn from '../../components/button/AppGradientBtn';

const SelectItemScreen = ({route}) => {
  const navigation = useNavigation();
  const { params: items } = route

  const [count, setCount] = useState(1)
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextBtn 
          leftIcon={<AntDesign name="close" size={26} />}
          onPress={() => {
            navigation.goBack();
          }}
          borderless={true}
        />
      </View>
      <View style={styles.content}>
        <ScrollView>
          <AppText style={styles.headerText}>{`DROp ITEM(S) ADDED `}</AppText>
          <View style={styles.mainContainer}>
              <View style={styles.view1}>
                {
                  items.map((item) => 
                    <View style={styles.box1} key={item.id}>
                      <View style={styles.itemview}>
                        <Image source={require('../../assets/img/products.png')} resizeMode='contain' style={styles.img1} />
                        <View>
                          <AppText fontfamily="NotoSans-Bold" size={13}>{item.name}</AppText>
                          <AppText fontfamily="NotoSans-Bold" size={13}>{`₹ ${item.price}`}</AppText>
                          <TextLink 
                            title="Edit"
                            lefticon={<AntDesign name="down" size={8} color={colors.primary } />}
                          />
                        </View>
                      </View>
                      <View style={styles.counterview}>
                        <View style={styles.contentcounter}>
                          <Pressable>
                            <AntDesign name="minus" size={16} />
                          </Pressable>
                          <AppText>{count}</AppText>
                          <Pressable>
                            <AntDesign name="plus" size={16} />
                          </Pressable>
                        </View>
                        <View style={styles.totalview}>
                          <AppText>₹ 45.54</AppText>
                        </View>
                      </View> 
                    </View>
                  )
                }
                <View style={styles.addview}>
                  <Divider dashed={true} />
                  <View style={styles.additemview}>
                    <View style={[styles.additemview, {gap: 8}]}>
                      <AntDesign name="pluscircleo" size={16} />
                      <AppText>Add more items</AppText>
                    </View>
                    <AntDesign name="right" size={16} />
                  </View>
                </View>
              </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.stickContainer}>
        <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-around',
            paddingTop: 6
          }}>
          <View>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <AntDesign name="pluscircle" size={30} />
              <AppText style={styles.text}>Actions</AppText>
            </TouchableOpacity>
          </View>
          <View>
            <AnimatedPressable>
              <AppGradientBtn title="Sell"/>
            </AnimatedPressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default memo(SelectItemScreen)

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    width: windowWidth/8,
    marginTop: 30,
    marginLeft: 10,
  },
  content:{
    flex: 4,
  },
  stickContainer:{
    flex: 0.4,
    backgroundColor: colors.white,
    borderTopWidth: 1.2,
    borderColor: colors.grey100,
  },
  mainContainer:{
    alignItems: 'center',
    marginTop: 10
  },
  box1:{
    width: windowWidth/1.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  img1:{
    width:30,
    height: 30,
    resizeMode: 'contain',
    paddingHorizontal: 30
  },
  headerText:{
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'NotoSans-Medium',
    letterSpacing: 2
  },
  view1:{
    backgroundColor: colors.grey200,
    borderRadius: 15,
  },
  contentcounter:{
    width: windowWidth/4,
    paddingVertical: 6,
    marginHorizontal: 12,
    borderRadius: 10,
    backgroundColor: colors.white,
    elevation: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  itemview:{
    flexDirection: 'row',
  },
  totalview:{
    paddingVertical: 2,
    marginLeft: 60
  },
  additemview:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    alignItems: 'center'
  },
  addview:{
    paddingHorizontal: 16
  },
  text:{
    fontFamily: 'NotoSans-Bold'

  }
})