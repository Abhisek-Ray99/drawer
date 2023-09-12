import { StyleSheet, Text, View } from 'react-native'
import React, {memo, useState} from 'react'


import Header from './components/Header'
import WelcomeStage from './components/WelcomeStage'
import Stage3 from './components/Stage3'
import Stage4 from './components/Stage4'
import Stage5 from './components/Stage5'
import SliderForm from './components/SliderForm'

const WelcomeInventoryScreen = ({route}) => {
  const {mail} = route.params
  const [stage, setStage] = useState(0)

  let drinks = {
    0: <WelcomeStage mailid={mail}  />,
    1: <SliderForm title="What's the name of your store or warehouse?" placeholder="e.g.Shop1 or Warehouse1"  />,
    2: <SliderForm title="What kind of inventory goods your staff managing?" placeholder="e.g.Stationary or Restaurant" />,
    3: <Stage3/>,
    4: <Stage4/>,
    5: <Stage5/>
  };

  const ConditionalComponent = (stage) => {
    return drinks[stage]
  }

  return (
    <View style={styles.welcomecontainer}>
      <Header stage={stage} />
      <View style={styles.stageview}>
        {ConditionalComponent(stage)}
      </View>
    </View>
  )
}

export default memo(WelcomeInventoryScreen)

const styles = StyleSheet.create({
  welcomecontainer:{
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  stageview:{
    flex: 1,
    padding: 10,
  }
})