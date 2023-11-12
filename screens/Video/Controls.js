import React, { Component } from 'react';
import { defaultString } from '../String/defaultStringValue';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../../constants';

const Controls = ({
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled,
  controlDirection="row"
}) => (
    <View style={{...styles.container, flexDirection:controlDirection}}>
      <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
        <Image style={[{ tintColor: COLORS.TEXT.black } , styles.secondaryControl, shuffleOn ? [] : styles.off]}
          source={require('../../assets/icons/shuffle.png')} />
      </TouchableOpacity>
      <View style={{ width: 40 }} />
      <TouchableOpacity onPress={onBack}>
        <Image style={{ tintColor: COLORS.TEXT.black }} source={require('../../assets/icons/playprevious.png')} />
      </TouchableOpacity>
      <View style={{ width: 20 }} />
      {!paused ?
        <TouchableOpacity onPress={onPressPause}>
          <View style={styles.playButton}>
            <Image style={{ tintColor: COLORS.TEXT.black }} source={require('../../assets/icons/pause.png')} />
          </View>
        </TouchableOpacity> :
        <TouchableOpacity onPress={onPressPlay}>
          <View style={styles.playButton}>
            <Image style={{ tintColor: COLORS.VIEW.primary }} source={require('../../assets/icons/play.png')} />
          </View>
        </TouchableOpacity>
      }
      <View style={{ width: 20 }} />
      <TouchableOpacity onPress={onForward}
        disabled={forwardDisabled}>
        <Image style={[forwardDisabled && { opacity: 0.3 }, { tintColor: COLORS.TEXT.black }]}
          source={require('../../assets/icons/playnext.png')} />
      </TouchableOpacity>
      <View style={{ width: 40 }} />
      <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
        <Image style={[{ tintColor: COLORS.TEXT.black }, styles.secondaryControl, repeatOn ? [] : styles.off]}
          source={require('../../assets/icons/repeat.png')} />
      </TouchableOpacity>
    </View>
  );

export default Controls;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    backgroundColor:COLORS.VIEW.white
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: COLORS.VIEW.secondary20,
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.30,
  }
})