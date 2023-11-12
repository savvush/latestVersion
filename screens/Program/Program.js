import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from "react-native";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import { FilterModal } from "..";
import { HorizontalProgramCard, HorizontalWorkoutCategoryCard } from "../../components";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";
import { listPrograms } from "../../src/graphql/queries";
import LinearGradient from "react-native-linear-gradient";
import { listCustomPrograms } from "../../src/graphql/custom-queries"

const initialStateCategories = { title: "", image: "" };

const Program = () => {
  const navigation = useNavigation();
  const [showFilterModal, setShowFilterModal] = React.useState(false);
  const [programs, setPrograms] = React.useState([]);

  React.useEffect(() => {
    let isApiSubscribed = true;
    const fetchPrograms = async () => {
      const allPrograms = await API.graphql({ query: listCustomPrograms });
      const programs = await Promise.all(
        allPrograms.data.listPrograms.items.map(async (program) => {
          const image = await Storage.get(program.imageUrl);
          program.s3Image = image;
          return program;
        })
      );
      if (isApiSubscribed) {
        setPrograms(programs);
      }
    };

    fetchPrograms();

    return () => {
      isApiSubscribed = false;
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        marginTop:70
      }}
    >
      <FlatList
        vertical
        data={programs}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginBottom: 200,
        }}
        renderItem={({ item, index }) => {
          return (
            <HorizontalProgramCard
              containerStyle={{
                height: SIZES.cardHeight + 10,
                alignItems: "center",
                marginHorizontal: SIZES.padding,
                marginTop:SIZES.padding + 10
              }}
              imageStyle={{
                marginBottom: 20,
                marginRight:10,
                height: SIZES.cardHeight + 30 ,
              
              }}
              item={item}
              onPress={() => {
                
                  navigation.navigate("ProgramDetail", { program: item });
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Program;
