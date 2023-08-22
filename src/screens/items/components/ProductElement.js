import { StyleSheet, Pressable, View, Modal, Text } from 'react-native'
import React, {useState} from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../../constants/colors'

import { windowHeight, windowWidth } from '../../../utils/Dimension'
import AppText from '../../../components/text/AppText'
import Tag from '../../../components/tags/Tag'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const boxHeight = (windowHeight - 0 * 2)/12;
const boxWidth = (windowWidth - 0 * 2)/5;

const ProductElement = ({
  productImg=null,
  productStyle,
  onPress
}) => {

  const [visible, setVisible] = useState(false);
  const show = () => {
    setVisible(true)
  }
  const hide = () => {
    setVisible(false)
  }

  return (
    <Pressable
      onPress={onPress}
    >
      <View style={styles.productContainer}>
        <View style={[styles.productContainer1, productStyle]}>
          <View>
            {productImg ? {productImg} : (
              <View style={styles.imgstyle}>
                <MaterialCommunityIcons name="package" size={44} color={colors.grey1900} />
              </View>
            )}
          </View>
          <View style={styles.desc}>
              <AppText style={styles.idstyle}>DFRIE456778</AppText>
              <AppText style={styles.productName}>Nivea Perfumes</AppText>
              <View style={styles.unitPrice}>
                <Tag>1 Unit</Tag>
                <AppText style={styles.amountStyle}>$6789</AppText>
              </View>
          </View>
        </View>
        <Pressable 
          hitSlop={{top: 50, left: 50, right: 50, bottom: 100}}
          pressRetentionOffset={100}
          onPress={show}>
            <MaterialIcons name="more-vert" size={26} color={colors.grey300} />
        </Pressable>
        <Modal
          animationType="slide"
          visible={visible}
          onRequestClose={hide}
          transparent
        >
          <Pressable style={styles.upper} onPress={hide} />
          <View style={styles.lower}>
                <Text onPress={hide}>hide</Text>
          </View>
        </Modal>
      </View>
    </Pressable>

  )
}

export default ProductElement

const styles = StyleSheet.create({
  productContainer:{
    backgroundColor: colors.alice,
    borderRadius: 7,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  productContainer1:{
    flexDirection: 'row'
  },
  imgstyle:{
    backgroundColor: colors.flashWhite,
    height: boxHeight,
    width: boxWidth,
    alignItems: 'center',
    justifyContent: 'center'
  },
  unitPrice:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 6
  },
  desc:{
    paddingHorizontal: 10
  },
  idstyle:{
    color: colors.grey1900,
    fontSize: 12,
  },
  productName:{
    fontSize: 16
  },
  amountStyle:{
    paddingHorizontal: 10
  },
  fill:{
    flex: 1,
  },
  upper:{
    height: 100
  },
  lower:{
    flex:1,
    backgroundColor: colors.white
  }
})