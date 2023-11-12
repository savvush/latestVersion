import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const HorizontalExerciseCard = ({
  containerStyle,
  imageStyle,
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: SIZES.exerciseCardRadius,
        backgroundColor: COLORS.darkGray,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {item.s3Image && (
        <Image
          source={{ uri: item.s3Image }}
          style={{
            ...imageStyle,
            backgroundColor:COLORS.TEXT.black
          }}
        />
      )}
      {/* Info */}
      <View
        style={{
          flex: 1,
          marginLeft: 30,
          marginTop: SIZES.padding
        }}
      >
        {/* Name */}

        <Text style={{  textTransform: 'capitalize', paddingLeft:SIZES.padding, flex: 1, color: COLORS.white, ...FONTS.h1 }}>{item.title}</Text>
        {/* Description 
                {/*<Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>{item.description}</Text>*/}
        {/* Number of exercises */}
        {/* <Text style={{ marginTop: SIZES.base, ...FONTS.h2 }}>{item.numberOfExercises} Total Exercise</Text>*/}
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop:10,
            backgroundColor: "#FFFFFF",
            borderColor: "#FFFFFF",
            height: 40,
            width: 140,
            borderRadius: SIZES.workOutCardRadius,
          }}
        >
          <Text style={{ flex: 1, paddingLeft: 20 }}>{item.repetitions} minutes</Text>

          <Image
            source={icons.clock}
            style={{
              padding: 5,
              marginLeft: 20,
              marginRight:20,
              height: 15,
              width: 15,
              resizeMode: "stretch",
              alignItems: "center",
            }}
          />

        </View> */}
      </View>
      {/* Image */}

      {/* Calories */}
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 5,
          right: SIZES.radius,
        }}
      >

      </View>
    </TouchableOpacity>
  );
};

export default HorizontalExerciseCard;
