import React from 'react';
import {
    View,
    Text
} from 'react-native';

import {
    LineDivider
} from "../components";
import { COLORS, FONTS } from '../constants';

const InfoItem = ({ label, value, withDivider = true }) => {
    return (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    height: 60,
                    alignItems: 'center',
                }}
            >
                <Text style={{ ...FONTS.body3 }}>{label}</Text>
                <Text style={{ flex: 1, color:COLORS.gray, textAlign: 'right', ...FONTS.body3 }}>{value}</Text>
            </View>

            {withDivider &&
                <LineDivider
                    lineStyle={{

                    }}
                />
            }
        </>
    )
}

export default InfoItem;