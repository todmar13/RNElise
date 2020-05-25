import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Circle = props => {
  return (
    <View style={styles.circle}>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 50,
    width:100,
    height:100,
    backgroundColor:'rgba(128,128,128, 0.5)',
    position:'absolute',
    left:'40%',
    right:'40%',
    top:'40%',
    bottom:'40%',
  }
})

export default Circle
