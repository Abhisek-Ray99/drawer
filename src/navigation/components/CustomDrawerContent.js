import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, {memo, useState} from 'react'

import { useNavigation } from '@react-navigation/native';
import {
    DrawerContentScrollView,
  } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import { Modal } from "./Modal";

import AppText from '../../components/text/AppText';
import DrawerItem from './DrawerItem';
import { colors } from '../../constants/colors';

import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import TextBtn from '../../components/button/TextBtn';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import ProfileImage from '../../screens/profile/components/ProfileImage';

import { useDispatch } from '../../redux/store';
import { setLogout } from '../../redux/slices/user';

const CustomDrawerContent = ({inventories, userData}) => {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const { fullname, mail, type } = userData
    const [selected, setSelected] = useState(inventories[0].name);
    const handleName = (item) => {
        setSelected(item.name);
    };

    const navigation = useNavigation();
    return (
        <View style={styles.drawerContainer}>
            <LinearGradient  colors={['#cfd9df', '#e2ebf0', '#fff']} style={styles.toprofile}>
                <Pressable
                    onPress={()=> navigation.navigate('profile', {fullname})}
                >
                    <Image
                        style={styles.Img}
                        source={require('../../assets/img/mesh-51.png')}
                    />
                    <View style={styles.profilethumb}>
                        <ProfileImage imgwidth={40} imgheight={40} size={25} style={styles.imgview} />
                        <View style={styles.thumtextview}>
                            <AppText style={[styles.thumbtext, styles.thumbtext_head]}>
                                {
                                    fullname.length <= 14 ? fullname : fullname.slice(0,14)+'...'
                                }
                            </AppText>
                            <AppText style={[styles.thumbtext, styles.thumbtext_tail]}>{mail}</AppText>
                        </View>
                    </View>
                </Pressable>
            </LinearGradient >
            <DrawerContentScrollView style={styles.drawerListView}>
                <View style={styles.TitleView}>
                    <AppText style={styles.drawerTitle}>Inventories</AppText>
                </View>
                {
                    inventories.map((inventory,index) => (
                        <DrawerItem 
                            key={index}
                            ItemTitle={inventory.name} 
                            onPress={() => {navigation.navigate(inventory.name), handleName(inventory)}} 
                            borderColor={
                                inventory.name === selected
                                  ? colors.heavyblue
                                  : "transparent"
                            }
                        />
                    ))
                }
            </DrawerContentScrollView>
            <View style={styles.preferenceView}>
                {
                    type === "owner" ? (
                        <>
                            <TextBtn 
                                TextStyle={styles.txtbtn}
                                TextTitle="Create a new inventory" 
                                onPress={()=> navigation.navigate('create-inventory')}
                                leftIcon={
                                    <Ionicons name="add-circle-outline" size={26} />
                                } 
                            />
                            <TextBtn 
                                TextStyle={styles.txtbtn}
                                TextTitle="View Members" 
                                onPress={()=> navigation.navigate('view-members')}
                                leftIcon={
                                    <Ionicons name="people-outline" size={24} />
                                } 
                            />
                        </>
                    ) : null
                }
                <TextBtn 
                    TextStyle={styles.txtbtn}
                    TextTitle="Preferences" 
                    onPress={()=> navigation.navigate('preferences')}
                    leftIcon={
                        <Ionicons name="settings-outline" size={24} />
                    } 
                />
                <TextBtn 
                    TextStyle={styles.txtbtn}
                    TextTitle="Sign out" 
                    onPress={handleModal}
                    leftIcon={
                        <AntDesign name="logout" size={22} />
                    } 
                />
            </View>
            <Modal isVisible={isModalVisible}>
            <Modal.Container>
                <Modal.Header title="Are you sure you want to sign out?" />
                <Modal.Body>
                    <Text style={styles.text}>Please ensure your items & folders have synced before signing out.</Text>
                </Modal.Body>
                <Modal.Footer>
                    <TextBtn TextStyle={[styles.popupBtn, {color: colors.heavyblue}]} TextTitle="Cancel" onPress={handleModal} />
                    <TextBtn TextStyle={[styles.popupBtn, {color: colors.redheavy100}]} TextTitle="Sign Out" onPress={() => dispatch(setLogout())} />
                </Modal.Footer>
            </Modal.Container>
            </Modal>
        </View>
    )
}

export default memo(CustomDrawerContent)

const styles = StyleSheet.create({
    drawerContainer:{
        flex:1,
        overflow: 'hidden',
    },
    toprofile:{
        width: windowWidth/1.17,
        height: windowHeight/8,
        paddingHorizontal: 10,
        paddingTop: 34
    },
    Img:{
        width: '100%',
        height: '100%',
        borderRadius: 7,
    },
    TitleView:{
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    drawerListView:{
        paddingHorizontal: 10,
    },
    drawerTitle:{
        fontSize: 22,
        fontWeight: '700'
    },
    preferenceView:{
        borderTopWidth: 0.5,
        borderTopColor: colors.grey1900
    },
    profilethumb:{
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        top:0,
        bottom: 0,
        left: 20,
    },
    imgview:{
        borderColor: 'grey',
        borderWidth: 1
    },
    thumbtext:{
        color: colors.grey400
    },
    thumtextview:{
        left: 20,
    },
    thumbtext_head:{
        fontSize: 18,
        fontWeight: '700'
    },
    thumbtext_tail:{
        fontSize: 12
    },
    righticon:{
        color: colors.grey400,
        top: 0,
        bottom: 0,
        left: 70
    },
    popupBtn:{
        fontWeight: 'bold',
    },
    txtbtn:{
        marginLeft: 16,
    }
})