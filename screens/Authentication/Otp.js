import '@azure/core-asynciterator-polyfill';
import React from "react";
import {
    View,
    Text,
    Alert,
} from "react-native";
import OTPInputView from '@twotalltotems/react-native-otp-input'

import { FONTS, SIZES, COLORS, } from "../../constants"
import { TextButton } from "../../components"
import { AuthLayout } from "../";
import { Auth } from "aws-amplify";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { createUser } from '../../src/graphql/mutations';
import OTPTextView from 'react-native-otp-textinput';


const Otp = ({ route, navigation }) => {
    const { username, name, email, phone_number, sub } = route.params;
    const [timer, setTimer] = React.useState(60)
    const [code, setCode] = React.useState()

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
            const response = await Auth.confirmSignUp(
                email,
                code
            );

            if (response === "SUCCESS") {

                navigation.navigate("SignIn");
                //save the user
                // const newUser = {
                //     mail: email,
                //     mobile: phone_number,
                //     username: username,
                //     givenName: name
                // }
                // console.log(JSON.stringify(newUser));
                // const createUsr = await API.graphql(graphqlOperation(createUser, {input: newUser}));
                // console.log("user saved : " + createUsr);


            }


            // console.log(JSON.stringify(newUser));

            // const createUsr = await API.graphql(graphqlOperation(createUser, {input: newUser}));

            // await DataStore.save(
            //     new User({
            //         username: username,
            //         givenName: name,
            //         main:email,
            //         mobile:phone_number
            //     })

            // );

            // const posts =  await DataStore.query(User)
            // console.log(posts);
        } catch (error) {
            Alert.alert(error.message);
            console.log(error);
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
            title="OTP Authentication"
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
                <View
                    style={{
                        flex: 1,
                    }}
                >


                    <OTPTextView
                        ref={(e) => (this.input1 = e)}
                        handleTextChange={(code) => setCode(code)}
                        inputCount={6}
                        textInputStyle={{
                            borderRadius: 10,
                            borderWidth: 4,
                        }}
                        containerStyle={{
                            marginBottom: 20,
                        }}
                        keyboardType="numeric"
                    />
                </View>
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
            </View>

            {/* Continue Button */}
            <View>
                <TextButton
                    label="Continue"
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

export default Otp