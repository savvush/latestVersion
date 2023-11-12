import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { COLORS, FONTS, SIZES } from "../constants"


const Header = ({ containerStyle, title, name, date, titleStyle, leftComponent, rightComponent }) => {
    return (
        <View
            style={{
                height: 50,
                flexDirection: 'row',
                ...containerStyle
            }}
        >
            {
                leftComponent
            }
            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>

                <View style={{ paddingHorizontal: 10, flex: 1, marginTop: SIZES.padding, justifyContent: 'center' }}>
                    <Text style={{ color:COLORS.TEXT.primary, ...FONTS.body3 }}>Hi, {name}</Text>
                    {/* <Text style={{...FONTS.body4}}>{date}</Text> */}
                </View>

            </View>
            {
                rightComponent
            }

        </View>
    )
}

export default Header