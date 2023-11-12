import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    IconButton
} from "../components";
import { FONTS, COLORS, SIZES, icons } from "../constants";

const TrainingTypesCard = ({ trainingTypeItem,onPress }) => {
    return (
        <TouchableOpacity
            style={{
                marginBottom: SIZES.radius,
                padding: SIZES.radius,
                height:SIZES.workOutCardHeight,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.darkGray
            }}
            onPress={onPress}
        >
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                {/* Logo */}
                <View
                    style={{
                        width: 70,
                        height: 70,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        backgroundColor: COLORS.white,
                    }}
                >
                    <Image
                        source={{uri:trainingTypeItem?.photo}}
                        style={{
                            width: 45,
                            height: 45,
                        }}
                    />
                </View>

                {/* Info */}
                <View
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.body1 }}>{trainingTypeItem?.name}</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.body2 }}>{trainingTypeItem?.menuName}</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{trainingTypeItem?.duration}</Text>
                </View>

            
            </View>
        </TouchableOpacity>
    )
}

export default TrainingTypesCard;