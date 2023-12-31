import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabBarButtonSvg } from './TabBarButtonSvg';
 
import { COLORS, FONTS, icons, SIZES } from '../../constants';
 

export const TabBarAdvancedButton = ({
  bgColor,
  ...props
}) => (
  <View
    style={styles.container}
    pointerEvents="box-none"
  >
    <TabBarButtonSvg
      color={bgColor}
      style={styles.background}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
    >
      <Icon
        name="rocket"
        style={styles.buttonIcon}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center'
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: COLORS.VIEW.primary
  },
  buttonIcon: {
    fontSize: 16,
    color: '#F6F7EB'
  }
});