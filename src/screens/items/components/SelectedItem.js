import { StyleSheet, View, Image, Pressable } from 'react-native'
import React, {memo, useState} from 'react'
import TextLink from '../../../components/text/TextLink'

import AntDesign from 'react-native-vector-icons/AntDesign'
import AppText from '../../../components/text/AppText'
import { colors } from '../../../constants/colors'
import { windowWidth } from '../../../utils/Dimension'
import { NotoSans } from '../../../constants/fonts'
import { products } from '../../../constants/Images'

const SelectedItem = ({
    item,
    onPress,
    updateCountAndTotalPrice, 
    popIn
}) => {
  const [count, setCount] = useState(1) 
  const [totalprice, setTotalprice] = useState(item.price) 

  const handleIncreaseItem = function(){
    setTotalprice((prev)=> parseInt(prev) + parseInt(item.price))
    setCount((prev)=> prev + 1)
  }

  const handleDecreaseItem = function(){
    setTotalprice((prev)=> parseInt(prev) - parseInt(item.price))
    setCount((prev)=> prev - 1)
  }


  return (
    <View style={styles.box1} key={item.id}>
        <View style={styles.itemview}>
        <Image source={products} resizeMode='contain' style={styles.img1} />
        <View>
            <AppText fontfamily={NotoSans['700']} size={13}>{item.name}</AppText>
            <AppText fontfamily={NotoSans['700']} size={13}>{`₹ ${item.price}`}</AppText>
            <TextLink 
                title="Edit"
                lefticon={<AntDesign name="down" size={8} color={colors.primary } />}
                onPress={() => {onPress(), updateCountAndTotalPrice(count, totalprice)}}
            />
        </View>
        </View>
        <View style={styles.counterview}>
            <View style={styles.contentcounter}>
                <Pressable
                    onPress={handleDecreaseItem}
                >
                    <AntDesign name="minus" size={16} />
                </Pressable>
                <AppText>{count}</AppText>
                <Pressable
                    onPress={()=> count < 5 ? handleIncreaseItem() : popIn()}

                >
                    <AntDesign name="plus" size={16} />
                </Pressable>
            </View>
            <View style={styles.totalview}>
                <AppText style={{textAlign: 'right'}}>{`₹ ${totalprice}`}</AppText>
            </View>
        </View> 
    </View>
  )
}

export default memo(SelectedItem)

const styles = StyleSheet.create({
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
    itemview:{
        flexDirection: 'row',
    },
    counterview:{
        paddingHorizontal: 12
    },
    contentcounter:{
        width: windowWidth/4,
        paddingVertical: 6,
        borderRadius: 10,
        backgroundColor: colors.white,
        elevation: 1.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    totalview:{
        paddingVertical: 2,
        paddingHorizontal: 4
    },
})