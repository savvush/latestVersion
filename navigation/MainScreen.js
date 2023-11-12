import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView
} from "@react-navigation/drawer";
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,

} from "../constants";
import { Auth } from 'aws-amplify';
import Tabs from './TabsScreen';

const Drawer = createDrawerNavigator()

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 40,
                marginBottom: SIZES.base,
                alignItems: 'center',
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: isFocused ? COLORS.transparentBlack1 : null
            }}
            onPress={onPress}
        >
            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.drawerPrimary
                }}
            />

            <Text
                style={{
                    marginLeft: 15,
                    color: COLORS.drawerPrimary,
                    ...FONTS.h3
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({ navigation }) => {
    const [user, setUser] = React.useState({});
    const signOut = async () => {
        try {
            await Auth.signOut();
            navigation.replace('OnBoarding');
        } catch (error) {
            console.log(error);
        }
    }



    React.useEffect(() => {

        const getCurrentUser = async () => {
            let user = await Auth.currentAuthenticatedUser();

            if (isMounted) {
                const { attributes } = user;
                setUser(attributes);
                console.log("Custom Drawer : " + JSON.stringify(attributes));
            }

        }

        let isMounted = true;               // note mutable flag

        getCurrentUser();

        return () => { isMounted = false }; // cleanup toggles value, if unmounted

    }, []);





    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
            style={{
 
                backgroundColor:COLORS.VIEW.primary
            }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.radius, 
                }}
            >
                {/* Close */}
                <View
                    style={{ 
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center' 
                        }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image
                            source={icons.cross}
                            style={{
                                height: 35,
                                width: 35,
                                tintColor: COLORS.fontPrimary
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/* Profile */}
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        navigation.closeDrawer()
                        navigation.navigate("MyAccount")
                    }}
                >
                    {/* <Image
                        source={dummyData.myProfile?.profile_image}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: SIZES.radius
                        }}
                    /> */}

                    <View
                        style={{
                            marginLeft: SIZES.radius
                        }}
                    >
                        <Text style={{ color: COLORS.fontPrimary, ...FONTS.h3 }}>{user?.email}</Text>
                        <Text style={{ color: COLORS.fontPrimary, ...FONTS.body4 }}>View your profile</Text>
                    </View>
                </TouchableOpacity>

                {/* Drawer Items */}
                <View
                    style={{
                        flex: 1,
                        marginTop: SIZES.height > 800 ? SIZES.padding : SIZES.radius
                    }}
                >
                    <CustomDrawerItem
                        label={constants.screens.home}
                        icon={icons.home}
                    
                        onPress={() => {
                           
                            navigation.navigate("MainLayout")
                        }}
                    />


                    <CustomDrawerItem
                        label={constants.screens.workout}
                        icon={icons.focus}
                        
                        onPress={() => {
                             
                            navigation.navigate("MainLayout")
                        }}
                    />


                    <CustomDrawerItem
                        label={constants.screens.program}
                        icon={icons.bar}
                
                        onPress={() => {
                             
                            navigation.navigate("MainLayout")
                        }}
                    />


                    <CustomDrawerItem
                        label={constants.screens.posts}
                        icon={icons.notification}
       
                        onPress={() => {
                            
                            navigation.navigate("MainLayout")
                        }}
                    />

                    <CustomDrawerItem
                        label={constants.screens.subscription}
                        icon={icons.dollar}
                    
                        onPress={() => {
                            navigation.closeDrawer()
                            navigation.navigate("PaywallScreen")
                        }}
                    />


                    {/* Line Divider */}
                    <View
                        style={{
                            height: 1,
                            marginVertical: SIZES.height > 800 ? SIZES.radius : 0,
                            marginLeft: SIZES.radius,
                            backgroundColor: COLORS.lightGray1
                        }}
                    />

                    <CustomDrawerItem
                        label="Settings"
                        icon={icons.setting}
                        onPress={() => {
                            navigation.closeDrawer()
                            navigation.navigate("Settings")
                        }}
                    />

                    <CustomDrawerItem
                        label="Invite a Friend"
                        icon={icons.profile}
                    />

                    <CustomDrawerItem
                        label="Help Center"
                        icon={icons.help}
                    />
                </View>

                <View
                    style={{
                        marginBottom: SIZES.height > 800 ? SIZES.padding : 0
                    }}
                >
                    <CustomDrawerItem
                        label="Logout"
                        icon={icons.logout}
                        onPress={() => {
                            signOut();
                        }}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

export function MainScreen() {


  
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.VIEW.primary
            }}
        >
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{
                    flex: 1,
                    width: '65%',
                    paddingRight: 20,
                    backgroundColor: 'transparent'
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                initialRouteName="MainLayout"
                drawerContent={props => {
                    
                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
              
                        />
                    )
                }}
            >
                <Drawer.Screen name="Tabs" options={{headerShown:false}}>
                    {props => <Tabs {...props}/>}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

 

export default MainScreen;