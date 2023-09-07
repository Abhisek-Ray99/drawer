import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, {memo} from 'react'
import AppText from '../../components/text/AppText'

import { windowHeight, windowWidth } from '../../utils/Dimension';
import { colors } from '../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const boxHeight = (windowHeight - 0 * 2)/12;
const boxWidth = (windowWidth - 0 * 2)/6;

const DrawerItem = ({
    ItemTitle,
    onPress,
    img=null
}) => {
  return (
    <View style={{ borderRadius: 10, overflow: 'hidden' }}>
        <Pressable 
            onPress={onPress} 
            android_ripple={{color: colors.grey1900, borderless: false}}
            style={styles.drawerItemView}>
            <View style={styles.drawerItemView2}>
                {img ? 
                    <Image
                        style={styles.tinyLogo}
                        source={{
                        uri: item.img,
                        }}
                    /> 
                : 
                    <View style={styles.imgstyle}>
                        <AppText style={{fontSize: 22, fontWeight: '700'}}>{ItemTitle.charAt(0).toUpperCase()}</AppText>
                    </View> 
                }
                <AppText style={styles.itemText}>{ItemTitle}</AppText>
            </View>
            <View>
                <MaterialIcons name="more-vert" size={26} color={colors.grey300} />
            </View>
        </Pressable>
    </View>
    
  )
}

export default memo(DrawerItem)

const styles = StyleSheet.create({
    drawerItemView: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        justifyContent: 'space-between'
    },
    imgstyle:{
        backgroundColor: colors.flashWhite,
        height: boxHeight,
        width: boxWidth,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18
    },
    tinyLogo:{
        height: boxHeight,
        width: boxWidth,
    },
    itemText:{
        fontSize: 18,
        marginLeft: 20
    },
    drawerItemView2:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})