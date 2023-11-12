import React from "react";
import {
    View,
    Text,
    Alert,
    Image,
    TouchableOpacity
} from "react-native";
import OTPInputView from '@twotalltotems/react-native-otp-input'

import { FONTS, SIZES, COLORS, icons, } from "../../constants"
import { TextButton,FormInput } from "../../components"
import { AuthLayout } from "../";
import { Auth } from "aws-amplify";

const ResetPassword = ({ route,navigation }) => {
    const { email } = route.params;
    const [timer, setTimer] = React.useState(60)
    const [code, setCode] = React.useState()
    const [password, setPassword] = React.useState("AAaa1234")
    const [showPass, setShowPass] = React.useState(false)

    React.useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1
                } else {
                    return prevTimer
                }
            })
        }, 1000)

        // return a function for react to clean up
        //cleanup the interval
        return () => clearInterval(interval)
    }, [])

    const confirmAccount = async (code) => {
        
        try {
            const response = await Auth.forgotPasswordSubmit(
                email,
                code,
                password
            );
            navigation.navigate("SignIn");
        } catch (error) {
            Alert.alert(error.message);
        }

    }

    const resendCode = async () => {
        try {
            const response = await Auth.resendSignUp(
                email
            );
        } catch (error) {
            Alert.alert(error.message);
        }

    }

    return (
        <AuthLayout
            title="Reset Your Password"
            subtitle="An authentication code has been sent to your email"
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
                {/* OTP */}
                <OTPInputView
                    pinCount={6}
                    style={{
                        width: '100%',
                        height: 50,
                    }}
                    codeInputFieldStyle={{
                        width: 65,
                        height: 65,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                    onCodeFilled={(code) => {
                        console.log(code)
    
                    }}
                />

                {/* Countdown Timer */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: SIZES.padding
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>Didn't receive code.</Text>
                    <TextButton
                        label={`Resend (${timer}s)`}
                        disabled={timer == 0 ? false : true}
                        buttonContainerStyle={{
                            marginLeft: SIZES.base,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => {
                            resendCode(); 
                            setTimer(60);
                        }}
                    />
                </View>

                  <FormInput
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    value={password}
                    onChange={(value) => setPassword(value)}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image
                                source={showPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                />

            </View>
          
            {/* Continue Button */}
            <View>
                <TextButton
                    label="Submit"
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={() => {
                        setCode(code);
                        confirmAccount(code);
                    }}
                />
                <View style={{ marginTop: SIZES.padding, alignItems: 'center' }}>
                    <Text style={{ ...FONTS.body3, color: COLORS.darkGray }}>By Signing up, you agree to our.</Text>
                    <TextButton
                        label="Terms and Conditions"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.body3
                        }}
                        onPress={() => console.log("tnc")}
                    />
                </View>
            </View>
        </AuthLayout>
    )
}

export default ResetPassword