import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Circle from '../components/Circle'



const Ascript = props => {

  const [orientation,setOrientation] = useState();

  const getOrientation = async ()=> {
    let info = await ScreenOrientation.getOrientationAsync();
    console.log("Orientation:"+info);
    const orient = (info===ScreenOrientation.Orientation.PORTRAIT_UP || info===ScreenOrientation.Orientation.PORTRAIT_DOWN)
            ?"PORTRAIT":"LANDSCAPE";
    console.log("Orient:"+orient);
    setOrientation(orient);
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);
    console.log("Width:"+screenWidth+"...Height:"+screenHeight);
  }
  // "PORTRAIT" "LANDSCAPE"
  useEffect(() => {
      // set initial orientation
      getOrientation()
      // subscribe to future changes
      const subscription = ScreenOrientation.addOrientationChangeListener((evt)=>{
        const rv = evt.orientationInfo.orientation;
        const orient = (rv===ScreenOrientation.Orientation.PORTRAIT_UP || rv===ScreenOrientation.Orientation.PORTRAIT_DOWN)
                ?"PORTRAIT":"LANDSCAPE";
      console.log("Change:"+orient)
      setOrientation(orient);
      });
      // return a clean up function to unsubscribe from notifications
      return (()=>{
        ScreenOrientation.removeOrientationChangeListener(subscription);
      })
    }, []);


  return (
  <View style={styles.container}>
      <Circle />
      <Text style={{ color: '#ccaaaa' }}>Screen Ascript in RNElise</Text>
      {orientation==="LANDSCAPE"?(<Image
            source={require('../assets/logohomeland.png')}
            style={styles.logohomeland}
            />
        ):(<Image
              source={require('../assets/logohomePort.png')}
              style={styles.logohomeport}
              />)
      }
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a60000', //'rgba(166,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logohomeland: {
    width: '100%',
    height: '55%',
    resizeMode: 'contain',
  },
  logohomeport: {
    width: '90%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Ascript;
