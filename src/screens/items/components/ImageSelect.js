import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AppText from '../../../components/text/AppText'
import ViewBox from '../../../components/view/ViewBox'
import { colors } from '../../../constants/colors'
import { windowHeight, windowWidth } from '../../../utils/Dimension'

const boxHeight = (windowHeight - 0 * 2)/5.8;
const boxWidth = (windowWidth - 0 * 2)/1.1;

const ImageSelect = () => {
  return (
    <ViewBox width={boxWidth} height={boxHeight} viewBorderStyle={'dashed'} viewboxStyle={styles.viewbox}>
        <MaterialCommunityIcons name="file-image-plus-outline" size={50} color={colors.grey500} />
        <AppText style={styles.apptext}>Add photos</AppText>
    </ViewBox>
  )
}

export default memo(ImageSelect)

const styles = StyleSheet.create({
  viewbox:{
    borderColor: colors.grey600,
    alignItems: 'center',
    justifyContent: 'center'
  },
  apptext:{
    color: colors.grey500
  }
})