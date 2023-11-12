import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import { constants, FONTS, SIZES, COLORS } from "../../constants";
import { TextButton, HeaderBar, FormPicker } from "../../components";



import { utils } from '../../utils';


const UserBoardingAgeSex = ({ navigation }) => {

  const [selectedGenre, setSelectedGenre] = React.useState("")
  const [selectedAge, setSelectedAge] = React.useState("")
  const [selectedWeight, setSelectedWeight] = React.useState("")
  const [selectedHeight, setSelectedHeight] = React.useState("");

  async function saveEmptyAndGo() {
    try {
      console.log("saveEmptyAndGo is invoked")
      await utils.saveEmptyUser();
      //navigation.replace("Home");
    } catch (error) {
      console.log(error);
      //navigation.replace("Home");
    }
  }

  function renderSectionOne() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.radius,
        }}
      >
        <FormPicker
          label="Age"
          placeholder="Optional"
          modalTitle="Select Age"
          value={selectedAge}
          setValue={setSelectedAge}
          options={constants.age}
          containerStyle={{
            marginTop: SIZES.padding
          }}
          inputContainerStyle={{
            backgroundColor: COLORS.white
          }}
        />

        <FormPicker
          label="Sex"
          placeholder="Optional"
          modalTitle="Select Gender"
          value={selectedGenre}
          setValue={setSelectedGenre}
          options={constants.gender}
          containerStyle={{
            marginTop: SIZES.padding
          }}
          inputContainerStyle={{
            backgroundColor: COLORS.white
          }}
        />




        <FormPicker
          label="Weight"
          placeholder="Optional"
          measure={"kg"}
          modalTitle="Select Weight"
          value={selectedWeight}
          setValue={setSelectedWeight}
          options={constants.weight}
          containerStyle={{
            marginTop: SIZES.padding
          }}
          inputContainerStyle={{
            backgroundColor: COLORS.white
          }}
        />



        <FormPicker
          label="Height"
          placeholder="Optional"
          measure={"cm"}
          modalTitle="Select Height"
          value={selectedHeight}
          setValue={setSelectedHeight}
          options={constants.height}
          containerStyle={{
            marginTop: SIZES.padding
          }}
          inputContainerStyle={{
            backgroundColor: COLORS.white
          }}
        />

      </View>
    )
  }

  function renderSectionDescription() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          paddingBottom: SIZES.padding,
          borderBottomColor: COLORS.lightGray2,

          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            paddingHorizontal: SIZES.radius,

          }}
        >

          <Text style={{ textAlign: "center", ...FONTS.body2 }}>
            {"Setup Personal Details"}
          </Text>

          <Text style={{ textAlign: "center", marginTop: SIZES.padding }}>
            {"Your personal details are the basic infotmation the app needs to provide you relevant information"}
          </Text>
        </View>
      </View>
    )
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
            label="Next"
            buttonContainerStyle={{
              height: 60,
              borderRadius: SIZES.radius
            }}
            onPress={() => {
              const  selectedFHeight = (selectedHeight.split(" ")[0]);
              const  selectedFWeight = (selectedWeight.split(" ")[0]);

              navigation.navigate("UserBoardingTrainingTypes", { selectedAge, selectedFHeight, selectedFWeight, selectedGenre })
            }}
          />
        </View>
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}
    >
      <HeaderBar title={"Ready for a great start?"} description={""}
        onPress={() => {
          saveEmptyAndGo();
        }}
      />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,

        }}
      >
        {renderSectionDescription()}
        {renderSectionOne()}


      </ScrollView>
      {renderFooter()}
    </View>
  )
}


export default UserBoardingAgeSex;