



import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  SafeAreaView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Video from "react-native-video";
import { FilterModal } from "..";
import {
  HorizontalWorkoutLoader,
  HorizontalWorkoutCategoryCard,
  Header,
} from "../../components";
import {
  FONTS,
  SIZES,
  COLORS,
  icons,
  images,
} from "../../constants";

//api
import { Storage, API, graphqlOperation } from "aws-amplify";
import { listWorkouts, listWorkoutTrainingTypes } from "../../src/graphql/queries";
import { listUsers } from "../../src/graphql/queries";
import { User } from "../../src/models";
const Section = ({ title, onPress, children }) => {
  return (
    <>
      <View
        style={{
          height: SIZES.VIEW.header,
          flexDirection: 'row',
          backgroundColor: COLORS.VIEW.primary,
          alignItems: "center",

        }}
      >

        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>

          <View style={{
            flex: 1,

            justifyContent: 'center',
            height: SIZES.VIEW.header,
            alignItems: "center",
            marginHorizontal: SIZES.padding,
            marginTop: SIZES.padding,

          }}>
            <Text style={{ color: COLORS.white, ...FONTS.body2Bold }}>{title}</Text>
            {/* <Text style={{...FONTS.body4}}>{date}</Text> */}
          </View>

        </View>


      </View>

      <SafeAreaView style={{ flex: 1 }}>

        {children}
      </SafeAreaView>


    </>
  );
};

const CoachGuidedWorkouts = ({ navigation, route }) => {
  const { trainingType } = route.params;
  const [selectedCoachId, setSelectedCoachId] = React.useState()
  const [selectedSize, setSelectedSize] = React.useState("");
  const [workoutItem, setWorkoutItem] = React.useState([]);
  const [workouts, setWorkouts] = React.useState([]);
  const [exercises, setExercises] = React.useState([]);
  const [trainers, setTrainers] = React.useState([]);
  const [showFilterModal, setShowFilterModal] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function fetchExercises(workoutId) {
    let filter = {
      workoutID: {
        eq: workoutId,
      },
    };

    const exercisesData = await API.graphql({
      query: listWorkoutExercises,
      variables: { filter: filter },
    });
    const exercises = await Promise.all(
      exercisesData.data.listWorkoutExercises.items.map(async (exercises) => {
        let { exercise } = exercises;
        const image = await Storage.get("thumbnails/" + exercise.imageUrl);
        const headerImage = await Storage.get(exercise.headerImage);
        exercise.s3Image = image;
        return exercise;
      })
    );

    setExercises(exercises);
  }

  const fetchTrainers = async () => {



    //     await API.graphql(
    //       graphqlOperation(updateWorkout, { 
    //            input: { 
    //                id: "1779f6c2-9dcb-4160-82ba-4060fc34f9e1", 
    //                title: "Hello Cardio", 
    //                description: "What a nice day, isnt it!",
    //                imageUrl:"workouts/your.png",
    //                _version: 1
    //            }
    //      }
    //  ));


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

  const fetchWorkoutTrainingTypes = async () => {
    try {
      let filter = {
        trainingTypeID: {
          eq: trainingType.id,
        },
      };

      const workoutsData = await API.graphql({
        query: listWorkoutTrainingTypes, variables: { filter: filter }
      });


      const workouts = await Promise.all(
        workoutsData.data.listWorkoutTrainingTypes.items.map(async (workout) => {
          workout.workout.name = workout.workout.title;
          workout.workout.s3Image = await Storage.get(workout.workout.imageUrl);

          return workout;
        })
      );
      setLoading(false);
      setWorkouts(workouts);
    } catch (err) {
      console.log(err);
    }
  }


  const fetchTrainerWorkouts = async (trainerId) => {
    try {
      let filter = {
        trainingTypeID: {
          eq: trainingType.id,
        },
      };

      const workoutsData = await API.graphql({
        query: listWorkoutTrainingTypes, variables: { filter: filter }
      });

      let trainerWorkouts = workoutsData.data.listWorkoutTrainingTypes.items.filter(function (e) {
        return e.workout.workoutAuthorUserId == trainerId;
      });



      setWorkouts(trainerWorkouts);
    } catch (err) {
      console.log(err);
    }
  }




  const fetchWorkouts = async (coachId) => {

    try {
      let filter = {
        coachID: {
          eq: coachId,
        },
      };

      const workoutsData = await API.graphql({
        query: listCoachWorkouts, variables: { filter: filter }
      });
      const workouts = await Promise.all(
        workoutsData.data.listCoachWorkouts.items
          .filter(async (workout) => {
            for (const item of workout.trainingTypes?.items) {

              console.log("wwwwww" + trainingType.id);

              if (item.trainingTypeID == trainingType.id) {
                return workout;
              }
            }
          })
          .map(async (workout) => {

            workout.photo = await Storage.get(workout.imageUrl);
            return workout;
          })
      );
      setWorkouts(workouts);
    } catch (err) {
      console.log(err);
    }

  }

  React.useEffect(() => {
    let { workout } = route.params;
    fetchTrainers();
    fetchWorkoutTrainingTypes();

  }, []);




  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 45,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {/* Icon */}
        <Image
          source={icons.search}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black,
          }}
        />

        {/* Text Input */}
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.body4,
          }}
          placeholder="Search Trainer..."
        />

        {/* Filter Button */}
        <TouchableOpacity onPress={() => setShowFilterModal(true)}>
          <Image
            source={icons.filter}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderTrainerSection() {
    return (
      <View style={{ marginTop: SIZES.padding }}>

      </View>
      // <Section
      //   title="Our Coaches"
      //   onPress={() => console.log("Show all popular items")}
      // >
      //   <FlatList
      //     data={trainers}
      //     keyExtractor={(item) => `${item.id}`}
      //     horizontal
      //     showsHorizontalScrollIndicator={false}
      //     renderItem={({ item, index }) => (
      //       <VerticalCoachesCard
      //         containerStyle={{
      //           marginLeft: index == 0 ? SIZES.padding : 18,
      //           marginRight: index == trainers.length - 1 ? SIZES.padding : 0,
      //         }}
      //         item={item}
      //         onPress={() =>
      //           navigation.navigate("CoachDetail", { coach: item })
      //         }
      //       />
      //     )}
      //   />
      // </Section>
    );
  }

  function renderTrainingTypes() {
    return (

      <>
        <Section
          title={trainingType.title}

          onPress={() => { setSelectedTab(constants.screens.program) }}
        >

          {loading ? (
            <View style={
              {
                flex: 1,
                height: SIZES.loadingIndicatorHeight,
                padding: SIZES.padding,
                alignSelf: 'center',
                justifyContent: 'space-between',
                borderRadius: SIZES.radius,
                shadowColor: COLORS.VIEW.shadow,
                shadowOffset: { width: -5, height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                flexDirection: 'row',
                flexWrap: 'wrap'
              }
            }>

              <HorizontalWorkoutLoader />
            </View>

          ) : (

            <FlatList
              vertical
              data={workouts}
              keyExtractor={(item) => `${item.id}`}
              showsVerticalScrollIndicator={false}
              // ListFooterComponent={
              //   renderRecommendedWorkoutsSection()
              // }
              contentContainerStyle={{
                marginTop: SIZES.VIEW.top,
                marginBottom: SIZES.VIEW.bottom,
              }}
              renderItem={({ item, index }) => {
                return (
                  <HorizontalWorkoutCategoryCard
                    containerStyle={{
                      height: SIZES.WORKOUT.card,
                      alignItems: "center",
                      marginHorizontal: SIZES.padding,
                      marginBottom: SIZES.padding,
                    }}
                    imageStyle={{
                      borderRadius: SIZES.radius,
                      height: SIZES.WORKOUT.cardInsideImage,
                      width: SIZES.WORKOUT.cardInsideImage,
                    }}
                    item={item.workout ?? item}
                    onPress={() =>
                      navigation.navigate("WorkoutDetail", { workout: item })
                    }

                  />
                );
              }}
            />
          )}

        </Section>


      </>

    )
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Search */}
      {/* {renderSearch()} */}
      {/* Filter */}

      {/* Trainers */}
      {/* {renderTrainerSection()} */}
      {/* Training Types */}
      {renderTrainingTypes()}
    </View>
  );
};

export default CoachGuidedWorkouts;


