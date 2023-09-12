import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import ProgressBar from './Slider'
import AppText from '../../../components/text/AppText'

const Header = ({
  stage
}) => {
  return (
    <View>
      {
        stage !== 0 ? 
        ( <View style={styles.backcontainer}>
            <Pressable>
              <Ionicons name="chevron-back" size={26} />
            </Pressable>
          </View>):(
          <View style={styles.backcontainer}>
            <Pressable>
              <Ionicons name="close" size={26} />
            </Pressable>
          </View>
        )
      }
      <View style={styles.progressview}>
        <ProgressBar activecount={stage} />
      </View>
    </View>
  )
}

export default memo(Header)

const styles = StyleSheet.create({
  backcontainer:{
    paddingVertical: 10,
    paddingHorizontal: 6
  },
  progressview:{
    paddingVertical: 10,
  }
})