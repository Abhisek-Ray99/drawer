import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import ViewBox from '../../components/view/ViewBox'

import { windowWidth, windowHeight } from '../../utils/Dimension';
import { colors } from '../../constants/colors';

const boxHeight = (windowHeight - 0 * 2)/5.8;
const boxWidth = (windowWidth - 0 * 2)/2.24;

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.container11}>
          <ViewBox height={'100%'} viewboxStyle={styles.mainview}/>
        </View>
        <View style={styles.container12}>
          <ViewBox height={boxHeight} width={boxWidth} viewboxStyle={styles.boxview}/>
          <ViewBox height={boxHeight} width={boxWidth } viewboxStyle={styles.boxview}/>
          <ViewBox height={boxHeight} width={boxWidth } viewboxStyle={styles.boxview}/>
          <ViewBox height={boxHeight} width={boxWidth } viewboxStyle={styles.boxview}/>
        </View>
      </View>
      <View style={styles.container2}>

      </View>
    </View>
  )
}

export default memo(Dashboard)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 2,
    padding: 16,
    backgroundColor: colors.grey2000
  },
  container2: {
    flex: 1
  },
  container11: {
    flex: 2,
  },
  container12:{
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 6
  },
  mainview:{
    top: -4
  },
  boxview:{
    marginTop: 10
  }
})