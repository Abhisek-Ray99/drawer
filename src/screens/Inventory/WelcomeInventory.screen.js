import { StyleSheet, Text, View } from 'react-native'
import React, {memo, useState} from 'react'

import { useDispatch } from '../../redux/store'
import { setLogout } from '../../redux/slices/user'


import Header from './components/Header'
import WelcomeStage from './components/WelcomeStage'
import Stage3 from './components/Stage3'
import Stage4 from './components/Stage4'
import SliderForm from './components/SliderForm'

const WelcomeInventoryScreen = ({route}) => {
  const {mail} = route.params
  const [stage, setStage] = useState(0)

  function handlechangeStage(){
    setStage(stage+1)
  }

  const dispatch = useDispatch();
  function handlebackStage(){
    stage > 0 ? setStage(stage-1) : dispatch(setLogout())
  }

  let stages = {
    0: <WelcomeStage mailid={mail} changeStage={handlechangeStage} />,
    1: <SliderForm title="What's the name of your store or warehouse?" placeholder="e.g.Shop1 or Warehouse1" changeStage={handlechangeStage}  />,
    2: <SliderForm title="What kind of inventory goods your staff managing?" placeholder="e.g.Stationary or Restaurant" changeStage={handlechangeStage} />,
    3: <Stage3 changeStage={handlechangeStage} />,
    4: <Stage4 />,
  };

  const ConditionalComponent = (stage) => {
    return stages[stage]
  }

  return (
    <View style={styles.welcomecontainer}>
      <Header stages={stages} stage={stage} backStage={handlebackStage} frontStage={handlechangeStage} />
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