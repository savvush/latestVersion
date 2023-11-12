import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert,
} from "react-native";

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons, } from "../../constants"
import {
    FormInput,
    TextButton,
    TextIconButton
} from "../../components"
import { utils } from "../../utils";
import { Auth } from "aws-amplify";
import { UserAgent } from "amazon-cognito-identity-js";

const SignUp = ({ navigation }) => {
    const [email, setEmail] = React.useState("hdemirkale@gmail.com")
    const [username, setUsername] = React.useState("hdemirkale@gmail.com")
    const [name, setName] = React.useState("Huseyin Demirkale")
    const [age, setAge] = React.useState("")
    const [gender, setGender] = React.useState("")
    const [phone_number, setPhone_number] = React.useState("+905432626212")
    const [password, setPassword] = React.useState("AAaa1234")
    const [showPass, setShowPass] = React.useState(false)

    const [emailError, setEmailError] = React.useState("")
    const [nameError, setNameError] = React.useState("")
    const [usernameError, setUsernameError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")
    const [phone_numberError, setPhone_numberError] = React.useState("")

    function isEnableSignUp() {
        return email != "" && username != "" && password != "" && emailError == "" && passwordError == ""
    }

 
    const onSignUpPressed = async () => {

        try {
            console.log(email);
            const signUpResponse = await Auth.signUp({
                username,
                password,
                attributes:{
                    name,
                    email,
                    phone_number,
                    'custom:age' : age,
                    'custom:gender': gender
                }
            });

       
            navigation.navigate("Otp",{username,name,email,phone_number,sub:signUpResponse.userSub})
            console.log(signUpResponse);
        } catch (error) {
            Alert.alert('Heyy!', error.message);
        }

    }

    return (
        <AuthLayout
            title="Getting Started"
            subtitle="Create an account to continue!"
            titleContainerStyle={{
                marginTop: SIZES.height > 800 ? SIZES.radius : 0
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.height > 800 ? SIZES.padding : SIZES.radius
                }}
            >
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

                <FormInput
                    label="Username"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    value={username}
                    onChange={(value) => {
                        setUsername(value)
                    }}
                    errorMsg={usernameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={(username == "") || (username != "" && usernameError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: (username == "") ? COLORS.gray : (username != "" && usernameError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />
                <FormInput
                    label="Name"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    value={name}
                    onChange={(value) => {
                        setName(value)
                    }}
                    errorMsg={nameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={(name == "") || (name != "" && nameError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: (name == "") ? COLORS.gray : (name != "" && nameError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />
                <FormInput
                    label="Phone"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    value={phone_number}
                    onChange={(value) => {
                        setPhone_number(value)
                    }}
                    errorMsg={nameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={(phone_number == "") || (phone_number != "" && phone_numberError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: (phone_number == "") ? COLORS.gray : (phone_number != "" && phone_numberError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />
                <FormInput
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    value={password}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
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

                {/* Sign Up & Sign In */}
                <TextButton
                    label="Sign Up"
                    disabled={isEnableSignUp() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimary,
                    }}
                    onPress={
                      () => onSignUpPressed()
                    //    () => navigation.navigate("Otp")
                    
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
                    <TextButton
                        label="Sign In"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </View>

            {/* Footer */}
            <View>
                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.blue,
                    }}
                    icon={icons.fb}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: COLORS.white
                    }}
                    label="Continue With Facebook"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.white
                    }}
                    onPress={() => navigation.replace("Home")}
                />

                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                    }}
                    icon={icons.google}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: null
                    }}
                    label="Continue With Google"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                    }}
                    onPress={() => navigation.replace("Home")}
                />
            </View>
        </AuthLayout>
    )
}

export default SignUp