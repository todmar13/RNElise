import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CircAnim from './CircAnim'

const Circle = props => {
  // Perhaps surround a View with CircAnim, or substitute?
  let circColorViaOrient=props.color; //'#e0e0e0';
  (props.orient==='LANDSCAPE')?circColorViaOrient='#e0e000':props.color
  return (
    <CircAnim
      orient={props.orient}
      startSize={props.startSize}
      style={{...styles.circle,backgroundColor:circColorViaOrient,left:props.x,top:props.y}}
      delay={props.delay}>
    </CircAnim>
  )
}

const styles = StyleSheet.create({
  circle: {
//    borderRadius: 60,
//    width:120,
//    height:120,
//    backgroundColor:'rgba(128,128,128, 0.5)',
    position:'absolute',
    //left:200, //{props.x+'px'},
    //right:'50%',
    //top:300, //{props.y+'px'},
    //bottom:'30%',
    zIndex:1,
  }
})

export default Circle
