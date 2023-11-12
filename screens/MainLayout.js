import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList,
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming
} from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";
import { setSelectedUserData } from "../stores/user/userActions";
import { useSelector, useDispatch } from "react-redux";

import {
    Home,
    Search,
    Diet,
    Workout,
    Program,
    Posts
} from "../screens";
import { Header } from "../components";
import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    constants,
} from "../constants";
import { Auth } from 'aws-amplify';

const TabButton = ({ label, icon, isFocused, outerContainerStyle, innerContainerStyle, onPress }) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <Animated.View
                style={[
                    {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    outerContainerStyle
                ]}
            >
                <Animated.View
                    style={[
                        {
                            flexDirection: 'column',
                            width: "80%",
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25
                        },
                        innerContainerStyle
                    ]}
                >
                    <Image
                        source={icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: isFocused ? COLORS.tabprimary : COLORS.tabsecondprimary
                        }}
                    />

                     
                        <Text
                            numberOfLines={1}
                            style={{
                                
                                color: isFocused ? COLORS.tabprimary : COLORS.tabsecondprimary,
                                ...FONTS.body5
                            }}
                        >
                            {label}
                        </Text>
                    
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}



const MainLayout = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {
    const [user, setUser] = React.useState({});
    const [date, setDate] = React.useState(null);
 
    const flatListRef = React.useRef()
    const dispatch = useDispatch();

    // Reanimated Shared Value

    const homeTabFlex = useSharedValue(1)
    const homeTabColor = useSharedValue(COLORS.white)
    const searchTabFlex = useSharedValue(1)
    const searchTabColor = useSharedValue(COLORS.white)

    const dietTabFlex = useSharedValue(1)
    const dietTabColor = useSharedValue(COLORS.white)

    const workoutTabFlex = useSharedValue(1)
    const workoutTabColor = useSharedValue(COLORS.white)
    const programTabFlex = useSharedValue(1)
    const programTabColor = useSharedValue(COLORS.white)
    const postTabFlex = useSharedValue(1)
    const postTabColor = useSharedValue(COLORS.white)
   
    const ss = useSelector(state => state.userReducer);
    console.log("user " + JSON.stringify(ss));
    
  
   

    React.useEffect(() => {
        let isMounted = true;               // note mutable flag
        const getCurrentUser = async () => {
            let user = await Auth.currentAuthenticatedUser();
            if (isMounted) {
                try {
                    const { attributes } = user;
                    console.log("user :" + JSON.stringify(attributes)); 
                     dispatch(setSelectedUserData(
                        {loggedInUserData: {
                            name: attributes.name,
                            gender: "ssss"
                        }}
    
                    ));
    
        
                    setUser(attributes);
                } catch (error) {
                console.log(error);   
                }
           
            }

        }

        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        setDate(date);

  

        getCurrentUser();

        return () => { isMounted = false }; // cleanup toggles value, if unmounted

    }, []);


    // Reanimated Animated Style

    const homeFlexStyle = useAnimatedStyle(() => {
        
        return {
            flex: homeTabFlex.value
        }
    })

    const homeColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: homeTabColor.value
        }
    })

    const searchFlexStyle = useAnimatedStyle(() => {
        return {
            flex: searchTabFlex.value
        }
    })
    


    const dietFlexStyle = useAnimatedStyle(() => {
        return {
            flex: dietTabFlex.value
        }
    })


    const searchColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: searchTabColor.value
        }
    })

    const dietColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: dietTabColor.value
        }
    })

    const workoutFlexStyle = useAnimatedStyle(() => {
        return {
            flex: workoutTabFlex.value
        }
    })

    const workoutColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: workoutTabColor.value
        }
    })

    const programFlexStyle = useAnimatedStyle(() => {
        return {
            flex: programTabFlex.value
        }
    })

    const programColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: programTabColor.value
        }
    })

    const postFlexStyle = useAnimatedStyle(() => {
        return {
            flex: postTabFlex.value
        }
    })

    const postColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: postTabColor.value
        }
    })

    React.useEffect(() => {
        setSelectedTab(constants.screens.home)
    }, [])

    React.useEffect(() => {
        if (selectedTab == constants.screens.home) {
            flatListRef?.current?.scrollToIndex({
                index: 0,
                animated: true
            })

            homeTabFlex.value = withTiming(1, { duration: 500 })
            homeTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        } else {
            homeTabFlex.value = withTiming(1, { duration: 500 })
            homeTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        if (selectedTab == constants.screens.search) {
            flatListRef?.current?.scrollToIndex({
                index: 1,
                animated: true
            })

            searchTabFlex.value = withTiming(1, { duration: 500 })
            searchTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        } else {
            searchTabFlex.value = withTiming(1, { duration: 500 })
            searchTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        if (selectedTab == constants.screens.diet) {
            flatListRef?.current?.scrollToIndex({
                index: 1,
                animated: true
            })

            dietTabFlex.value = withTiming(1, { duration: 500 })
            dietTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        } else {
            dietTabFlex.value = withTiming(1, { duration: 500 })
            dietTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }



        if (selectedTab == constants.screens.workout) {
            flatListRef?.current?.scrollToIndex({
                index: 2,
                animated: true
            })

            workoutTabFlex.value = withTiming(1, { duration: 500 })
            workoutTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        } else {
            workoutTabFlex.value = withTiming(1, { duration: 500 })
            workoutTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        if (selectedTab == constants.screens.program) {
            flatListRef?.current?.scrollToIndex({
                index: 3,
                animated: true
            })

            programTabFlex.value = withTiming(1, { duration: 500 })
            programTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        } else {
            programTabFlex.value = withTiming(1, { duration: 500 })
            programTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        if (selectedTab == constants.screens.posts) {
            flatListRef?.current?.scrollToIndex({
                index: 4,
                animated: true
            })

            postTabFlex.value = withTiming(1, { duration: 500 })
            postTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        } else {
            postTabFlex.value = withTiming(1, { duration: 500 })
            postTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }
    }, [selectedTab])

    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                overflow: 'hidden',
                ...drawerAnimationStyle
            }}
        >
            {/* Header */}
            <Header
                containerStyle={{
                    height: SIZES.header,
                    paddingHorizontal: SIZES.padding,
                    backgroundColor:COLORS.primary,
                    marginTop: 0,
                    alignItems: 'center',
                }}
                title={selectedTab?.toUpperCase()}
                name={user?.name}
                date={date}
                leftComponent={

                    <View style={{
                        marginTop:SIZES.padding,
                        paddingHorizontal: 5,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <View style={{
                                height: 50,
                                width: 50,
                                borderRadius: 25,
                                overflow: 'hidden',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image source={icons.profile} style={{ height: '100%', width: '100%', tintColor:COLORS.fontPrimary }} />

                            </View>
                        </TouchableOpacity>
                    </View>
                }
                rightComponent={
                    <TouchableOpacity
                        style={{
                            marginTop:SIZES.padding,
                            borderRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => setSelectedTab(constants.screens.posts)}
                    >
                        <Image
                            source={icons.notification}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: COLORS.TEXT.primary,
                                borderRadius: SIZES.radius
                            }}
                        />
                    </TouchableOpacity>
                }
            />

            {/* Content */}
            <View
                style={{
                    flex: 1
                }}
            >
                <FlatList
                    ref={flatListRef}
                    keyExtractor={(item) => `${item.id}`}
                    horizontal
                    scrollEnabled={false}
                    pagingEnabled
                    snapToAlignment="center"
                    snapToInterval={SIZES.width}
                    showsHorizontalScrollIndicator={false}
                    data={constants.bottom_tabs}
                    onScrollToIndexFailed={info => {
                        const wait = new Promise(resolve => setTimeout(resolve, 100));
                        wait.then(() => {
                            fListRef.current?.scrollToIndex({ index: info.index, animated: true / false });
                        });
                    }}
                    renderItem={({ item, index }) => {
                  
                        return (
                            <View
                                style={{
                                    height: SIZES.height,
                                    width: SIZES.width
                                }}
                            >
                                {selectedTab == item.label && item.label == constants.screens.home && <Home />}
                                {selectedTab == item.label && item.label == constants.screens.diet && <Diet />}
                                {selectedTab == item.label && item.label == constants.screens.workout && <Workout />}
                                {selectedTab == item.label && item.label == constants.screens.program && <Program />}
                                {selectedTab == item.label && item.label == constants.screens.posts && <Posts />}
                            </View>
                        )
                    }}
                />
            </View>

            {/* Footer */}
            <View
                style={{
                    height: SIZES.VIEW.tabbar,
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,

                }}
            >
                {/* Shadow */}
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={[COLORS.transparent, COLORS.lightYellow, COLORS.transparent]}
                    style={{
                        position: 'absolute',
                       
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,

                    }}
                />

                {/* Tabs */}
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.radius,

                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        backgroundColor: COLORS.white
                    }}
                >
                    <TabButton
                        label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab == constants.screens.home}
                        outerContainerStyle={homeFlexStyle}
                        //innerContainerStyle={homeColorStyle}
                        onPress={() => setSelectedTab(constants.screens.home)}
                    />

                    <TabButton
                        label={constants.screens.diet}
                        icon={icons.diet}
                        isFocused={selectedTab == constants.screens.diet}
                        outerContainerStyle={dietFlexStyle}
                        //innerContainerStyle={searchColorStyle}
                        onPress={() => setSelectedTab(constants.screens.diet)}
                    />

                    <TabButton
                        label={constants.screens.workout}
                        icon={icons.cart}
                        isFocused={selectedTab == constants.screens.workout}
                        outerContainerStyle={workoutFlexStyle}
                        //innerContainerStyle={workoutColorStyle}
                        onPress={() => setSelectedTab(constants.screens.workout)}
                    />

                    <TabButton
                        label={constants.screens.program}
                        icon={icons.bar}
                        isFocused={selectedTab == constants.screens.program}
                        outerContainerStyle={programFlexStyle}
                        //innerContainerStyle={programColorStyle}
                        onPress={() => setSelectedTab(constants.screens.program)}
                    />

                    <TabButton
                        label={constants.screens.posts}
                        icon={icons.notification}
                        isFocused={selectedTab == constants.screens.posts}
                        outerContainerStyle={postFlexStyle}
                        //innerContainerStyle={postColorStyle}
                        onPress={() => setSelectedTab(constants.screens.posts)}
                    />
                </View>
            </View>
        </Animated.View>
    )
}

function mapStateToProps(state) {
    return {
        loggedInUserData: state.userReducer.loggedInUserData,
        selectedTab: state.tabReducer.selectedTab,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedUserData: (userProperties) => { return dispatch(setSelectedUserData(userProperties)) },
        setSelectedTab: (selectedTab) => { return dispatch(setSelectedTab(selectedTab)) },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
