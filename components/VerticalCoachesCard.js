import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const VerticalCoachesCard = ({ containerStyle, item, onPress }) => {
   return (

    <TouchableOpacity
      style={{
        
        paddingVertical: SIZES.marginStory,
        paddingHorizontal: SIZES.marginStory,
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGreen,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Image */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection:"row"
        }}
      >
        <View  style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection:"row"
        }}
        >
          <Image style={{ width: 50, height: 50 , borderRadius: SIZES.circle, }} source={{ uri: item.photo }} />
          <Text style={{ textTransform: 'capitalize', paddingLeft: SIZES.padding, paddingRight: SIZES.padding,  color: COLORS.black, ...FONTS.body3 }}>{item?.displayName}</Text>
        </View>
      </View>
      <View>

      </View>
    </TouchableOpacity>
  );
};

export default VerticalCoachesCard;
