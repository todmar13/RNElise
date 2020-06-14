import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const CircAnim = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  fadeAnim.setValue(0);
  const wh = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [props.startSize, 0],
  })
  const radius = Animated.divide(wh,2);
  const cleft  = Animated.subtract(props.style.left,radius)
  const ctop   = Animated.subtract(props.style.top,radius)
  /*
  const radius = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [props.startSize/2, 0],
  })
  const cleft = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [props.style.left - props.startSize/2, props.style.left],
  })
  const ctop = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [props.style.top - props.startSize/2, props.style.top],
  })
*/
  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000,
        delay:props.delay,
      }
    ).start();
  }, [props.orient])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: 1,
        width:wh,
        height:wh,
        borderRadius: radius,
        left:cleft,
        top:ctop,
      }}
    >
      {props.children}
    </Animated.View>
  );
}
export default CircAnim
