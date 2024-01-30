import { StyleSheet, Text, View, BackHandler } from 'react-native'
import React, {useCallback} from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { LineChart } from "react-native-gifted-charts"
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../constants/colors';

const ptData1 = [
  {value: 160, date: '1 Apr 2022'},
  {value: 180, date: '2 Apr 2022'},
  {value: 190, date: '3 Apr 2022'},
  {value: 180, date: '4 Apr 2022'},
  {value: 140, date: '5 Apr 2022'},
  {value: 145, date: '6 Apr 2022'},
  {value: 160, date: '7 Apr 2022'},
  {value: 200, date: '8 Apr 2022'},

  {value: 220, date: '9 Apr 2022'},
  {
    value: 240,
    date: '10 Apr 2022',
    label: '10 Apr',
    labelTextStyle: {color: 'lightgray', width: 60},
  },
  {value: 280, date: '11 Apr 2022'},
  {value: 260, date: '12 Apr 2022'},
  {value: 340, date: '13 Apr 2022'},
  {value: 385, date: '14 Apr 2022'},
  {value: 280, date: '15 Apr 2022'},
  {value: 390, date: '16 Apr 2022'},

  {value: 370, date: '17 Apr 2022'},
  {value: 285, date: '18 Apr 2022'},
  {value: 295, date: '19 Apr 2022'},
  {
    value: 300,
    date: '20 Apr 2022',
    label: '20 Apr',
    labelTextStyle: {color: 'lightgray', width: 60},
  },
  {value: 280, date: '21 Apr 2022'},
  {value: 295, date: '22 Apr 2022'},
  {value: 260, date: '23 Apr 2022'},
  {value: 255, date: '24 Apr 2022'},

  {value: 190, date: '25 Apr 2022'},
  {value: 220, date: '26 Apr 2022'},
  {value: 205, date: '27 Apr 2022'},
  {value: 230, date: '28 Apr 2022'},
  {value: 210, date: '29 Apr 2022'},
  {
    value: 200,
    date: '30 Apr 2022',
    label: '30 Apr',
    labelTextStyle: {color: 'lightgray', width: 60},
  },
  {value: 240, date: '1 May 2022'},
  {value: 250, date: '2 May 2022'},
  {value: 280, date: '3 May 2022'},
  {value: 250, date: '4 May 2022'},
  {value: 210, date: '5 May 2022'},
];
const ptData2 = [
  {value: 100, date: '1 Apr 2022'},
  {value: 80, date: '2 Apr 2022'},
  {value: 90, date: '3 Apr 2022'},
  {value: 120, date: '4 Apr 2022'},
  {value: 160, date: '5 Apr 2022'},
  {value: 145, date: '6 Apr 2022'},
  {value: 90, date: '7 Apr 2022'},
  {value: 100, date: '8 Apr 2022'},

  {value: 200, date: '9 Apr 2022'},
  {
    value: 240,
    date: '10 Apr 2022',
    label: '10 Apr',
    labelTextStyle: {color: 'lightgray', width: 60},
  },
  {value: 200, date: '11 Apr 2022'},
  {value: 200, date: '12 Apr 2022'},
  {value: 250, date: '13 Apr 2022'},
  {value: 265, date: '14 Apr 2022'},
  {value: 230, date: '15 Apr 2022'},
  {value: 290, date: '16 Apr 2022'},

  {value: 300, date: '17 Apr 2022'},
  {value: 335, date: '18 Apr 2022'},
  {value: 345, date: '19 Apr 2022'},
  {
    value: 300,
    date: '20 Apr 2022',
    label: '20 Apr',
    labelTextStyle: {color: 'lightgray', width: 60},
  },
  {value: 240, date: '21 Apr 2022'},
  {value: 215, date: '22 Apr 2022'},
  {value: 200, date: '23 Apr 2022'},
  {value: 165, date: '24 Apr 2022'},

  {value: 190, date: '25 Apr 2022'},
  {value: 220, date: '26 Apr 2022'},
  {value: 255, date: '27 Apr 2022'},
  {value: 280, date: '28 Apr 2022'},
  {value: 360, date: '29 Apr 2022'},
  {
    value: 350,
    date: '30 Apr 2022',
    label: '30 Apr',
    labelTextStyle: {color: 'lightgray', width: 60},
  },
  {value: 300, date: '1 May 2022'},
  {value: 304, date: '2 May 2022'},
  {value: 280, date: '3 May 2022'},
  {value: 200, date: '4 May 2022'},
  {value: 250, date: '5 May 2022'},
];

const Reports = ({navigation}) => {

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('dashboard');
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onBackPress
        );
      };
    }, []),
  );

  return (
    <LinearGradient  colors={['#cfd9df', '#fff' ]} style={styles.mainview}>
        <View style={styles.chart1}>
          <LineChart
            isAnimated
            animateOnDataChange
            animationDuration={1000}
            onDataChangeAnimationDuration={300}
            areaChart
            curved
            data={ptData1}
            data2={ptData2}
            width={290}
            hideDataPoints
            spacing={10}
            color1="#8a56ce"
            color2="#56acce"
            thickness={2}
            startFillColor1="#8a56ce"
            startFillColor2="#56acce"
            endFillColor1="#8a56ce"
            endFillColor2="#56acce"
            startOpacity={0.9}
            endOpacity={0.3}
            initialSpacing={0}
            noOfSections={5}
            maxValue={500}
            yAxisColor={colors.black}
            yAxisThickness={0}
            rulesType="dashed"
            yAxisTextStyle={{color: colors.black}}
            yAxisSide='right'
            xAxisColor={colors.black}
            pointerConfig={{
              pointerStripHeight: 160,
              pointerStripColor: colors.heavyblue,
              pointerStripWidth: 2,
              pointerColor: colors.royalblue,
              radius: 6,
              pointerLabelWidth: 100,
              pointerLabelHeight: 90,
              activatePointersOnLongPress: true,
              autoAdjustPointerLabelPosition: false,
              pointerLabelComponent: items => {
                return (
                  <View
                    style={{
                      // height: 50,
                      width: 100,
                      justifyContent: 'center',
                      marginTop: -10,
                      marginLeft: -40,
                    }}>
                    <Text style={{color: colors.black, fontSize: 14, marginBottom:6 ,textAlign:'center'}}>
                      {items[0].date}
                    </Text>
    
                    <Text style={{color: colors.black,fontSize:12}}>purchase</Text>
                    <Text style={{color: colors.black, fontWeight:'bold'}}>{items[0].value}</Text>
                    <Text style={{color: colors.black,fontSize:12,marginTop:12}}>sales</Text>
                    <Text style={{color: colors.black, fontWeight:'bold'}}>{items[1].value}</Text>
                  </View>
                );
              },
            }}
          />
        </View>
      </LinearGradient>
  )
}

export default Reports

const styles = StyleSheet.create({
  mainview:{
    flex: 1,
  },
  chart1:{
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1.3,
    borderRadius: 21,
    borderColor: colors.grey1500
  }
})