/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  StatusBar,
  BackHandler,
  Image,
  PanResponder,
  Dimensions,
  Animated,
  useWindowDimensions
} from 'react-native';
import HomeData from '../../screens/Video/Utils/HomeData.json';
import ChannelIcon from "../../screens/Video/icon.png";
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';


const News = props => {
  const videoIndex = props.route.params;
  const [paused, setPause] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoLength, setVideoLength] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [commentModal, setCommentModal] = useState(false);
  const [textInputModal, setTextInputModal] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [descModal, setDescModal] = useState(false);
  const [downloadModal, setDownloadModal] = useState(false);
  const [video, setVideo] = React.useState();
  // const [videoUrl, setVideoUrl] = React.useState();
  const [exerciseItem, setExerciseItem] = React.useState([]);
  const [thumbnail, setThumbnail] = React.useState();

  const [videoDetail, setVideoDetail] = useState({
    liked: false,
    disliked: false,
    saved: false,
  });
  const videoUrl = props.route.params?.selectedItem?.videoUrl;
  const description = props.route.params?.selectedItem?.description;
 

  const data = HomeData[videoIndex];


  const bufferConfig = {
    minBufferMs: 15000,
    maxBufferMs: 60000,
    bufferForPlaybackMs: 2500,
    bufferForPlaybackAfterRebufferMs: 5000,
  };
 
  this._y = 0;
  this._animation = new Animated.Value(0);
  this._animation.addListener(({ value }) => {
    this._y = value;
  })


  const { width, height: screenHeight } = Dimensions.get("window");
  const videoHeight = width * 0.5625;

  const padding = 15;
  const statusBarHeight = StatusBar.currentHeight || 0;
  const yOutput = ((screenHeight - videoHeight) + ((videoHeight * .5) / 2)) - padding - statusBarHeight;
  const xOutput = ((width * .5) / 2) - padding;

  const opacityInterpolate = this._animation?.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0],
  });

  const translateYInterpolate = this._animation?.interpolate({
    inputRange: [0, 300],
    outputRange: [0, yOutput],
    extrapolate: "clamp",
  });

  const scaleInterpolate = this._animation?.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0.5],
    extrapolate: "clamp",
  });

  const translateXInterpolate = this._animation?.interpolate({
    inputRange: [0, 300],
    outputRange: [0, xOutput],
    extrapolate: "clamp",
  });

  const scrollStyles = {
    opacity: opacityInterpolate,
    transform: [
      {
        translateY: translateYInterpolate,
      },
    ],
  };

  const videoStyles = {
    transform: [
      {
        translateY: translateYInterpolate,
      },
      {
        translateX: translateXInterpolate,
      },
      {
        scale: scaleInterpolate,
      },
    ],
  };



  _panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
 
    onPanResponderMove: Animated.event([
      null,
      {
        dy: this._animation,
      },

    ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (e, gestureState) => {

      if (gestureState.dy > 100) {
        Animated.timing(this._animation, {
          toValue: 300,
          duration: 200,
          useNativeDriver: false,
        }).start();
        this._animation.setOffset(300);
      } else {
        this._animation.setOffset(0);
        Animated.timing(this._animation, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start();
      }
    },
  });
 

  const buffering = event => {
    console.log("1");
    setIsLoading(event?.isBuffering ? true : false);
  };

  useFocusEffect(
    useCallback(() => {
      const onBlur = () => {
        setPause(true);
      };
      props.navigation.addListener('blur', onBlur);
      return () => props.navigation.removeListener('blur', onBlur);
    }, [props.navigation]),
  );
  


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={this.handleOpen}>
        <Text>Content Below: Click To Reopen Video</Text>
      </TouchableOpacity>
      <View style={StyleSheet.absoluteFill} pointerEvents="box-none">

        <Animated.View
          style={[{ width, height: videoHeight }, videoStyles]}

          {..._panResponder.panHandlers}
        >


          <Video repeat style={StyleSheet.absoluteFill}
            source={{
              uri: videoUrl
            }}
            resizeMode="cover"
            onBuffer={e => buffering(e)}
            bufferConfig={bufferConfig}

            paused={paused}
            controls={true}
            playInBackground={true} />


        </Animated.View>

        <Animated.ScrollView style={[styles.scrollView, scrollStyles]}>
          <View style={styles.padding}>
            <Text style={styles.title}>Beautiful DJ Mixing Lights</Text>
            <Text>1M Views</Text>
            <View style={styles.likeRow}>
   
             </View>
          </View>

          <View style={[styles.channelInfo, styles.padding]}>
            <Image
              source={ChannelIcon}
              style={styles.channelIcon}
              resizeMode="contain"
            />
            <View style={styles.channelText}>
              <Text style={styles.channelTitle}>Prerecorded MP3s</Text>
              <Text>1M Subscribers</Text>


            </View>
          </View>

          <RenderHtml
          contentWidth={width}
          source={"wds"} 
        />
        </Animated.ScrollView>

       


      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 28,
  },
  likeRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  touchIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    marginTop: 5,
  },
  padding: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  channelInfo: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
    borderTopWidth: 1,
    borderTopColor: "#DDD",
  },
  channelIcon: {
    width: 50,
    height: 50,
  },
  channelText: {
    marginLeft: 15,
  },
  channelTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  playlistUpNext: {
    fontSize: 24,
  },
  playlistVideo: {
    flexDirection: "row",
    height: 100,
    marginTop: 15,
    marginBottom: 15,
  },
  playlistThumbnail: {
    width: null,
    height: null,
    flex: 1,
  },
  playlistText: {
    flex: 2,
    paddingLeft: 15,
  },
  playlistVideoTitle: {
    fontSize: 18,
  },
  playlistSubText: {
    color: "#555",
  }
});


export default News;
