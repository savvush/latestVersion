import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    FlatList,
    Modal
} from 'react-native';
 
import {
    LineDivider
} from "../components";
import { FONTS, SIZES, COLORS, icons } from "../constants"

const FormPicker = ({
    containerStyle,
    inputContainerStyle,
    label,
    measure = "",
    placeholder,
    value,
    setValue,
    modalTitle,
    modalStyle,
    options = [],
    errorMsg = "",
}) => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <View style={{ ...containerStyle }}>
            <View style={{

            }}>

                <View style={{ justifyContent: "space-between", alignItems: "stretch", flexDirection: 'row', flex: 1 }}>
                    <View style={{ alignItems: "flex-start" }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: COLORS.black, ...FONTS.body3 }}>{label}</Text>
                            <Text style={{ color: COLORS.red, ...FONTS.body3 }}>{errorMsg}</Text>
                        </View>

                    </View>
                    <View>
                        <TouchableOpacity
                            style={{
                                 

                                marginTop: SIZES.height > 800 ? SIZES.base : 0,
                                alignItems: 'center',
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.lightGray2,
                                ...inputContainerStyle
                            }}
                            onPress={() => setIsVisible(true)}
                        >
                            <Text
                                style={{
                                    flex: 1,
                                    color: value == "" ? COLORS.gray2 : COLORS.black,
                                    ...FONTS.body3
                                }}
                            >
                                {value == "" ? placeholder : value}
                            </Text>


                        </TouchableOpacity>
                    </View>
                </View>


            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
            >
                <View
                    style={{
                        flex: 1,
                       
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.transparentBlack7
                    }}
                >
                    {/* Transparent Background */}
                    <TouchableWithoutFeedback
                        onPress={() => setIsVisible(false)}
                    >
                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                            }}
                        />
                    </TouchableWithoutFeedback>

                    <View
                        style={{
                            width: SIZES.width * 0.8,
                            height:"50%",
                            padding: SIZES.radius,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.white,
                            ...modalStyle
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{modalTitle}</Text>

                        <FlatList
                            data={options}
                            keyExtractor={item => `${item.id}`}
                            contentContainerStyle={{
                                marginTop: SIZES.radius,
                            }}
                            renderItem={({ item, index }) => (
                                <>
                                    <TouchableOpacity
                                        style={{
                                            height: 50,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                        onPress={() => {
                                            setIsVisible(false)
                                            if(item.id === "Optional"){
                                                setValue("")
                                            }else{

                                                if (measure === "") {
                                                    setValue(item.id)
                                                } else {
                                                    setValue(item.id + " "+ measure)
                                                }
                                                
                                            }
                                           
                                        }}
                                    >
                                        <Text
                                            style={{
                                                ...FONTS.body3
                                            }}
                                        >
                                            {item.id + " " + (item.id === "Optional" ? "" : measure) }
                                        </Text>
                                    </TouchableOpacity>

                                    {index < options.length - 1 &&
                                        <LineDivider />
                                    }
                                </>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default FormPicker;