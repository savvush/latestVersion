



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { Splash } from "../screens/OnBoarding/Splash";
import {
    OnBoarding,
    UserBoardingAgeSex,
    UserBoardingTrainingTypes,
    SignIn,
    SignUp,
    ForgotPassword,
    Otp,
    ResetPassword,
    // Map,
    MyAccount,
    MyAccountEdit,
    Settings,
    ChangePassword,
    NotificationSetting,
    Workout,
    WorkoutDetail,
    CoachGuided,
    CoachGuidedWorkouts,
    Player,
    Notification,
    ProgramDetail,
    PaywallScreen,
    PostDetail,
    News,
    Blog,
    Home,
    DietDetails
} from "../screens";

import { MainScreen } from './MainScreen';
import { TabNavigation } from './TabNavigation';
import Tabs from './TabsScreen'


 
export function AppNavigation() {
    //const Stack = createStackNavigator();
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{
                    headerShown: false
                }}
                >
                <Stack.Screen name="Splash" component={Splash} />
          
        
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="UserBoardingAgeSex" component={UserBoardingAgeSex} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />

               

                <Stack.Screen name="MyAccount" component={MyAccount} />
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="DietDetails" component={DietDetails} />


                {/* <Stack.Screen name="Map" component={Map} /> */}

                <Stack.Screen name="MyAccountEdit" component={MyAccountEdit} />

                <Stack.Screen name="ChangePassword" component={ChangePassword} />

                <Stack.Screen name="NotificationSetting" component={NotificationSetting} />
                <Stack.Screen name="CoachGuided" component={CoachGuided} />
                <Stack.Screen name="CoachGuidedWorkouts" component={CoachGuidedWorkouts} />
                <Stack.Screen name="Player" component={Player} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="ProgramDetail" component={ProgramDetail} />
                <Stack.Screen name="PaywallScreen" component={PaywallScreen} />
                <Stack.Screen name="PostDetail" component={PostDetail} />
                <Stack.Screen name="News" component={News} />
                <Stack.Screen name="Blog" component={Blog} />
                <Stack.Screen name="UserBoardingTrainingTypes" component={UserBoardingTrainingTypes} />
                <Stack.Screen name="Workout" component={Workout} />
                <Stack.Screen name="WorkoutDetail" component={WorkoutDetail} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

