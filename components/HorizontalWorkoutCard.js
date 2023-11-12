import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const HorizontalWorkoutCard = ({ containerStyle, imageStyle, item, onPress }) => {
    
    return (
        <View style={{ marginVertical: SIZES.base, ...containerStyle,height: SIZES.cardHeight, }}>
        <TouchableOpacity
            style={{ flex: 1, flexDirection: 'row', backgroundColor:COLORS.primary,borderRadius:10, }}
            onPress={ onPress }
        >
            {/* Workout Cover */}
            <Image
                source={{uri:item.image}}
                resizeMode="cover"
                style={{ width: 100, height: 150, borderRadius: 10 }}
            />

            <View style={{ flex: 1, height: 150,marginLeft: SIZES.radius, backgroundColor:COLORS.primary,borderRadius:10, paddingTop:15, paddingRight:10 }}>
                {/* Workout name and author */}
                <View>
                    <Text style={{ paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.white }}>{item.title}</Text>
                    <Text style={{ ...FONTS.h3, color: COLORS.white }}>{item.description}</Text>
                </View>

                {/* Workout Info */}
                <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                    <Image
                        source={icons.favourite}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.lightGray1
                        }}
                        
                    />
                    <Text style={{ ...FONTS.body4, color: COLORS.lightGray1, paddingHorizontal: SIZES.radius }}>{item?.duration} minutes </Text>
 
                </View>
            </View>
        </TouchableOpacity>
 
    </View>
    )
}

export default HorizontalWorkoutCard 