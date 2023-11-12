import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  StyleSheet,
  ImageBackground,
  Animated,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FilterModal } from "..";
import {
  Header,
  IconButton,
  IconLabel,
  LineDivider,
  StepperInput,
  TextButton,
  HorizontalExerciseCard,
  ProgressBar,
  HorizontalWorkoutCard,
  Loader
} from "../../components";
import {
  FONTS,
  SIZES,
  COLORS,
  icons,
  images,
} from "../../constants";
import { LogBox } from 'react-native';

//api
import { Storage, API, graphqlOperation } from "aws-amplify";
import { listProgramWorkouts } from "../../src/graphql/queries";
import { User } from "../../src/models";


const ProgramDetail = ({ navigation, route }) => {

  

  const scrollA = React.useRef(new Animated.Value(0)).current;
  const [loading, setLoading] = React.useState(true);
  const [banner, setBanner] = React.useState(null);
  const [workouts, setWorkouts] = React.useState([]);
  const [program, setProgram] = React.useState([]);
  const [workoutProperties, setWorkoutProperties] = React.useState([]);
  const [trainers, setTrainers] = React.useState([]);
  const [showFilterModal, setShowFilterModal] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [time, setTime] = React.useState();
  const [type, setType] = React.useState();
  const [exercisesLen, setExercisesLen] = React.useState();
  const [programProperties, setProgramProperties] = React.useState([]);
  const [muscleGroups, setMuscleGroups] = React.useState([]);
  const workoutItm = route.params.program;


  async function fetchWorkouts(programID) {
    setLoading(true);
    let filter = {
      programID: {
        eq: programID,
      },
    };


    const workoutData = await API.graphql({
      query: listProgramWorkouts,
      variables: { filter: filter },
    });


    const workouts = await Promise.all(
      workoutData.data.listProgramWorkouts.items.map(async (workout) => {
        const image = await Storage.get(workout.workout.imageUrl);
        workout.title = workout.workout.title;
        workout.duration = workout.workout.duration;
        workout.image = image;
        workout.workout.image = image;
        return workout;
      })
    );
    setLoading(false);
    setWorkouts(workouts);
  }






  React.useEffect(() => {
 
    let { program } = route.params;
    //LogBox.ignoreLogs(['Setting a timer for a long period of time']);
    //LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

    fetchWorkouts(program.id);
    handleProgramProperties(program);

    setProgram(program);
    console.log(JSON.stringify(program));

  }, []);


  function handleProgramProperties(program) {
    let muscleGroups = program?.muscleGroups.items;
    setMuscleGroups(muscleGroups);

    // console.log("Muscle Groups " + JSON.stringify(muscleGroups));
  }



  function renderHeaderSection() {
    return (
      <View style={styles.bannerContainer}>
        <Animated.Image
          style={styles.banner(scrollA)}
          source={{ uri: route.params.program?.s3Image }}
        />
      </View>
    )
  }
  function renderProgramProperties() {
    return (
      <View style={{ ...styles.bannerContainer, flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            marginLeft: SIZES.padding,
            marginRight: 1
          }}
          onPress={() => {
            setSelectedMenuType(item.id);
          }}
        >
          <LinearGradient colors={['#FFB3B3', '#FFB3B3']} style={styles.gradient}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h5,
                padding: SIZES.base
              }}
            >
              {workouts.length + " Workouts"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginLeft: SIZES.padding,
            marginRight: 1
          }}
          onPress={() => {
            setSelectedMenuType(item.id);
          }}
        >
          <LinearGradient colors={['#FFDBA4', '#FFDBA4']} style={styles.gradient}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h5,
                padding: SIZES.base
              }}
            >
              {program.level ?? "MEDIUM"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    )
  }


  function renderHeaderTypes() {
    return (
      <FlatList
        horizontal
        data={muscleGroups}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          marginBottom: 20,
        }}
        ListHeaderComponent={
          <View style={{ flex: 1 }}>
            {/* Trainers */}
            {renderProgramProperties()}
          </View>
        }
        listKey="1.6"
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight: 1
            }}
            onPress={() => {
              setSelectedMenuType(item.id);
            }}
          >
            <LinearGradient colors={['#444f09', '#444f09']} style={styles.gradient}>
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.h5,
                  padding: SIZES.base
                }}
              >
                {item.muscleGroup.name}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    );
  }


  function renderProgramDetails() {
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
          <ProgressBar
            containerStyle={{
              marginTop: SIZES.radius
            }}
            barStyle={{
              height: 5,
              borderRadius: 3
            }}
            barPercentage={12}
          />
        </View>

        <TouchableOpacity
          style={{
            height: SIZES.videoThumbnailHeight,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: Platform.OS === 'ios' ? SIZES.padding * 3 : SIZES.padding * 3,
            borderRadius: 15,
            backgroundColor: COLORS.lightYellow
          }}
          onPress={() => console.log("Watch")}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>{"START PROGRAM"}</Text>
        </TouchableOpacity>

      </View>
    )
  }


  function renderProgramSection() {
    return (
      <View>
        <Text style={{ textTransform: 'capitalize', paddingTop: SIZES.padding, paddingLeft: SIZES.padding, flex: 1, color: COLORS.black, ...FONTS.h7 }}>{"PROGRAM"}</Text>
      </View>
    );
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
        {renderHeaderSection()}
        <Text style={{ textTransform: 'capitalize', paddingLeft: SIZES.padding, flex: 1, color: COLORS.black, ...FONTS.h6 }}>{route.params.program?.description}</Text>
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
            data={workouts}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={false}
            listKey="1.1"
            ListHeaderComponent={
              <View>
                {/* Title */}
                {renderProgramSection()}

                {/* Menu Type */}
                {renderHeaderTypes()}

              </View>
            }
            renderItem={({ item, index }) => {
              return (

                <>
                  {loading ? (
                    <View style={
                      {
                        height: SIZES.cardHeight,
                        alignItems: "center",
                        marginHorizontal: SIZES.padding,
                        marginBottom: SIZES.radius,
                        backgroundColor: COLORS.white2,
                        borderRadius: 10,
                        paddingTop: SIZES.padding
                      }
                    }>
 
                      <Loader />
                    </View>

                  ) : (

                    <>

                      <HorizontalWorkoutCard
                        containerStyle={{
                          height: SIZES.exerciseCardHeight,
                          alignItems: "center",
                          marginHorizontal: SIZES.padding,
                          marginBottom: SIZES.radius,
                        }}
                        imageStyle={{
                          marginTop: SIZES.videoThumbnailTop,
                          marginLeft: SIZES.videoThumbnailLeft,
                          height: SIZES.videoThumbnailHeight,
                          width: SIZES.videoThumbnailWidth,
                          borderRadius: SIZES.radius
                        }}
                        item={item}
                        onPress={() =>
                          navigation.navigate("WorkoutDetail", { workout: item })
                        }
                      />
                    </>

                  )}</>
              );
            }}
            ListFooterComponent={<View style={{ height: 200 }} />}
          />
        </View>
      </Animated.ScrollView>

      <View>
        {renderProgramDetails()}
      </View>
    </>
  );
};

export default ProgramDetail;

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: scrollA => ({
    height: 350,
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
  userImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: "#ffffff",
    borderWidth: 4,
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
