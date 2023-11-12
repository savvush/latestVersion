import React from 'react';
import { Image, SafeAreaView, Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, icons, SIZES } from "../constants";


const HeaderBar = ({ title, description, onPress, backEnabled=false, onBackPress }) => {

    return (
        <SafeAreaView
            style={{
                height: 150,
                width: "100%",
                backgroundColor: COLORS.VIEW.primary,
                flexDirection: "row",

            }}>
            
            {(backEnabled === true) &&
                        <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 50,
                            width: 50,
                        }}
                        onPress={onBackPress}
                    >
                        <Image
                            source={icons.back}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.VIEW.white
                            }}
                        />
                    </TouchableOpacity>
                
            }


            <View
                style={{
                    flex: 1,
                    paddingLeft: SIZES.padding,
                    marginTop:SIZES.padding
                }}
            >
                <Text style={{ ...FONTS.body2, color: COLORS.white }}>{title}</Text>
                {/* <Text style={{ fontSize: 22, fontFamily: 'Lato-Regular', color: COLORS.white }}>{description}</Text> */}

            </View>
            <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 50,
                        width: 50,
                    }}
                    onPress={onPress}
                >
                    <Image
                        source={icons.cross}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.VIEW.white
                        }}
                    />
                </TouchableOpacity>
        </SafeAreaView>
    )

}

export default HeaderBar;