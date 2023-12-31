import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert,
} from "react-native";

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants"
import { FormInput, TextButton } from "../../components"
import { utils } from "../../utils";
import { Auth } from 'aws-amplify';

const ForgotPassword = ({ navigation }) => {

    const [email, setEmail] = React.useState("hdemirkale@gmail.com")
    const [emailError, setEmailError] = React.useState("")

    function isEnableSendEmail() {
        return email != "" && emailError == ""
    }

    const sendForgotPassword = async () => {
        try {
             
            const response = await Auth.forgotPassword(email);
            //console.log(response);
            navigation.navigate("ResetPassword",{email});
            
        } catch (error) {
            Alert.alert('Heyy!', error.message);
        }
    }

    return (
        <AuthLayout
            title="Password Recovery"
            subtitle="Please enter your email address to recover your password"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                {/* Form Inputs */}
                <FormInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    value={email}
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={(email == "") || (email != "" && emailError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: (email == "") ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>Already have an account? </Text>
                    <TouchableOpacity
                        onPress={() => {
                            
                        }}
                    >
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Sign In & Sign Up */}
            <TextButton
                label="Send Email"
                disabled={isEnableSendEmail() ? false: true}
                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: isEnableSendEmail() ? COLORS.primary : COLORS.transparentPrimary,
                }}
                onPress={() => {sendForgotPassword();}}
            />
        </AuthLayout>
    )
}

export default ForgotPassword;