import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  Animated,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FilterModal } from "..";
import {
  ProgressBar,
  HorizontalWorkoutCategoryCard,
} from "../../components";
import {
  FONTS,
  SIZES,
  COLORS,
} from "../../constants";
import { LogBox } from 'react-native';
//api
import { Storage, API, graphqlOperation } from "aws-amplify";
import { getWorkout, listUsers, listWorkouts } from "../../src/graphql/queries";
import { listWorkoutProperties } from "../../src/graphql/queries";
import { listExercises } from "../../src/graphql/queries";
import { getCustomWorkout } from "../../src/graphql/custom-queries";
 

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



const WorkoutDetail = ({ navigation, route }) => {
  
  const av = new Animated.Value(0);
  av.addListener(() => {return});
  
  
  // const scrollA = React.useRef(new Animated.Value(0)).current;
  const scrollA = React.useRef(av).current;

  const [banner, setBanner] = React.useState(null);
  const [exercises, setExercises] = React.useState([]);
  const [workoutProperties, setWorkoutProperties] = React.useState([]);
  const [showFilterModal, setShowFilterModal] = React.useState(false);
  const workoutItm = route.params.workout;

  async function fetchExercises(workoutId) {
    let filter = {
      workoutExercisesId: {
        eq: workoutId,
      },
    };


    const exercisesData = await API.graphql({
      query: listExercises,
      variables: { filter: filter },
    });

    const exercises = await Promise.all(
      exercisesData.data.listExercises.items.map(async (exercise) => {

        const image = await Storage.get(exercise.imageUrl);
        const headerImage = await Storage.get(exercise.imageUrl);
        const video = await Storage.get(exercise.videoUrl);
        exercise.name = exercise.title;
        exercise.longdescription = exercise.description;
        exercise.description = (exercise.description).slice(0, 20) + "...";
        exercise.s3Image = image;
        exercise.videoUrl = video;
        return exercise;
      })
    );

    setExercises(exercises);
  }



  async function fetchWorkoutProperties(workoutId) {

    const workoutPropertiesData = await API.graphql(graphqlOperation(
      getCustomWorkout, { id: workoutId }
    ));

    const workout = {...workoutPropertiesData.data.getWorkout};

    if(workout){
      const image = await Storage.get(workout.imageUrl);
      setBanner(image);
    }else{
      //error print
    }
  
 
    setWorkoutProperties(workout);
  }



  async function fetchTrainers() {
    try {
      let filter = {
        userType: {
          eq: "TRAINER",
        },
      };

      const trainersData = await API.graphql({
        query: listUsers, variables: { filter: filter }
      });
      const trainers = await Promise.all(
        trainersData.data.listUsers.items.map(async (trainers) => {
          trainers.photo = await Storage.get(trainers.imageUrl);

          return trainers;
        })
      );

      setTrainers(trainers);
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {

    let { workout } = route.params;
    LogBox.ignoreLogs(['Setting a timer for a long period of time']);
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    console.log("wqwqwq " + JSON.stringify(route.params));
    setBanner(route.params.workout?.workout?.s3Image);
    //fetchTrainers();

    fetchExercises(workout.workoutID);
    fetchWorkoutProperties(workout.workoutID);


  }, []);

  function renderHeaderSection() {

    return (

      <>
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={{ uri: banner }}
          />


        </View>
        <View style={styles.detailsSection}>
          <Text style={{ textTransform: 'capitalize', paddingLeft: SIZES.padding, flex: 1, color: COLORS.VIEW.black, ...FONTS.body2Bold }}>{workoutProperties.title}</Text>
          <Text style={{ textTransform: 'capitalize', paddingLeft: SIZES.padding, paddingTop: SIZES.padding, flex: 1, color: COLORS.VIEW.black, ...FONTS.body4 }}>{workoutProperties.duration} min - Level {workoutProperties.level}</Text>
          
          <ReadMoreText text={workoutProperties.headerDescription}
            textStyle={{ paddingRight: SIZES.padding, textTransform: 'capitalize', paddingLeft: SIZES.padding, flex: 1, color: COLORS.VIEW.secondary60, ...FONTS.body4 }}
            readMoreStyle={{ paddingRight: SIZES.padding, textTransform: 'capitalize', paddingLeft: SIZES.padding, flex: 1, color: COLORS.VIEW.mindfullyOrangeDark, ...FONTS.body4 }}/>
           

        </View>
      </>
    )
  }

  function renderWorkoutDetails() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-around',
        }}
      >
        {/* Title, running time and progress bar */}
        <View>


          {/* Progress Bar */}
          {/* <ProgressBar
            containerStyle={{
              marginTop: SIZES.radius
            }}
            barStyle={{
              height: 5,
              borderRadius: 3
            }}
            barPercentage={12}
          /> */}
        </View>

        <TouchableOpacity
          style={{
            height: SIZES.videoPlayHeight,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: Platform.OS === 'ios' ? SIZES.padding * 3 : SIZES.padding * 3,
            borderRadius: 15,
            backgroundColor: COLORS.lightYellow
          }}
          onPress={() => console.log("Watch")}
        >
          <Text style={{ color: COLORS.VIEW.black, ...FONTS.body3 }}>{"START WORKOUT"}</Text>
        </TouchableOpacity>

      </View>
    )
  }

 

  return (
    <>
      <Animated.ScrollView
        style={{
          flex: 1,
          flexGrow: 1
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
      >
        {/* Search */}
        {/* {renderSearch()} */}
        {renderHeaderSection()}

        {/* Filter */}
        {showFilterModal && (
          <FilterModal
            isVisible={showFilterModal}
            onClose={() => setShowFilterModal(false)}
          />
        )}

        {/* List */}
        <View>
          <FlatList
            data={exercises}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={false}
            listKey="1.1"
            ListHeaderComponent={
              <View>
                {/* Trainers */}
                {/* {renderTrainerSection()} */}

                {/* Menu Type */}
                {/* {renderHeaderTypes()} */}


              </View>
            }
            renderItem={({ item, index }) => {
              return (



                <HorizontalWorkoutCategoryCard
                  containerStyle={{
                    height: SIZES.exerciseCardHeight,
                    alignItems: "center",
                    marginLeft:SIZES.padding

                  }}
                  imageStyle={{
                    marginTop: SIZES.videoThumbnailTop,

                    height: SIZES.videoThumbnailHeight,
                    width: SIZES.videoThumbnailWidth,
                    borderRadius: SIZES.radius
                  }}
                  item={item}
                  onPress={() =>{
                    //console.log("When I click on Exercise " + JSON.stringify(item));
                    navigation.navigate("Player", { selectedTrackIndex: index, tracks:exercises, exercise: item, allexercises: exercises, workoutproperties: workoutItm })
                  }
                  }

                />

              );
            }}
            ListFooterComponent={<View style={{ height: 200 }} />}
          />
        </View>
      </Animated.ScrollView>

      <View>
        {renderWorkoutDetails()}
      </View>
    </>
  );
};

export default WorkoutDetail;

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: scrollA => ({
    height: SIZES.WORKOUT.bannerHeight,
    width: '100%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-350, 0, 350, 350 + 1],
          outputRange: [-350 / 2, 0, 350 * 0.75, 350 * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-350, 0, 350, 350 + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
 

  detailsSection: {

    marginTop: SIZES.VIEW.top
  },

  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  userName: {
    textAlign: "center",
    fontSize: 12,
    textTransform: "lowercase",
    marginTop: 5,
  },
});
