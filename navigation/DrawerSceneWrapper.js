import {
    View,
    Text,
    StyleSheet,
    Platform,
    useWindowDimensions,
  } from 'react-native';
  import React from 'react';
  import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
  import {useDrawerProgress} from '@react-navigation/drawer';
  
  const DrawerSceneWrapper = ({children}) => {
    const progress = useDrawerProgress();
    const {width} = useWindowDimensions();
    console.log(progress.value);
  
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        {perspective: 900},
        {
          scale: interpolate(progress.value, [0, 1], [1, 0.9], 'clamp'),
        },
      
       
      ],
      borderRadius: interpolate(progress.value, [0, 1], [0, 20], 'clamp'),
      overflow: 'hidden',
    }));
  
    return (
      <Animated.View style={[styles.container, animatedStyle]}>
        {children}
      </Animated.View>
    );
  };
  
  export default DrawerSceneWrapper;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });