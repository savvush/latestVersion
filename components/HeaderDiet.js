import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { COLORS, FONTS, SIZES } from "../constants"


const HeaderDiet = ({ containerStyle, title, name, date, titleStyle, leftComponent, rightComponent }) => {
    return (
        <View
            style={{
               
                flexDirection: 'row',
                ...containerStyle
            }}
        >
            {
                leftComponent
            }
            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>

                <View style={{ paddingHorizontal: 10, flex: 1, marginTop: SIZES.padding, justifyContent: 'center' }}>
               
                    {<Text style={{...FONTS.body4}}>{date}</Text>}
                </View>

            </View>
            {
                rightComponent
            }

        </View>
    )
}

export default HeaderDiet