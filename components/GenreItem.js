import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import { FONTS, SIZES, COLORS, icons } from "../constants"

const GenreItem = ({ item, isSelected, onPress }) => {
    return (
        <TouchableOpacity
            delayPressIn={0}
            style={{
                flexDirection: 'column',
                height: SIZES.userboardingbuttonheight,
                width: '30%',
                alignItems: 'center',

                marginTop: SIZES.padding,
                alignContent: "center",
                borderWidth: isSelected ? SIZES.userboardingbuttonborder : 0,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius,
                borderColor: isSelected ? COLORS.allstarsyellow : COLORS.lightGray2,
                //Its for IOS
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.08,

                // its for android 
                elevation: 5,
                position: 'relative',
            }}
            onPress={() => onPress(item)}
        >
            {/* Icon */}
            <View
                style={{
                    width: 64,
                    height: 64 ,
                    alignItems: 'center',
                    justifyContent: 'center', 

                }}
            >
                <Image

                    style={{

                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 64,
                        height: 64

                    }}
                    source={item.icon}
                    resizeMode="center"

                />
            </View>

            {/* Name */}
            <Text
                style={{

                    alignItems: "center",
                    alignContent: "center",
                    textAlign: "center",
                    marginTop:0,
                    ...FONTS.body6
                }}
            >
                {item.name}
            </Text>


        </TouchableOpacity>
    )
}

export default GenreItem;