import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

import { FONTS, COLORS, SIZES } from '../constants';

const SocialButton = ({
    containerStyle,
    label,
    labelStyle,
    icon,
    iconPosition,
    iconStyle,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor:COLORS.gray2,
               
                width:SIZES.icon,
                ...containerStyle

            }}
            onPress={onPress}
        >
            {iconPosition == "LEFT" &&
                <Image
                    source={icon}
                    style={{
                        ...styles.image,
                        ...iconStyle
                    }}
                />
            }
            {/* <Text
                style={{
                    ...FONTS.body3,
                    ...labelStyle
                }}
            >
                {label}
            </Text> */}
            {iconPosition == "RIGHT" &&
                <Image
                    source={icon}
                    style={{
                        ...styles.image,
                        ...iconStyle
                    }}
                />
            }
        </TouchableOpacity>
    )
}

SocialButton.propTypes = {
    iconPosition: PropTypes.oneOf(['LEFT', 'RIGHT']),
};

const styles = StyleSheet.create({
    image: {
   
        width: SIZES.icon / 2.5,
        height: SIZES.icon / 2.5,
        tintColor: COLORS.black,
    }
})

export default SocialButton;