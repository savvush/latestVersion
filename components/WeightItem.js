import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import { FONTS, SIZES, COLORS, icons } from "../constants"

const WeightItem = ({ item, isSelected, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: SIZES.userboardingbuttonheight,
                alignItems: 'center',
                marginTop: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                borderWidth: 1,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius,
                borderColor: isSelected ? COLORS.allstarsyellow : COLORS.lightGray2
            }}
            onPress={() => onPress(item)}
        >
            {/* Icon */}
            <View
                style={{
                    width: 60,
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: SIZES.userboardingbuttonborder,
                    borderRadius: SIZES.radius,
                    borderColor: COLORS.lightGray2
                }}
            >
                <Image
                    source={item.icon}
                    resizeMode="center"
                    style={{
                        width: 35,
                        height: 35
                    }}
                />
            </View>

            {/* Name */}
            <Text
                style={{
                   
                    marginLeft: SIZES.radius,
                    ...FONTS.h3
                }}
            >
                {item.name}
            </Text>

         
        </TouchableOpacity>
    )
}

export default WeightItem;