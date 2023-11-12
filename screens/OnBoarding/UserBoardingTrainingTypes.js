import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { SIZES, COLORS } from "../../constants";
import { TextButton, HeaderBar, HorizontalLoader, TrainingItem } from "../../components";
import { Storage, API } from "aws-amplify";
import { utils } from '../../utils';

import { listTrainingTypes } from "../../src/graphql/queries";

const UserBoardingTrainingTypes = ({ route, navigation }) => {
  const [trainingTypes, setTrainingTypes] = React.useState([])
  const [selectedGoal, setSelectedGoal] = React.useState(null)
  const [loading, setLoading] = React.useState(true);
  const { selectedAge, selectedFHeight, selectedFWeight, selectedGenre } = route.params;

  console.log("UserBoardingTrainingTypes: " + selectedAge + ", "  + selectedFHeight + ", " + selectedFWeight + ", " + selectedGenre);
  React.useEffect(() => {
    let isApiSubscribed = true;
    const fetchTrainingTypes = async () => {
      const gender = selectedGenre  ;
      let filter = {
        gender: {
          eq: gender,
        },
      };

      console.log(filter);

      const trainingTypesAll = await API.graphql({ query: listTrainingTypes, variables: { filter: filter } });
      const trainingTypes = await Promise.all(
        trainingTypesAll.data.listTrainingTypes.items.map(async (type) => {
          const image = await Storage.get(type.onboardingImageUrl);
          const selectedImage = await Storage.get(type.backgroundColor);
          // const headerImage = await Storage.get(categories.headerImageUrl);
          type.s3Image = image;
          type.s3ImageSelected = selectedImage;
          // categories.s3HeaderImage = headerImage;
          return type;
        })
      );
      if (isApiSubscribed) {
        setTrainingTypes(trainingTypes);
        setLoading(false);
      }
    };
    setLoading(true);
    fetchTrainingTypes();

    return () => {
      isApiSubscribed = false;
    };
  }, []);

  async function saveAndGo(skip) {
    try {
      if (!skip)
        await utils.saveUser({ selectedAge, selectedFHeight, selectedFWeight, selectedGenre, selectedGoal });
      else
        await utils.saveEmptyUser({ selectedAge, selectedFHeight, selectedFWeight, selectedGenre, selectedGoal });
        //navigation.replace('MainScreen');
    } catch (error) {
      console.log(error);
      //navigation.replace("Home");
    }
  }

  function renderFooter() {
    return (
      <View
        style={{
          height: 120
        }}
      >
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            marginVertical: SIZES.padding
          }}
        >
          <TextButton
            label="Let's Get Started"
            buttonContainerStyle={{
              height: 60,
              borderRadius: SIZES.radius
            }}
            onPress={
              () => {
                saveAndGo(false);
              }
            }
          />
        </View>
      </View>
    )
  }

  function renderTrainingTypes() {

    return (
      <View style={{
        flexDirection: "row", alignContent: "center", alignItems: "center", flexWrap: 'wrap',
        alignItems: 'flex-start'
      }}>
        {trainingTypes.map((item, index) => {
          return (
            <TrainingItem
              key={`Genre-${item.id}`}
              item={item}
              isSelected={`${selectedGoal?.key}-${selectedGoal?.id}` == `Genre-${item.id}`}
              onPress={() => {
                setSelectedGoal({ id: item.id, key: "Genre" })
                console.log(item.id);
              }}
            />
          )
        })}
      </View>
    )
  }


  return (
    <>

      <HeaderBar title={"Ready for a great start?"}
        description={"Please enter your prefer"}
        onPress={() => { saveAndGo(true); }}
        backEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={{ flex: 1, height: 40, backgroundColor: COLORS.lightGrayBackground }}>


        <View style={{
          height: 40,
          flex: 1,

        }}>
          <View style={{
            borderBottomColor: COLORS.lightGray2,
            borderBottomWidth: 1,
            marginBottom: SIZES.padding
          }}>
            <Text style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: "500",
              marginTop: SIZES.padding,
              marginBottom: SIZES.padding,
            }}>
              {"Training Types"}
            </Text>
          </View>

          <>{loading ? (
            <>
              <View style={
                {
                  flex: 1,
                  height: SIZES.loadingIndicatorHeight,
                  padding: 10,
                  alignSelf: 'center',

                  justifyContent: 'space-between',
                  borderRadius: SIZES.radius,
                  shadowColor: 'lightgrey',
                  shadowOffset: { width: -5, height: 5 },
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                  flexDirection: 'row',
                  flexWrap: 'wrap'
                }
              }>

                <HorizontalLoader />
              </View>

            </>
          ) : (

            renderTrainingTypes()
          )}
          </>
        </View>
        {renderFooter()}
      </View>
    </>
  )
}


export default UserBoardingTrainingTypes;