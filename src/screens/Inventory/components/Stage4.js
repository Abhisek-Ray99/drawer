import { StyleSheet, Text, View} from 'react-native'
import React, {memo} from 'react'
import ImgBtn from '../../../components/button/ImgBtn'
import AppText from '../../../components/text/AppText'
import LottieView from '../../../components/view/LottieView'
import { windowHeight } from '../../../utils/Dimension'

const Stage4 = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.stagetext}>Tada! Add your first Items to the Inventory</AppText>
      <View style={styles.view1}>
        <LottieView
          imagesource={require('../../../assets/img/animation_4.json')}
          size={500}
        />
      </View>
      <View style={styles.view2}>
        <ImgBtn
          Title="See your inventory in Drawer" 
          disabled={false} 
          style={{borderRadius: 7}} 
        />
      </View>
    </View>
  )
}

export default memo(Stage4)

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    gap: 10
  },
  view1:{
    flex: 2.4,
    marginLeft: 18
  },  
  view2:{
    flex: 1,
    alignItems: 'center',
  },
  stagetext:{
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '700'
  }
})