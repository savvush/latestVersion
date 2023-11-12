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
  SectionList,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Video from "react-native-video";
import { FilterModal } from "..";
import {
  Header,
  IconButton,
  VerticalCoachesCard,
  LineDivider,
  TrainingTypesCard,
  HorizontalWorkoutCard,
  HorizontalProgramCard,
  HorizontalWorkoutLoader,
  HorizontalWorkoutCategoryCard,
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
import { listTrainingTypes } from "../../src/graphql/queries";
import { listUsers } from "../../src/graphql/queries";
import { User } from "../../src/models";
const Section = ({ title, onPress, children }) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: COLORS.VIEW.black, flex: 1, ...FONTS.body3 }}>{title}</Text>

        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.VIEW.black, ...FONTS.body3 }}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {children}
    </View>
  );
};

const CoachGuided = ({ navigation, route }) => {
  const [trainers, setTrainers] = React.useState([]);
  const [trainingTypes, setTrainingTypes] = React.useState([]);
  const [showFilterModal, setShowFilterModal] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const fetchTrainingTypes = async () => {
    try {

      const types = await API.graphql({
        query: listTrainingTypes
      });
      const trainingTypes = await Promise.all(
        types.data.listTrainingTypes.items.filter(function (ttype) {
          return ttype.gender === "MALE";
        }).map(async (ttype) => {
          ttype.s3Image = await Storage.get(ttype.imageUrl);
          ttype.title = ttype.name;
          ttype.description = ttype.description;
          return ttype;
        })
      );
 
      setLoading(false);
      setTrainingTypes(trainingTypes);
    } catch (err) {
      console.log(err);
    }

  }


  const fetchTrainers = async () => {
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
    let { workoutItem } = route.params;

    fetchTrainers();
    fetchTrainingTypes();

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
      <View style={{marginTop:SIZES.padding}}>

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
          title="Workout Categories"
         
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
              data={trainingTypes}
              keyExtractor={(item) => `${item.id}`}
              showsVerticalScrollIndicator={false}
              // ListFooterComponent={
              //   renderRecommendedWorkoutsSection()
              // }
              contentContainerStyle={{
                
                marginBottom: 200,
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
                    item={item}
                    onPress={() => {
                    
                        navigation.navigate("CoachGuidedWorkouts", { trainingType: item });
    
                    }}
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
      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
      )}
      {/* Trainers */}
      {renderTrainerSection()}
      {/* Training Types */}
      {renderTrainingTypes()}
    </View>
  );
};

export default CoachGuided;

 