import Lottie from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from "../../constants";
import { StyleSheet } from "react-native";
import { Auth, Hub, API, graphqlOperation } from 'aws-amplify';
import { useEffect, useRef } from 'react';
import { getUser } from '../../src/graphql/queries';

import { useGlobalState, useGlobalDispatch } from '../../globals/GlobalProvider';


export function Splash({ route, navigation }) {
    const user = useRef(null);

    const internalState = useRef(true);

    const globalState = useGlobalState();
    const globalDispatch = useGlobalDispatch();
   
   
    const checkAuthStatus = async () => {
        console.log("checkAuthStatus...");
        try {
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            user.current = authUser;

            var dispatchObject = null;
            
            try {

                console.log("UserID: " + authUser.attributes.sub);
                const authenticatedUserData = await API.graphql(graphqlOperation(getUser, { id: authUser.attributes.sub }));
                const userData = authenticatedUserData.data.getUser;
            

                console.log('userData: ' + userData);

                if (!(userData == null || userData == 'undefined')) {
                    dispatchObject = {
                        type: 'onboarded',
                        user: JSON.stringify(userData),
                        screenName: 'MainScreen'
                    }
                } else {
                    console.log("userData seems to be null -> onboard him/her");
                    dispatchObject = {
                        type: 'signedIn',
                        user: user.current,
                        screenName: 'UserBoardingAgeSex'
                    };
                }
        
            } catch (e) {
                console.log('Error retrieving the Authenticated User: ' + e)
                dispatchObject = {
                    type: 'signedIn',
                    user: user.current,
                    screenName: 'UserBoardingAgeSex'
                };
            }

        } catch (e) {
            console.log("noone is authenticated: " + e);
            dispatchObject = {
                type: 'splash'
            };
        }

        ////////////  go baby  //////////
        globalDispatch(dispatchObject);

        if (dispatchObject.type != 'splash') {
            console.log("Manual override of the navigation from Splash to: " + dispatchObject.screenName);
            navigation.replace(dispatchObject.screenName);
        }
        /////////////////////////////////
    };


    function authListener(data) {
         const eventType = data.payload.event;
         console.log("AuthEventType: " + eventType);
         if (eventType == 'signOut') {
            user.current == null;
            globalDispatch({type: 'splash'});
         } else if ((eventType == 'signIn' || eventType == 'cognitoHostedUI') &&  internalState.current){ 
            checkAuthStatus();
            internalState.current = false;
         }
    }

    /// the following will be executed only ONCE, otherwise we have DESIGN ERROR
    useEffect(() => {
        console.log("Registering Auth Listener")
        Hub.listen('auth', authListener);
        checkAuthStatus();
    }, []);


    return (
        <LinearGradient colors={[COLORS.VIEW.primary, COLORS.VIEW.secondary]} style={styles.linearGradient}>
            <Lottie style={{ width: 200, height: 200, marginTop: "40%" }} source={require('./../../assets/splash/Splash_Lottie.json')}
                autoPlay
                loop={false}

                onAnimationFinish={() => {
                    console.log('Animation Finished, navigating to: ' + globalState.screenName);
                    navigation.replace(globalState.screenName);
                }}
            />
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    splash: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.mindfullyOrange,

    },
    text: {
        marginTop: 100,
        fontWeight: 'bold'
    },
    linearGradient: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",

    }
});
