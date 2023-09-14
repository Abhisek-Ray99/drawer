import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import React, {memo} from 'react'


import AppText from '../../../components/text/AppText'
import LottieView from '../../../components/view/LottieView'
import ImgBtn from '../../../components/button/ImgBtn'
import { windowWidth } from '../../../utils/Dimension'
import TextBtn from '../../../components/button/TextBtn'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const TEMPLATES = [
  {
    url: require('../../../assets/img/restaurant.png'),
    name: "Restaurant",
  },
  {
    url: require('../../../assets/img/health.png'),
    name: "Healthcare",
  },
  {
    url: require('../../../assets/img/electronics.png'),
    name: "Electronic",
  },
  {
    url: require('../../../assets/img/ecommerce.png'),
    name: "Ecommerce Sales",
  },
  {
    url: require('../../../assets/img/sports.png'),
    name: "Sport Goods",
  },
  {
    url: require('../../../assets/img/vehicles.png'),
    name: "Vehicles showrooms",
  }
]


const WelcomeStage = ({
  mailid,
  changeStage,
  isInventories
}) => {

  return (
    <ScrollView>
      {
        !isInventories ? 
        <View style={styles.welcomecontainer}>
          <View style={styles.view1}>
            <AppText style={styles.welcometitle}>Let's get started!</AppText>
            <AppText style={styles.subtitle}>
              You have confirmed 
              <AppText style={{ fontWeight: 'bold'}}> {mailid} </AppText>
              You're all set to create your first online inventory for your shop
            </AppText>
          </View>
          <View style={styles.view2}>
            <LottieView
              imagesource={require('../../../assets/img/animation_3.json')}
              size={250}
            />
          </View>
          <View style={styles.btnview}>
            <ImgBtn 
              Title="Create a new Inventory" 
              onPress={changeStage} 
              disabled={false} 
              style={{borderRadius: 15, width: windowWidth/1.6}}
            />
          </View>
        </View>
        :
        <View style={styles.existingcontainer}>
          <AppText style={styles.welcometitle}>Create your Inventory</AppText>
          <AppText style={styles.subtitle}>Your inventory is where you and your teammates create, purchase and sale items</AppText>
          <TextBtn
            TextTitle="Create My Own"
            bg
            viewStyle={styles.txtbtn}
            leftImg={
              <Image source={require('../../../assets/img/first-inventory.png')} style={{width: 40, height: 40}} />
            }
            rightIcon={
              <MaterialCommunityIcons name="chevron-right" size={24} />
            }
            TextStyle={{fontWeight: '700'}}
            onPress={changeStage}
          />
        </View>
      }
      <View style={styles.commonview}>
        <AppText style={styles.commonheader}>{"start from a template".toUpperCase()}</AppText>
        {
          TEMPLATES.map((item,index) => (
            <TextBtn
              TextTitle={item.name}
              bg
              viewStyle={styles.templatebtn}
              leftImg={
                <Image source={item.url} style={{width: 40, height: 40}} />
              }
              rightIcon={
                <MaterialCommunityIcons name="chevron-right" size={24} />
              }
              TextStyle={{fontWeight: '700'}}
              onPress={changeStage}
              key={index}
            />
          ))
        }
      </View>
    </ScrollView>
  )
}

export default memo(WelcomeStage)

const styles = StyleSheet.create({
  welcometitle:{
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  welcomecontainer:{
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  existingcontainer:{
    paddingHorizontal: 20,
  },
  view1:{
    flexDirection: 'column',
  },
  btnview:{
    alignItems: 'center',
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 14,
    padding: 10
  },
  txtbtn:{
    borderRadius: 7,
    marginVertical: 20
  },
  commonview:{
    paddingHorizontal: 20,
  },
  commonheader:{
    fontSize: 13,
    fontWeight: '700',
    paddingVertical: 10
  },
  templatebtn:{
    borderRadius: 7,
    marginVertical: 4
  }
})