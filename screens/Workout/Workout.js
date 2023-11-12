import React from "react";
import { View, Text, FlatList } from "react-native";
import { Storage, DataStore } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import { HorizontalLoader, HorizontalWorkoutCategoryCard, HorizontalWorkoutLoader } from "../../components";
import { FONTS, SIZES, COLORS } from "../../constants";
import { Category } from "../../src/models";

 
const Workout = () => {
  const navigation = useNavigation();
  const [workoutCategory, setWorkoutCategory] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [workouts, setWorkouts] = React.useState([]);

  React.useEffect(() => {
  
 
    const fetchWorkOutCategories = async () => {
      setLoading(true);
      const categoriesAll = await DataStore.query(Category);
      const categories = await Promise.all(
        categoriesAll.map(async (ca) => {
          const imageFromS3Bucket  = await Storage.get(ca.imageUrl);
          ca.s3Image  = imageFromS3Bucket;

          var tempCategory = {
            ...ca,
            s3Image : imageFromS3Bucket //property you want to add in props object
          };
 
          return tempCategory;
        }) 
      );
      setWorkoutCategory(categories);
      setLoading(false);
    }; 
    fetchWorkOutCategories();
 
  }, []); 
   
 

  const Section = ({ title, onPress, children }) => {
    return (
      <View>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: SIZES.padding,
            marginTop: SIZES.padding,
            marginBottom: SIZES.padding
          }}
        >
          <Text style={{ flex: 1, ...FONTS.body3 }}>
            {title}
          </Text>

        </View>

        {/* Content */}
        {children}
      </View>
    )
  }

  function renderRecommendedWorkoutsSection() {
    return (
        <Section
            title="Recommended Workouts"
            onPress={() => { setSelectedTab(constants.screens.workout) }}
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

                    <HorizontalLoader/>
                </View>

            ) : (
                <>
                    <FlatList
                        data={workouts}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <ProgramCard
                                containerStyle={{
                                    marginLeft: SIZES.padding,
                                }}
                                data={item}
                                onPress={() => navigation.navigate("ProgramDetail", { program: item })}
                            />
                        )}
                    />
                </>
            )}
        </Section>
    )
}

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
          data={workoutCategory}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            renderRecommendedWorkoutsSection()
          }
          contentContainerStyle={{
            marginTop: 20,
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
                  if (item.name == "Your Workouts")
                    navigation.navigate("MyWorkouts", { workoutItem: item });
                  else if (item.name == "Coach Guided")
                    navigation.navigate("CoachGuided", { workoutItem: item });
                  else
                    navigation.navigate("CreateWorkout", { workoutItem: item });
                }}
              />
            );
          }}
        />
      )}

    </Section>
    </>    
  );
};

export default Workout;