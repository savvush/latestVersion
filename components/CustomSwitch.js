import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const CustomSwitch = ({ label = "", onChange, value }) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => onChange(!value)}
        >
            <View
                style={{ flexDirection: "row" }}
            >
                <View
                    style={value ? styles.switchOnContainer : styles.switchOffContainer}
                >
                    <View
                        style={{
                            ...styles.dot,
                            backgroundColor: value ? COLORS.white : COLORS.darkGray,
                        }}
                    />
                </View>

                {label !== "" &&
                    <Text
                        style={{
                            color: value ? COLORS.primary : COLORS.darkGray,
                            marginLeft: SIZES.base,
                            ...FONTS.body4
                        }}
                    >
                        {label}
                    </Text>
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    switchOnContainer: {
        width: 40,
        height: 20,
        paddingRight: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: 10,
        backgroundColor: COLORS.darkGray,
    },
    switchOffContainer: {
        width: 40,
        height: 20,
        paddingLeft: 2,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 10
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6
    }
})

export default CustomSwitch