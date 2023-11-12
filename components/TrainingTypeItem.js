import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import { FONTS, SIZES, COLORS, icons } from "../constants"

const TrainingTypeItem = ({ item, isSelected, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: SIZES.userboardingbuttonheight,
                alignItems: 'center',
                marginTop: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                borderWidth: SIZES.userboardingbuttonborder,
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
                    borderWidth: 2,
                    borderRadius: SIZES.radius,
                    borderColor: COLORS.lightGray2
                }}
            >
                <Image
                    source={{uri:item.imageUrl}}
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

export default TrainingTypeItem;