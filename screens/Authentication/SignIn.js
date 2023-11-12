import React, { useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert
} from "react-native";
import { FONTS, SIZES, COLORS, icons, } from "../../constants"
import { AuthLayout } from "../";
import {
    CustomSwitch,
    FormInput,
    TextButton,
    SocialButton
} from "../../components"
import { utils } from "../../utils";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { setName } from "./stores/user/userActions";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../src/graphql/mutations";
import { useGlobalDispatch, useGlobalState } from "../../globals/GlobalProvider";

const SignIn = ({ navigation }) => {

    const [email, setEmail] = React.useState("hdemirkale@gmail.com")
    const [password, setPassword] = React.useState("AAaa1234")
    const [emailError, setEmailError] = React.useState("")

    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)

    const globalState = useGlobalState();
    const globalDispatch = useGlobalDispatch();

    function onLoginWithGooglePressed() {
        console.log("Google Sigin is Clicked");
        Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
    }

    function onLoginWithApplePressed() {
        console.log("Apple Sigin is Clicked");
        Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Apple });
    }

    function isEnableSignIn() {
        return email != "" && password != "" && emailError == ""
    }

    function onSigninPressed() {
        console.log("Local Account SignIn is invoked");
        try {
            Auth.signIn(email, password);
        } catch (error) {
            console.log("Signin Error: " + error);
        }
    }

    return (
        <AuthLayout
            title="Let's Sign You In"
            subtitle="Welcome back, you've been missed!"
        >
            <View
                style={{
                    marginTop: SIZES.height > 800 ? SIZES.padding * 2 : SIZES.radius,

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

                {/* Save me & Forgot pass */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'space-between'
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CustomSwitch
                            label="Save Me"
                            value={saveMe}
                            onChange={(value) => setSaveMe(value)}
                        />
                    </View>
                    <TextButton
                        label="Forgot Password?"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                        onPress={() => navigation.navigate("ForgotPassword")}
                    />
                </View>

                {/* Sign In & Sign Up */}
                <TextButton
                    label="Sign In"
                    disabled={isEnableSignIn() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignIn() ? COLORS.VIEW.primary : COLORS.VIEW.primary,
                    }}
                    onPress={onSigninPressed}
                />

                {/* Sign Up */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>Don't have an account? </Text>
                    <TextButton
                        label="Sign Up"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.TEXT.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.navigate("SignUp")}
                    />
                </View>
            </View>

            {/* Footer */}
            <View style={{
                flexDirection: "row",
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: SIZES.padding,
            }}>
                <SocialButton
                    containerStyle={{
                        height: SIZES.icon,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.VIEW.secondary60,

                    }}
                    icon={icons.apple}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: COLORS.VIEW.secondary
                    }}

                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.black
                    }}
                    //onPress={() => navigation.replace("Home")}
                    onPress={onLoginWithApplePressed}
                />

                <SocialButton
                    containerStyle={{
                        height: SIZES.icon,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.VIEW.secondary60,
                        marginLeft: SIZES.radius

                    }}
                    icon={icons.google}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: COLORS.VIEW.secondary
                    }}
                    labelStyle={{
                        marginLeft: SIZES.radius,
                    }}
                    onPress={onLoginWithGooglePressed}
                />
            </View>
        </AuthLayout>
    )
}

export default SignIn;