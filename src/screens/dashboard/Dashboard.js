import React, { useCallback, useRef, useMemo, useState, useEffect } from "react";
import { StyleSheet, View, StatusBar, BackHandler, Alert } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import LottieView from 'lottie-react-native'

import LinearGradient from 'react-native-linear-gradient';
import ViewBox from "../../components/view/ViewBox";
import Summary from "./components/Summary";
import DashBoardHeader from "./components/DashBoardHeader";
import PurchaseView from "./components/PurchaseView";
import SaleView from "./components/SaleView";

import { windowHeight, windowWidth } from "../../utils/Dimension";
import AppBtn from "../../components/button/AppBtn";
import { colors } from "../../constants/colors";

import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { ThemedButton } from 'react-native-really-awesome-button';
import { Modal, Portal} from 'react-native-paper';
import ViewItem from "./components/ViewItem";
import AsyncStorage from '@react-native-async-storage/async-storage'


const App = ({route, navigation}) => {

  const { name, items } = route.params.params[0]

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white', 
    marginHorizontal: 20,
    height: windowHeight/2,
    borderRadius: 7,
    marginTop: 350,
    paddingVertical: 10,
    paddingHorizontal: 14
  };

  // hooks
  const sheetRef = useRef(null);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ["70%", "70%", "92%"], []);

  StatusBar.setBackgroundColor('#cfd9df')
  StatusBar.setTranslucent(false)
  StatusBar.setBarStyle('dark-content')

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to Exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient  colors={['#cfd9df', '#e2ebf0', '#e6dee9' ]} style={styles.container1}>
        <View style={styles.dashboardheader}>
          <DashBoardHeader DrawerName={name} ItemTitle={name[0]} />
            <ThemedButton 
              name="rick" 
              type="primary"
              width={80}
              height={40}
              style={styles.sbutton}
              onPress={showModal}
            >
              Create
            </ThemedButton>
            <Portal>
              <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <View style={styles.view1}>
                  <ViewItem 
                    icon={<Ionicons name="bag-outline" size={22} color={colors.dodgerblue2} />}
                    title="New Purchase"
                    descript="Quicky add your purchases"
                    bgColor={colors.antiflashwhite1}
                    borderC={colors.aliceblue2}
                  />
                  <ViewItem 
                    icon={<AntDesign name="shoppingcart" size={22} color={colors.amethyst} />}
                    title="New Sale"
                    descript="Start saling you product"
                    bgColor={colors.antiflashwhite2}
                    borderC={colors.lavender}
                  />
                  <ViewItem 
                    icon={<Ionicons name="receipt-outline" size={22} color={colors.bondiblue} />}
                    title="New Invoice"
                    descript="Add Today's your invoices"
                    bgColor={colors.antiflashwhite3}
                    borderC={colors.aliceblue3}
                  />
                  
                </View>
                <View style={styles.view2}>
                  <LottieView source={require("../../assets/img/animation_llju8kt9.json")} autoPlay loop />
                </View>
              </Modal>
            </Portal>
        </View>
        <View style={styles.container11}>
          <ViewBox height={'100%'} viewboxStyle={styles.mainview}>
            <Summary  products={items} />
          </ViewBox>
        </View>
      </LinearGradient>
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.pursale}>
            <PurchaseView/>
            <SaleView/>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "white",
    borderRadius: 50
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
  container1:{
    flex: 1.4,
  },
  container11: {
    flex: 0.16,
    padding: 20
  },
  mainview:{
    flex: 1,
  },
  pursale:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  dashboardheader:{
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  sbutton:{
    right: 10
  },
  view1:{
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  view2:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;