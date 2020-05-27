import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Circle = props => {
  return (
    <View style={{...styles.circle,backgroundColor:props.color}}>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 60,
    width:120,
    height:120,
    backgroundColor:'rgba(128,128,128, 0.5)',
    position:'absolute',
    left:'50%',
    //right:'50%',
    top:'30%',
    //bottom:'30%',
    zIndex:1,
  }
})

export default Circle
