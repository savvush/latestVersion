import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
 
import { FONTS, SIZES, COLORS } from "../constants"

const TrainingItem = ({ item, isSelected, onPress }) => {
    return (
        <>
            <TouchableOpacity
                delayPressIn={0}
                style={{
                    flexDirection: 'column',
                    height: SIZES.userboardingbuttonheight,
                    width: '40%',
                    alignItems: 'center',
                    marginLeft: SIZES.padding,
                    marginTop: SIZES.padding,
                    alignContent: "center",
                    borderWidth: isSelected ? SIZES.userboardingbuttonborder : 0,
                    backgroundColor: COLORS.white,
                    borderRadius: SIZES.radius,
                    borderColor: isSelected ? COLORS.allstarsyellow : COLORS.lightGray2,
                    alignItems: 'center',
                    justifyContent: 'center',
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
                        marginTop: 0,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 64,
                        height: 64

                    }}
                >
                    
                   
                   {isSelected ? (
                   <Image

                        style={{

                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 64,
                            height: 64,
                             
                        }}
                        source={{ uri: item.s3ImageSelected }}
                        resizeMode="center"

                    />
                   ) : (
                    <Image

                    style={{

                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 64,
                        height: 64,
                   

                    }}
                    source={{ uri: item.s3Image }}
                    resizeMode="center"

                />
                   )}


                </View>

                {/* Name */}
                <Text
                    style={{

                        alignItems: "center",
                        alignContent: "center",
                        textAlign: "center",
                        ...FONTS.body6
                    }}
                >
                    {item.name}
                </Text>


            </TouchableOpacity>
        </>
    )
}

export default TrainingItem;