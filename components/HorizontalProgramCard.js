import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const HorizontalProgramCard = ({ containerStyle, imageStyle, item, onPress }) => {
    

    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                borderRadius: SIZES.workOutCardRadius,
                backgroundColor: COLORS.darkGray ,
                ...containerStyle
            }}
            onPress={onPress} 
        >
 
            {/* Info */} 
            <View
                style={{ 
                    flex: 1,
                    marginLeft:30  
                    //marginTop: SIZES.padding
                }}
            > 
                {/* Name */}
                <Text style={{ color: COLORS.white, ...FONTS.h2, fontSize: 22 }}>{item.name}</Text>
                {/* Description */}
                <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.description}</Text>
                {/* Number of exercises */}
                {/* <Text style={{ marginTop: SIZES.base, ...FONTS.h2 }}>{item.numberOfExercises} Total Exercise</Text>*/}
                <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#FFFFFF',
                            borderColor: '#FFFFFF',
                            marginTop:20,
                            height: 40,
                            width:180,
                            borderRadius: SIZES.workOutCardRadius
                        }}>
                <Image source={icons.play} style={{padding: 5,
                                                    marginLeft:20,
                                                    
                                                    height: 15,
                                                    width: 15,
                                                    resizeMode : 'stretch',
                                                    alignItems: 'center'}} />
 
                <Text style={{ flex:1, paddingLeft:10}}>{item.numberOfExercises} Go to Workouts</Text>
                </View>
                
                
            </View>

            <View
                style={{ 
                    flex: 1,
                    marginRight:0 ,
                    zIndex:999 
                    //marginTop: SIZES.padding
                }}
            > 

            {/* Image */}
            {item.s3Image && <Image
                source={{uri: item.s3Image}}
                style={{
                    ...imageStyle
                }}
            />
            }
   
            </View>
     
        </TouchableOpacity>
    )
}
export default HorizontalProgramCard 