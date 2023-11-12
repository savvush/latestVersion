import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    ImageBackground,
} from 'react-native';
import { COLORS, constants, FONTS, icons, SIZES } from '../constants';
import Lottie from 'lottie-react-native';
const VerticalPlaylistCard = ({ containerStyle, item, onPress, isPlaying = false, isCompleted = false }) => {
    return (
        <TouchableOpacity
            style={
                {
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                }
            }
            onPress={onPress}
        >

            {/* Image */}
            <View
                style={{
                    height: SIZES.WORKOUT.cardPlaylistImage,
                    width: SIZES.WORKOUT.cardPlaylistImage,
                    marginLeft: SIZES.padding,
                    alignItems: 'center',

                }}
            >

                <ImageBackground
                    source={{ uri: item.s3Image }}
                    style={
                        isCompleted ? styles.styleWatchedBefore : styles.notWatched
                    }
                >

                    {isPlaying &&
                        <Lottie
                            style={{
                                position: 'absolute',
                                top: SIZES.PLAYER.playingIconTop,
                                left: SIZES.PLAYER.playingIconLeft,
                                height: "100%",
                                width: "100%",
                                tintColor: COLORS.VIEW.primary,
                                color: COLORS.white
                            }}
                            source={require('../assets/player/audio-playing-animation.json')}
                            autoPlay
                            loop={true}

                        />




                    }

                    {isCompleted &&
                        <Image
                            source={icons.yoga}
                            resizeMode="contain"
                            style={{
                                position: 'absolute',
                                top: SIZES.PLAYER.playingIconTop,
                                left: SIZES.PLAYER.playingIconLeft,
                                height: 12,
                                width: 12,
                                color: COLORS.white
                            }}


                        />}


                </ImageBackground>
                <Text style={{ ...FONTS.body5Bold, width: SIZES.WORKOUT.cardPlaylistImage }}>{item.name}</Text>
                <Text style={{ ...FONTS.body5, color: COLORS.darkGray2, textAlign: "left", width: SIZES.WORKOUT.cardPlaylistImage }}>{item.description}</Text>

            </View>
        </TouchableOpacity>
    )
}

export default VerticalPlaylistCard;


const styles = {
    styleWatchedBefore: {
        height: "100%", width: "100%",
        marginTop: SIZES.radius,
        borderRadius: SIZES.radius,
        overflow: "hidden",
        borderWidth: 4,
        borderColor: COLORS.green,
    },
    notWatched: {
        height: "100%", width: "100%",
        marginTop: SIZES.radius,
        borderRadius: SIZES.radius,
        overflow: "hidden"
    },

};
