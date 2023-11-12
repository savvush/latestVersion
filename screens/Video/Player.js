import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions, Image,
  ScrollView,
  FlatList,
  Alert
} from 'react-native';

import AlbumArt from './AlbumArt';

import SeekBar from './SeekBar';
import Controls from './Controls';
import Video from 'react-native-video';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES } from '../../constants';
import { VerticalCoachesCard, VerticalPlaylistCard } from '../../components';
import { API, Auth, graphqlOperation, Storage } from 'aws-amplify';
import { createUserWorkoutHistory, createUserWorkoutProgress, updateUserWorkoutProgress } from '../../src/graphql/mutations';
import { getWorkout, listUserWorkoutProgresses, listWorkoutProperties, listWorkouts } from '../../src/graphql/queries';
import { listCustomUserWorkoutProgresses } from '../../src/graphql/custom-queries';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const ReadMoreText = ({ readMoreStyle, text, textStyle }) => {
  const [showMoreButton, setShowMoreButton] = React.useState(true);
  const [textShown, setTextShown] = React.useState(false);
  const [numLines, setNumLines] = React.useState(2);

  const toggleTextShown = () => {
    setTextShown(!textShown);
  };

  React.useEffect(() => {
    setNumLines(textShown ? undefined : 2);
  }, [textShown]);

  const onTextLayout = React.useCallback(
    (e) => {
      if (e.nativeEvent.lines.length > 2 && !textShown) {
        setShowMoreButton(true);
        setNumLines(2);
      }
    },
    [textShown],
  );

  return (
    <>
      <Text onTextLayout={onTextLayout} numberOfLines={numLines} style={textStyle} ellipsizeMode="tail">
        {text}
      </Text>

      {showMoreButton ? (
        <Text onPress={toggleTextShown} style={readMoreStyle}>
          {textShown ? 'Read Less' : 'Read More'}
        </Text>
      ) : null}
    </>
  );
};


export default class Player extends Component {

  constructor(props) {

    super(props);


    this.state = {
      paused: true,
      totalLength: 1,
      workout: {},
      progresses: {},
      currentPosition: 0,
      selectedTrack: this.props.route.params?.selectedTrackIndex,
      selectedTrackId: this.props.route.params?.exercise.id,
      selectedWorkoutId: this.props.route.params?.exercise.workoutExercisesId,
      repeatOn: false,
      shuffleOn: false,
      orientation: window.height >= window.width ? 'portrait' : 'landscape',
      currentVideo: this.props.route.params?.exercise?.videoUrl,
      imageUrl: this.props.route.params?.exercise?.s3Image,
      description: this.props.route.params?.exercise?.longdescription,
      name: this.props.route.params?.exercise?.name,
      nextVideo: this.props?.route?.params?.tracks[this.props.route.params?.selectedTrackIndex + 1],
      dimensions: {
        window,
        screen,
        resizedWidth: window.height >= window.width ? window.width : window.width * 0.6,
        resizedHeight: window.height >= window.width ? window.height * 0.5625 : window.height * 1,
        resizedTop: 0,
        controlFlowDirection: "row"
      },
      playlist: []// this.props?.route?.params?.tracks
    };

    // const { videoUrl } = this.props.route.params.tracks[this.state.selectedTrack];
    // const nextVideo = this.props?.route?.params?.tracks[this.state.selectedTrack + 1];
    // console.log("111 " + JSON.stringify(nextVideo));

    // const imageUrl = this.props.route.params?.exercise?.s3Image;
    // const description = this.props.route.params?.exercise?.longdescription;
    // const name = this.props.route.params?.exercise?.name;

    if (window.height >= window.width) {
      this.state = {
        ...this.state, dimensions: {
          window, screen,
          resizedWidth: window.width * 1,
          resizedHeight: window.height * 0.5625,
          resizedControlWidth: window.width * 1,
          resizedControlHeight: window.height - 0.5625,
          resizedTop: 0,
          controlFlowDirection: "row",
          portraitMode: "column",
          orientation: "portrait"
        }
      };

    } else {
      this.state = {
        ...this.state, dimensions: {
          window, screen,
          resizedWidth: window.width * 0.7,
          resizedHeight: window.height * 1,
          resizedControlWidth: window.width - (window.width * 0.7),
          resizedControlHeight: window.height * 1,
          resizedTop: 0,
          controlFlowDirection: "column",
          portraitMode: "row"
        },
        orientation: "landscape"
      };
    }


  }


  onChange = ({ window, screen }) => {

    if (window.height >= window.width) {
      this.setState({
        dimensions: {
          window, screen,
          resizedWidth: window.width * 1,
          resizedHeight: window.height * 0.5625,
          resizedControlWidth: window.width * 1,
          resizedControlHeight: window.height - 0.5625,
          resizedTop: 0,
          controlFlowDirection: "row",
          portraitMode: "column",
          orientation: "portrait"
        }
      });

    } else {
      this.setState({
        dimensions: {
          window, screen,
          resizedWidth: window.width * 0.7,
          resizedHeight: window.height * 1,
          resizedControlWidth: window.width - (window.width * 0.7),
          resizedControlHeight: window.height * 1,
          resizedTop: 0,
          controlFlowDirection: "column",
          portraitMode: "row"
        },
        orientation: "landscape"
      });
    }
  };


  async fetchWorkoutDetails() {

    const workoutPropertiesData = await API.graphql(graphqlOperation(
      getWorkout, { id: this.state.selectedWorkoutId }
    ));
    console.log("workout me " + JSON.stringify(workoutPropertiesData.data.getWorkout));
    this.setState({ workout: workoutPropertiesData.data.getWorkout })

    const exercises = await Promise.all(
      workoutPropertiesData.data.getWorkout.exercises.items.map(async (props) => {

        const image = await Storage.get(props.imageUrl);
        const video = await Storage.get(props.videoUrl);
        props.name = props.title;
        props.longdescription = props.description;
        props.description = (props.description).slice(0, 20) + "...";
        props.s3Image = image;
        props.videoUrl = video;
        return props;
      })
    );



    this.setState({ playlist: exercises })
  }

  async fetchUserWorkoutProgress() {
    try {
      //first get the user
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

      let filter = {
        userId: { eq: authUser.attributes.sub },
        workoutUserWorkoutProgressId: { eq: this.state.selectedWorkoutId },
      };

      const progresses = await API.graphql({
        query: listCustomUserWorkoutProgresses, variables: { filter: filter }
      });


      if (progresses.data.listUserWorkoutProgresses.items.length) {
        this.setState({ progresses: progresses.data.listUserWorkoutProgresses.items[0] });
      } else {
        const newUserProgress = await API.graphql(
          graphqlOperation(createUserWorkoutProgress, {
            input: {
              userId: authUser.attributes.sub,
              completedExercises: [],
              progress: 0,
              isCompleted: false,
              workoutUserWorkoutProgressId: this.state.selectedWorkoutId,
              workoutName: this.state.workout.title,
              workoutExerciseCount:this.state.workout?.exercises?.items?.length
            }
          }
          ));
        this.setState({ progresses: newUserProgress.data.createUserWorkoutProgress });
      }

    } catch (err) {
      console.log(err);
    }

  }


  async onEnd(data) {
    try {
      //first get the user
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
      //then save it to history table 
      const exerciseId = this.state.selectedTrackId;
      if (!this.state.progresses) {
        console.log("No progress found");
        return;
      } else {
        var completedExercises = [...this.state.progresses.completedExercises];
        completedExercises.push(exerciseId);

        completedExercises = [...new Set(completedExercises)];
        var totalExerciceOfCurrentWorkout = this.state.workout.exercises.items.length;
        const completedExerciseOfWokrout = completedExercises.length;
        const progress = completedExerciseOfWokrout / totalExerciceOfCurrentWorkout;

        const newUserProgress = await API.graphql(
          graphqlOperation(updateUserWorkoutProgress, {
            input: {
              id: this.state.progresses.id,
              userId: this.state.progresses.userId,
              workoutUserWorkoutProgressId: this.state.progresses.workoutUserWorkoutProgressId,
              completedExercises: completedExercises,
              progress: progress,
              isCompleted: progress === 1
            }
          }
          ));
        this.setState({ progresses: newUserProgress.data.updateUserWorkoutProgress });
        Alert.alert("Heyy! Yolu Completed of " + progress);

      }


    } catch (error) {
      console.log(error);
    }

  }



  async componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener(
      'change',
      this.onChange,
    );
    await this.fetchWorkoutDetails();
    await this.fetchUserWorkoutProgress();
  }

  componentWillUnmount() {
    this.dimensionsSubscription?.remove();
  }

  setDuration(data) {
    this.setState({ totalLength: Math.floor(data.duration) });
  }

  setTime(data) {
    this.setState({ currentPosition: Math.floor(data.currentTime) });
  }

  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }

  onBack() {
    if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        paused: false,
        totalLength: 1,
        isChanging: false,
        selectedTrack: this.state.selectedTrack - 1,
        nextVideo: this.props?.route?.params?.tracks[this.state.selectedTrack - 1],
        currentVideo: this.props?.route?.params?.tracks[this.state.selectedTrack].videoUrl,
      }), 0);


    } else {
      this.refs.audioElement.seek(0);
      this.setState({
        currentPosition: 0,
      });
    }
  }


  onForward() {

    if (this.state.selectedTrack < this.props.route.params.tracks.length - 1) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        totalLength: 1,
        paused: false,
        isChanging: false,
        selectedTrack: this.state.selectedTrack + 1,
        nextVideo: this.props?.route?.params?.tracks[this.state.selectedTrack + 1],
        currentVideo: this.props?.route?.params?.tracks[this.state.selectedTrack].videoUrl,
      }), 0);
    }

  }

  async onSelectFromList(index) {


    
    this.refs.audioElement && this.refs.audioElement.seek(0);
    this.setState({ isChanging: true });
    setTimeout(() => this.setState({
      currentPosition: 0,
      totalLength: 1,
      paused: false,
      isChanging: false,
      selectedTrack: index,
      selectedTrackId:this.props?.route?.params?.tracks[index].id,
      nextVideo: this.props?.route?.params?.tracks[index + 1],
      currentVideo: this.props?.route?.params?.tracks[index].videoUrl,
    }), 0);

    await this.fetchUserWorkoutProgress();
    this.scrollToIndex(index)

  }

  getItemLayout = (data, index) => (
    { length: SIZES.WORKOUT.cardPlaylistImage + SIZES.padding, offset: (SIZES.WORKOUT.cardPlaylistImage + SIZES.padding) * index, index }
  )
  scrollToIndex = (index) => {

    this.flatListRef.scrollToIndex({ animated: true, index: index, viewPosition: 0 });
  }

  scrollToItem = () => {
    let randomIndex = Math.floor(Math.random(Date.now()) * this.props.data.length);
    this.flatListRef.scrollToIndex({ animated: true, index: "" + randomIndex });
  }

  render() {
    //const videoUrl = this.props.route.params?.exercise?.videoUrl;
    //console.log("sss1 " + JSON.stringify(this.props.route.params.tracks));
    //const { videoUrl } = this.props.route.params.tracks[this.state.selectedTrack];



    const imageUrl = this.props?.route?.params?.tracks[this.state.selectedTrack].s3Image;
    const description = this.props?.route?.params?.tracks[this.state.selectedTrack]?.longdescription;
    const name = this.props?.route?.params?.tracks[this.state.selectedTrack]?.name;
    const {
      dimensions: { window, screen },
    } = this.state;


    const video = this.state.isChanging ? null : (
      <Video source={{ uri: this.state.currentVideo }} // Can be a URL or a local file.
        ref="audioElement"
        playInBackground={true}
        playWhenInactive={true}
        paused={this.state.paused}               // Pauses playback entirely. 
        // Fill the whole screen at aspect ratio.
        repeat={false}                // Repeat forever.
        onLoadStart={this.loadStart} // Callback when video starts to load
        onLoad={this.setDuration.bind(this)}    // Callback when video loads
        onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
        onEnd={() => { this.onEnd() }}           // Callback when playback finishes
        onError={this.videoError}    // Callback when video cannot be loaded
        style={{
          width: this.state.dimensions.resizedWidth,
          height: this.state.dimensions.resizedHeight,
          backgroundColor: COLORS.black,
          marginTop: this.state.dimensions.resizedTop,
          paddingTop: 0
        }}
      //poster={imageUrl} 
      />
    );

    return (


      <View style={styles.container}>
        {/* <StatusBar hidden={true} /> */}
        {/* <Header message="Playing From Charts" /> */}
        {/* <AlbumArt url={track.albumArtUrl} /> */}


        <View style={{ flexDirection: this.state.dimensions.portraitMode }}>

          {video}
          <Text style={{ textTransform: 'capitalize', paddingLeft: SIZES.padding, flex: 1, color: COLORS.VIEW.black, ...FONTS.body2Bold }}>{name}</Text>

          {this.state.dimensions.orientation === "portrait" &&
            <SeekBar
              onSeek={this.seek.bind(this)}
              trackLength={this.state.totalLength}
              onSlidingStart={() => this.setState({ paused: true })}
              currentPosition={this.state.currentPosition}
            />
          }

          <View
            style={{
              width: this.state.dimensions.resizedControlWidth,
              height: this.state.dimensions.resizedControlHeight,
              flexDirection: "column",
              marginTop: this.state.dimensions.resizedTop,
              backgroundColor: COLORS.VIEW.white,
              alignItems: "stretch",
              paddingTop: 0,

            }}
          >



            <Controls
              onPressRepeat={() => this.setState({ repeatOn: !this.state.repeatOn })}
              repeatOn={this.state.repeatOn}
              shuffleOn={this.state.shuffleOn}
              forwardDisabled={this.state.selectedTrack === this.props.route.params.tracks.length - 1}
              onPressShuffle={() => this.setState({ shuffleOn: !this.state.shuffleOn })}
              onPressPlay={() => this.setState({ paused: false })}
              onPressPause={() => this.setState({ paused: true })}
              onBack={this.onBack.bind(this)}
              onForward={this.onForward.bind(this)}
              paused={this.state.paused}
              controlDirection={this.state.dimensions.controlFlowDirection} />
            <ScrollView
              contentContainerStyle={{
                flexGrow: 0
              }}
            >
              <View style={{
                width: this.state.dimensions.resizedWidth,

                alignContent: "flex-start", alignItems: "flex-start",
              }}>
                <View style={{ height: SIZES.padding + 10, marginBottom: SIZES.PLAYER.padding }}>
                  <Text style={{ height: SIZES.padding, textTransform: 'capitalize', paddingLeft: SIZES.padding, flex: 1, color: COLORS.VIEW.black, ...FONTS.body2Bold }}>{name}</Text>
                </View>
                <ReadMoreText text={description}
                  textStyle={{ paddingRight: SIZES.padding, textTransform: 'capitalize', paddingLeft: SIZES.padding, color: COLORS.VIEW.black, ...FONTS.body4 }}
                  readMoreStyle={{ paddingRight: SIZES.padding, textTransform: 'capitalize', paddingLeft: SIZES.padding, color: COLORS.VIEW.mindfullyOrangeDark, ...FONTS.body4 }} />


              </View>


              <View style={{ height: SIZES.VIEW.playlistHeight, }}>
                {/* <View style={styles.square} />
                <View style={styles.square}>
                <Image
                    source={{ uri: this.state.nextVideo?.s3Image }}
                    style={{...styles.square }}
                  />
                  <Text>{"NEXT"}</Text>
                </View>
                <View style={styles.square}>
                
                </View> */}

                <FlatList
                  data={this.state.playlist}
                  keyExtractor={item => `${item.id}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  initialScrollIndex={this.state.selectedTrack}
                  ref={(ref) => { this.flatListRef = ref; }}
                  getItemLayout={this.getItemLayout}
                  renderItem={({ item, index }) => (
                    <VerticalPlaylistCard
                      containerStyle={{
                        marginLeft: index == 0 ? SIZES.padding : 18,
                        marginRight: index == this.state.playlist.length - 1 ? SIZES.padding : 0
                      }}
                      isPlaying={this.state.selectedTrack == index}
                      item={item}
                      onPress={() => {
                        this.onSelectFromList(index);

                      }}
                      isCompleted={this.state.progresses.completedExercises?.includes(item.id)}
                    />
                  )}
                />


              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
const { width, height } = Dimensions.get('window');
const imageSize = width - 50;


const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.VIEW.white,
  },
  containerBottom: {
    backgroundColor: "#7CA1B4",
    marginLeft: SIZES.padding,
    marginRight: SIZES.padding,
    flex: 1,
    alignItems: "stretch", // ignore this - we'll come back to it
    justifyContent: "space-around", // ignore this - we'll come back to it
    flexDirection: "row",
  },
  square: {
    backgroundColor: "#7cb48f",
    width: 100,
    height: 100,

  },
  audioElement: {
    height: imageSize,
    width: imageSize,
  },
  containerVideo: {

    alignItems: 'center',
    marginTop: 30,
    paddingLeft: 24,
    paddingRight: 24,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
};