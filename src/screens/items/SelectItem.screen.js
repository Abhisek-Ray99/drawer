import { StyleSheet, View, ScrollView, Pressable, TouchableOpacity, StatusBar, Animated } from 'react-native'
import React, { memo, useState, useRef } from 'react'
import Modal from "react-native-modal";
import LottieView from 'lottie-react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import TextBtn from '../../components/button/TextBtn'
import { windowHeight, windowWidth } from '../../utils/Dimension';
import { colors } from '../../constants/colors';
import AppText from '../../components/text/AppText';
import Divider from '../../components/divider/Divider';
import AnimatedPressable from '../../components/button/AnimatedPressable';
import AppGradientBtn from '../../components/button/AppGradientBtn';
import SelectedItem from './components/SelectedItem';
import navigation from '../../navigation/navigation';
import { NotoSans } from '../../constants/fonts';
import { empty_toast } from '../../constants/Images';

const SelectItemScreen = ({route}) => {
  const { params: items } = route

  const [count, setCount] = useState(0)
  const [totalprice, setTotalprice] = useState(0)

  const handleIncreaseItem = function(){
    setCount((prev)=> prev + 1)
    setTotalprice(parseInt(totalprice) + parseInt(totalprice/count))
  }

  const handleDecreaseItem = function(){
    setCount((prev)=> prev - 1)
    setTotalprice(parseInt(totalprice) - parseInt(totalprice/count))
  }

  const updateCountAndTotalPrice = (newCount, newTotalPrice) => {
    setCount(newCount);
    setTotalprice(newTotalPrice);
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  // toast message
    const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;
    const popIn = () => {
        Animated.timing(popAnim, {
          toValue: windowHeight * 0.04,
          duration: 300,
          useNativeDriver: true,
        }).start(popOut());
    };
    const popOut = () => {
        setTimeout(() => {
          Animated.timing(popAnim, {
            toValue: windowHeight * -1,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }, 2000);
    };
    const instantPopOut = () => {
        Animated.timing(popAnim, {
          toValue: windowHeight * -1,
          duration: 150,
          useNativeDriver: true,
        }).start();
      };
  
  return (
    <View style={styles.container}>
      <Animated.View style={[ styles.toastContainer,{transform: [{ translateY: popAnim }]},]}>
          <LottieView
              source={empty_toast}
              autoPlay
              loop
              style={[{width: 60, height: 60}]}
          />
        <View style={styles.toastview2}>
          <AppText>Item is limited in the inventory</AppText>
          <TouchableOpacity onPress={instantPopOut}>
            <Ionicons name="close" size={16} color="black" style={styles.toasticon} />
          </TouchableOpacity>
        </View>
      </Animated.View>
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
          <AppText style={styles.headerText}>{`${items.length} ITEM(S) ADDED `}</AppText>
          <View style={styles.mainContainer}>
              <View style={styles.view1}>
                {
                  items.map((item, index) => 
                    <SelectedItem 
                      key={index}
                      item={item} 
                      onPress={()=> {
                        toggleModal()
                      }}
                      updateCountAndTotalPrice={updateCountAndTotalPrice}
                      popIn={popIn}
                  />)
                }
                <View style={styles.addview}>
                  <Divider dashed={true} />
                  <TouchableOpacity>
                    <View style={styles.additemview}>
                      <View style={[styles.additemview, {gap: 8}]}>
                        <AntDesign name="pluscircleo" size={16} />
                        <AppText>Add more items</AppText>
                      </View>
                      <AntDesign name="right" size={16} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.stickContainer}>
        <View style={{
            flexDirection: 'row', 
            justifyContent: 'space-around',
            bottom: 4,
            alignItems: 'center'
          }}>
          <View>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <AntDesign name="pluscircle" size={30} />
              <AppText style={styles.text}>Actions</AppText>
            </TouchableOpacity>
          </View>
          <AnimatedPressable>
            <AppGradientBtn title="Sell"/>
          </AnimatedPressable>
        </View>
      </View>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        backdropColor={colors.black}
        backdropOpacity={0.5}
        statusBarTranslucent 
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.center}>
            <Pressable
              onPress={()=>  toggleModal()}
            >
              <View style={styles.barIcon}>
                <AntDesign name="close" size={20} color={colors.white} />
              </View>
            </Pressable>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <ScrollView>

              </ScrollView>
            </View>
            <View style={[styles.stickContainer, {flex: 0.5}]}>
              <View style={{
                flexDirection: 'row', 
                justifyContent: 'space-between',
                paddingHorizontal: 10
              }}>
                <View style={[
                  styles.contentcounter, 
                  {
                    width: windowWidth/3, 
                    paddingVertical: 14,
                    borderWidth: 1.2,
                    borderColor: colors.powderblue100,
                    elevation: 0,
                    backgroundColor: colors.aliceblue
                  }]}>
                  <Pressable onPress={count != 1 ? handleDecreaseItem : toggleModal}>
                    <AntDesign name="minus" size={20} />
                  </Pressable>
                  <AppText>{count}</AppText>
                  <Pressable onPress={handleIncreaseItem}>
                    <AntDesign name="plus" size={20} />
                  </Pressable>
                </View>
                <View>
                  <AnimatedPressable
                    onPress={toggleModal}
                  >
                    <AppGradientBtn 
                      width={windowWidth/1.7} 
                      height={50} 
                      title={`Update Items  ₹${totalprice}`}
                      colors={['#373B44','#4286f4']}
                      locations={[0.5,1]}
                    />
                  </AnimatedPressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default memo(SelectItemScreen)

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingBottom: StatusBar.currentHeight/2
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
    justifyContent: 'center'
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
    fontFamily: NotoSans['700'],
    letterSpacing: 2,
    color: colors.grey2300
  },
  view1:{
    backgroundColor: colors.grey200,
    borderRadius: 15,
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
  itemview:{
    flexDirection: 'row',
  },
  totalview:{
    paddingVertical: 2,
    paddingHorizontal: 4
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
    fontFamily: NotoSans['700']
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    paddingTop: 20,
    minHeight: windowHeight/1.2
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14
  },
  barIcon: {
    backgroundColor: colors.black,
    padding: 10,
    borderRadius: 50
  },
  contentContainer: {
    flex: 1,
    width: windowWidth,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: colors.white
  },
  toastContainer: {
    position: "absolute", 
    left: 0, 
    right: 0, 
    width: windowWidth/1.2,
    height: 50,
    zIndex: 1,
    backgroundColor: colors.yellow100,
    opacity: 0.9,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: windowWidth * 0.08,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  toastview1:{
    width: '20%',
    height: '100%',
    backgroundColor: 'red'
  },
  toastview2:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  toasticon:{
    padding: 4,
    backgroundColor: colors.green100,
    borderRadius: 50,
    
  }
})