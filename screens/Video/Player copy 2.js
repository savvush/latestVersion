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
  Animated
} from 'react-native';
import {
  FONTS,
  SIZES,
  COLORS,
  icons,
  images,
  dummyData,
} from "../../constants";
import HomeData from './Utils/HomeData.json';
import Thumbnail from "./thumbnail.jpg";
import ChannelIcon from "./icon.png";
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackActions, useFocusEffect } from '@react-navigation/native';
import { numberFormat } from './Utils/Util';
import { Storage, API, graphqlOperation } from "aws-amplify";
import { createUserWorkoutHistory } from "../../src/graphql/mutations";
import { Auth } from "aws-amplify";

const Player = props => {
  const videoIndex = props.route.params;
  const [paused, setPause] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoLength, setVideoLength] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [commentModal, setCommentModal] = useState(false);
  const [descModal, setDescModal] = useState(false);
  // const [videoUrl, setVideoUrl] = React.useState();
  const [exerciseItem, setExerciseItem] = React.useState([]);

  const [videoDetail, setVideoDetail] = useState({
    liked: false,
    disliked: false,
    saved: false,
  });
  const videoUrl = props.route.params?.exercise?.videoUrl;
  const allexercises = props.route.params?.allexercises;
  const workout = props.route.params?.workoutproperties;
  const data = HomeData[videoIndex];
 
  this._y = 0;
  this._animation = new Animated.Value(0);
  this._animation.addListener(({ value }) => {
    this._y = value;
  })

  const bufferConfig = {
    minBufferMs: 15000,
    maxBufferMs: 60000,
    bufferForPlaybackMs: 2500,
    bufferForPlaybackAfterRebufferMs: 5000,
  };


  const PlaylistVideo = ({ name, channel, views, image }) => {
    return (
      <View style={styles.playlistVideo}>
        <Image source={image} style={styles.playlistThumbnail} resizeMode="cover" />
        <View style={styles.playlistText}>
          <Text style={styles.playlistVideoTitle}>
            {name}
          </Text>
          <Text style={styles.playlistSubText}>
            {channel}
          </Text>
          <Text style={styles.playlistSubText}>
            {views} views
          </Text>
        </View>
      </View>
    );
  };

  async function saveUserHistoryCompleted(exercise) {
    try {
      //first get the user
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
      //then save it to history table 
      console.log("------>" + JSON.stringify(workout));

      await API.graphql(
        graphqlOperation(createUserWorkoutHistory, {
          input: {
            progress: 'COMPLETED',
            userWorkoutHistoryLastExerciseId: exercise.id,
            type: "Workout",
            description: workout.workout.title,
            exerciseCount: allexercises.length,
            userWorkoutHistoryUserId: authUser.attributes.sub,
            userWorkoutHistoryWorkoutId: exercise.workoutExercisesId
          }
        }
        ));

    } catch (error) {
      console.log(error);
      navigation.navigate("SignIn")
    }
  }
  async function fetchVideoProps(exercise) {
    const videoThumbnail = await Storage.get(exercise?.thumbnailUrl);
    setThumbnail(videoThumbnail);
  }



  _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dy: this._animation,
      },
    ]),
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dy > 100) {
        Animated.timing(this._animation, {
          toValue: 300,
          duration: 200,
          useNativeDriver: false
        }).start();
        this._animation.setOffset(300);
      } else {
        this._animation.setOffset(0);
        Animated.timing(this._animation, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false
        }).start();
      }
    },
  });
  React.useEffect(() => {
    let exercise = videoIndex.exercise;


    // saveUserHistory(exercise);
    fetchVideoProps(exercise);
    setExerciseItem(exercise);



  }, []);


  React.useEffect(() => {


  }, []);


  useFocusEffect(
    useCallback(() => {
      const onHardwareBack = () => {
        if (fullScreen) {
          setFullScreen(false);
          return true;
        } else if (descModal || commentModal) {
          setCommentModal(false);
          setDescModal(false);
          return;
        } else {
          props.navigation.dispatch(
            StackActions.replace('Main', { screen: 'Home' }),
          );
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onHardwareBack);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onHardwareBack);
    }, [fullScreen, props.navigation, descModal, commentModal]),
  );

  const buffering = event => {
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

  const videoLoading = payload => {
    setIsLoading(false);
    setVideoTime(payload?.duration);
    if (payload?.duration > 60) {
      if (payload?.duration / 60 > 60) {
        setVideoDuration(`${(payload?.duration / 3600).toFixed()}:00:00`);
        setVideoLength('hour');
        return;
      } else {
        setVideoDuration(`${(payload?.duration / 60).toFixed()}:00`);
        setVideoLength('minutes');
        return;
      }
    } else {
      setVideoDuration(payload?.duration);
      setVideoLength('seconds');
      return false;
    }
  };

  const VideoProgress = () => {
    return (
      <View style={styles.time}>
        <Text
          style={
            styles.timeText
          }>{`${currentProgress} /1 ${videoDuration}`}</Text>
      </View>
    );
  };

  const progressHandler = payload => {
    setProgressBar(parseFloat(payload?.currentTime) / parseFloat(videoTime));
    if (videoLength === 'hour') {
      setCurrentProgress(payload?.currentTime);
      return;
    } else if (videoLength === 'minutes') {
      setCurrentProgress(
        new Date(payload?.currentTime * 1000).toISOString().substr(14, 5),
      );
    } else {
      setCurrentProgress(
        new Date(payload?.currentTime * 1000).toISOString().substr(17, 2),
      );
    }
  };

  const renderedItems = ({ item, index }) => {
    return (
      <Pressable
        onPress={() => {
          console.log(item.description);
          props.navigation.navigate('Player', {

            exercise: item,
            allexercises: allexercises
          })
        }
        }
        style={styles.autoPlayContainer}>
        <Image
          source={{
            uri: item?.s3Image,
          }}
          resizeMode="cover"
          style={styles.thumbnail}
        />
        <View style={styles.detailContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.listVideoTitle} numberOfLines={2}>
              {item?.title}
            </Text>
            <Text style={styles.videoDescription} numberOfLines={2}>
              {`${item?.views} views . ${item?.uploaded === 'just now'
                ? 'just now'
                : `${item?.createdAt} ago`
                }`}
            </Text>
          </View>
        </View>
      </Pressable>

    );
  };

  const TouchableIcon = ({ name, children }) => {
    return (
      <TouchableOpacity style={styles.touchIcon}>
        <Icon name={name} size={30} color="#767577" />
        <Text style={styles.iconText}>{children}</Text>
      </TouchableOpacity>
    );
  };

  const HeaderComp = () => {
    return (
      <View>
        <View style={styles.descHead}>
          <Text style={styles.heading} numberOfLines={2}>
            {exerciseItem?.title}
          </Text>
          <Pressable onPress={() => setDescModal(true)}>
            <Icon name="chevron-down-outline" color="#040201" size={24} />
          </Pressable>
        </View>

        <View style={styles.optionsContainer}>
          <Pressable
            style={styles.option}
            onPress={() =>
              setVideoDetail({ ...videoDetail, liked: !videoDetail.liked })
            }>
            <Icon
              name={videoDetail?.liked ? 'heart' : 'heart-outline'}
              color={videoDetail?.liked ? '#F25252' : '"#040201"'}
              size={30}
            />
            <Text style={styles.optionCounter}>
              {numberFormat(data?.likes)}
            </Text>
          </Pressable>
          <Pressable
            style={styles.option}
            onPress={() =>
              setVideoDetail({ ...videoDetail, disliked: !videoDetail.disliked })
            }>
            <Icon
              name={
                videoDetail?.disliked
                  ? 'heart-dislike'
                  : 'heart-dislike-outline'
              }
              color="#040201"
              size={30}
            />
            <Text style={styles.optionCounter}>{data?.dislikes}</Text>
          </Pressable>
          <Pressable style={styles.option}>
            <Icon name="share-social-outline" color="#040201" size={30} />
            <Text style={styles.optionCounter}>Share</Text>
          </Pressable>
          <Pressable
            style={styles.option}
            onPress={() => setDownloadModal(true)}>
            <Icon name="download-outline" color="#040201" size={30} />
            <Text style={styles.optionCounter}>Download</Text>
          </Pressable>
          <Pressable
            style={styles.option}
            onPress={() =>
              setVideoDetail({ ...videoDetail, saved: !videoDetail.saved })
            }>
            <Icon
              name={videoDetail?.saved ? 'bookmark' : 'bookmark-outline'}
              color={videoDetail?.saved ? '#04abf2' : '#040201'}
              size={30}
            />
            <Text style={styles.optionCounter}>Save</Text>
          </Pressable>
        </View>
        <View style={styles.seperator} />
        <View style={styles.channelContainer}>
          <TouchableOpacity
            style={styles.channel}
            onPress={() =>
              props.navigation.navigate('ChannelScreen', {
                channelName: data?.channel,
                channelIndex: data?.channelId,
              })
            }>
            <Image
              source={{
                uri: exerciseItem?.s3Image,
              }}
              style={styles.channelAvtar}
            />
            <Text style={styles.channelName}>{data?.channel}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seperator} />
        <Pressable
          style={styles.commentContainer}
          onPress={() => setCommentModal(true)}>
          <View style={styles.descHead}>
            <Text style={styles.commentText}>
              Description
            </Text>
            <Icon name="ellipsis-horizontal" color="#040201" size={24} />
          </View>
          <View style={styles.commentAccount}>

            <Text style={styles.userCommentText}>
              {exerciseItem?.description}
            </Text>
          </View>
        </Pressable>
        <View style={styles.seperator} />
      </View>
    );
  };

  const AutoFooter = () => {
    return <View />;
  };
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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={this.handleOpen}>
        <Text>Content Below: Click To Reopen Video</Text>
      </TouchableOpacity>
      <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
        <Animated.View
          style={[{ width, height: videoHeight }, videoStyles]}
          {...this._panResponder.panHandlers}
        >
          <Video repeat style={StyleSheet.absoluteFill} 
            source={{
              uri: videoUrl
            }} 
            resizeMode="contain"
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
              <TouchableIcon name="thumbs-up">10,000</TouchableIcon>
              <TouchableIcon name="thumbs-down">3</TouchableIcon>
              <TouchableIcon name="share">Share</TouchableIcon>
              <TouchableIcon name="download">Save</TouchableIcon>
              <TouchableIcon name="plus">Add to</TouchableIcon>
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

          <View style={[styles.playlist, styles.padding]}>
            <Text style={styles.playlistUpNext}>Up next</Text>
            <PlaylistVideo
              image={Thumbnail}
              name="Next Sweet DJ Video"
              channel="Prerecorded MP3s"
              views="380K"
            />
            <PlaylistVideo
              image={Thumbnail}
              name="Next Sweet DJ Video"
              channel="Prerecorded MP3s"
              views="380K"
            />
            <PlaylistVideo
              image={Thumbnail}
              name="Next Sweet DJ Video"
              channel="Prerecorded MP3s"
              views="380K"
            />
            <PlaylistVideo
              image={Thumbnail}
              name="Next Sweet DJ Video"
              channel="Prerecorded MP3s"
              views="380K"
            />
            <PlaylistVideo
              image={Thumbnail}
              name="Next Sweet DJ Video"
              channel="Prerecorded MP3s"
              views="380K"
            />
            <PlaylistVideo
              image={Thumbnail}
              name="Next Sweet DJ Video"
              channel="Prerecorded MP3s"
              views="380K"
            />
            <PlaylistVideo
              image={Thumbnail}
              name="Next Sweet DJ Video"
              channel="Prerecorded MP3s"
              views="380K"
            />
          </View>
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
  },
});


export default Player;
