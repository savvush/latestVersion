import React from 'react';
import {
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';

import { COLORS, FONTS, SIZES } from '../constants';

const DietStat = ({ status, containerStyle, labelStyle }) => {

    function getColor() {
        if (status == "NOTSTARTED") {
            return COLORS.red
        } else if (status == "STARTED") {
            return COLORS.green
        } else {
            return COLORS.orange
        }
    }

    function getLabel() {
        if (status == "NOTSTARTED") {
            return "Diet not started"
        } else if (status == "STARTED") {
            return "Diet started"
        } else {
            return "Diet in Progress"
        }
    }

    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                alignItems: 'center',
                ...containerStyle
            }}
        >
            <View
                style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: getColor(),
                }}
            />
            <Text
                style={{
                    color: getColor(),
                    marginLeft: SIZES.base,
                    ...FONTS.body3,
                    ...labelStyle
                }}
            >
                {getLabel()}
            </Text>
        </View>
    )
}

DietStat.propTypes = {
    status: PropTypes.oneOf(['NOTSTARTED', 'STARTED', 'PENDING']),
}

export default DietStat;