import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const HorizontalWorkoutCategoryCard = ({ containerStyle, imageStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
             
                ...containerStyle
            }}
            onPress={onPress}
        >
            {item.s3Image && <Image
                source={{ uri: item.s3Image }}
                style={{
                    ...imageStyle,
                    backgroundColor:COLORS.TEXT.black
                }}
            /> 
            }

            {/* Info */}
            <View
                style={{
                    flex: 1,
                    marginLeft: 30
                    //marginTop: SIZES.padding
                }}
            >

                {/* Name */}
                <Text style={{ color: COLORS.VIEW.black, ...FONTS.body3Bold }}>{item.name}</Text>
                {/* Description */}
                {/* <Text style={{ color: COLORS.VIEW.secondary60, ...FONTS.body4 }}>{item.description}</Text> */}
                {/* Number of exercises */}
                {/* <Text style={{ marginTop: SIZES.base, ...FONTS.h2 }}>{item.numberOfExercises} Total Exercise</Text>*/}
                <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
                    <Icon name="reorder-four-outline" size={SIZES.WORKOUT.cardIcon} color={COLORS.VIEW.secondary60} />
                    <Text style={{ width:"80%", color: COLORS.VIEW.secondary60, ...FONTS.body4, marginLeft:10 }}>{item?.description}</Text>
                    <Icon name="chevron-forward-outline" size={SIZES.WORKOUT.cardIcon} color={COLORS.VIEW.secondary60} />
                </View>


            </View>
            {/* Image */}



        </TouchableOpacity>
    )
}

export default HorizontalWorkoutCategoryCard 