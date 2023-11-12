import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TextInput,
    Alert,
} from 'react-native';
import { API, Auth } from 'aws-amplify';

import {
    DietStat,
    Header,
    HeaderDiet,
    HorizontalWorkoutLoader,
    LineDivider,
    TextButton,
    TextIconButton
} from "../../components"
import { FONTS, SIZES, COLORS, icons, constants, dummyData } from "../../constants"
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { DietRecipe, DietRecipeProgress } from '../../src/models';
import { listDietDays, listDietRecipeProgressUsers, listDietRecipeProgresses, listDietRecipes, listUserRecipes } from '../../src/graphql/queries';

import { log } from 'react-native-reanimated';
import { listCustomUserRecipes } from '../../src/graphql/custom-queries';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createDietRecipeProgress } from '../../src/graphql/mutations';

const DietStatus = () => {
    const [loading, setLoading] = React.useState(true);
    const [dietstatusLoading, setDietstatusLoading] = React.useState(true);
    const navigation = useNavigation();
    const [currentStep, setCurrentStep] = React.useState(0)
    const [diet, setDiet] = React.useState(false);
    const [dietDays, setDietDays] = React.useState([])
    const [commentText, setCommentText] = React.useState('');
    const [hasDiet, setHasDiet] = React.useState(false);

    const onStartDiet = async () => {



        try {
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            const dietStartDetails = {
                userID: authUser.attributes.sub,
                dietRecipeProgressDietRecipeId: diet.id,
                comment: commentText
            };

            const newDietProgress = await API.graphql({
                query: createDietRecipeProgress,
                variables: { input: dietStartDetails }
            });

            setHasDiet(true)

        } catch (err) {
            console.log('error creating  diet progress...', err)
        }


    }

    const fetchUserHasDiet
        = async () => {
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            let filter = {
                userID: { eq: authUser.attributes.sub },
                _deleted: { ne: true }
            };
            const progresses = await API.graphql({
                query: listDietRecipeProgresses, variables: { filter: filter }
            });

            const result = progresses.data.listDietRecipeProgresses?.items;
            if (result.length != 0) {
                console.log("User has diet");
                setDiet(result[0]);
                console.log("===" + JSON.stringify(result[0]));
                setDietstatusLoading(false);
                setHasDiet(true);
                fetchDietDays(result[0].DietRecipe.id);
                 
                return;
            } else {

                //Alert.alert('Heyy! You do not have any diet that is assigned to you. Please talk with Kenneth!');
                let filter = {
                    _deleted: { ne: true }
                };
                const progresses = await API.graphql({
                    query: listDietRecipes, variables: { filter: filter }
                });
                console.log("User has no diet");

                const result = progresses.data.listDietRecipes?.items;
                console.log(JSON.stringify(result[0]));
                setDiet(result[0]);
            }
            setLoading(false);
            setHasDiet(false);
            setDietstatusLoading(false);
        }

    const fetchDietRecipes = async () => {
        const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
        let filter = {
            userID: { eq: authUser.attributes.sub },
            _deleted: { ne: true }
        };

        const progresses = await API.graphql({
            query: listDietRecipes, variables: { filter: filter }
        });
        console.log("+++" + JSON.stringify(progresses));

        const result = progresses.data.listDietRecipes?.items;

        if (result.length != 0) {
            console.log("User has diet");
            console.log("+++" + result);

            setDiet(result[0]);
        } else {
            let filter = {
                _deleted: { ne: true }
            };
            const progresses = await API.graphql({
                query: listDietRecipes, variables: { filter: filter }
            });

            const result = progresses.data.listDietRecipes?.items;
            console.log(result);
            setDiet(result[0]);
        }


        return false;
    }

    const fetchDietDays = async (dietId) => {
        const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
        let filter = {
            dietrecipeID: { eq: dietId },
            _deleted: { ne: true }
        };

        const progresses = await API.graphql({
            query: listDietDays, variables: { filter: filter }
        });

        const result = progresses.data.listDietDays?.items?.filter(item => item._deleted == null);
        result.sort((a, b) => a.day < b.day ? -1 : (a.day > b.day ? 1 : 0))

        console.log("Diet days " + JSON.stringify(result));
        setDietDays(result)
        setLoading(false);            
        setDietstatusLoading(false);

        return false;
    }

    const fetchDietStarted = async () => {
        const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
        let filter = {
            userID: { eq: authUser.attributes.sub },
            _deleted: { ne: true }
        };

        const progresses = await API.graphql({
            query: listCustomUserRecipes, variables: { filter: filter }
        });

        const result = progresses.data.listUserRecipes?.items[0]?.dietRecipe.Diets.items.filter(item => item._deleted == null);
        result.sort((a, b) => a.day < b.day ? -1 : (a.day > b.day ? 1 : 0))

        console.log(JSON.stringify(result));
        setDietDays(result)
        return false;
    }

    React.useEffect(() => {
        console.log("I am in Diet");
        //first understand if the user started to diet
        fetchUserHasDiet();
        //fetchDietRecipes();
        //fetchDietStarted();
   

    }, []
    )
    // Render
    const navigateToDayDetails = (id) => {
        //console.log("--->" + JSON.stringify(id));
        navigation.navigate('DietDetails', { id: id });
    };


    function renderHeader() {
        return (
            <HeaderDiet
                title="DIET STATUS"
                containerStyle={{
                    height: 0,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}
            />
        )
    }

    function renderInfo() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <Text style={{ textAlign: 'center', color: COLORS.gray, ...FONTS.body4 }}>Diet started on</Text>
                <Text style={{ textAlign: 'center', ...FONTS.h2 }}>21 Sept 2021 / 12:30PM</Text>
            </View>
        )
    }



    function renderStart() {
        return (

            <TextButton
                buttonContainerStyle={{
                    height: 60,

                    backgroundColor: COLORS.primary
                }}
                label="Place your Order"
                onPress={onStartDiet}
            />
        )
    }
    function renderDietDays() {
        return (
            <View
                style={{

                    marginTop: SIZES.padding,
                    paddingVertical: SIZES.padding,
                    borderRadius: SIZES.radius,
                    borderWidth: 2,
                    borderColor: COLORS.lightGray2,
                    backgroundColor: COLORS.white2
                }}
            >
                {/* Track Order */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>Track Diet</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>NY021SNI</Text>
                </View>

                <LineDivider
                    lineStyle={{
                        backgroundColor: COLORS.lightGray2
                    }}
                />

                {/* Status */}
                <View
                    style={{
                        marginTop: SIZES.padding,
                        paddingHorizontal: SIZES.padding,
                    }}
                >
                    {dietDays.map((item, index) => {
                        return (
                            <View
                                key={`StatusList-${index}`}


                            >
                                <TouchableOpacity key={index} onPress={() => navigateToDayDetails(item.id)}>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: -5
                                        }}
                                    >
                                        <Image
                                            source={icons.check_circle}
                                            style={{
                                                width: 40,
                                                height: 40,
                                                tintColor: index <= currentStep ? COLORS.primary : COLORS.darkGray
                                            }}
                                        />

                                        <View
                                            style={{
                                                marginLeft: SIZES.radius
                                            }}
                                        >
                                            <Text style={{ ...FONTS.h3 }}>{item.day} Day on {item.title} </Text>
                                            <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{item.description}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {index < dietDays.length - 1 &&
                                    <View>
                                        {index < currentStep &&
                                            <View
                                                style={{
                                                    height: 50,
                                                    width: 3,
                                                    marginLeft: 18,
                                                    backgroundColor: COLORS.primary,
                                                    zIndex: -1
                                                }}
                                            />
                                        }

                                        {index >= currentStep &&
                                            <Image
                                                source={icons.dotted_line}
                                                resizeMode="cover"
                                                style={{
                                                    width: 4,
                                                    height: 50,
                                                    marginLeft: 17
                                                }}
                                            />
                                        }
                                    </View>
                                }
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }

    function renderDietInfo() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    alignItems: 'center',
                }}
            >


                <Image
                    source={icons.kickstarter}
                    style={{
                        width: 100,
                        height: 100,
                        tintColor: COLORS.black
                    }}
                />


                <Text style={{ marginTop: SIZES.radius, ...FONTS.h2 }}>{diet?.name}</Text>
                <Text style={{ ...FONTS.body3 }}>{diet?.gender}</Text>


                {

                    
                    ( hasDiet ) ? (
 
                     
                            ( !setDietstatusLoading ) ? (
                                <View style={
                                    {
                                        flex: 1,
                                        height: SIZES.loadingIndicatorHeight,
                                        padding: SIZES.padding,
                                        alignSelf: 'center',
                                        justifyContent: 'space-between',
                                        borderRadius: SIZES.radius,
                                        shadowColor: COLORS.VIEW.shadow,
                                        shadowOffset: { width: -5, height: 5 },
                                        shadowOpacity: 0.5,
                                        shadowRadius: 2,
                                        flexDirection: 'row',
                                        flexWrap: 'wrap'
                                    }
                                }>
                
                                    <HorizontalWorkoutLoader />
                                </View>
                            ):(
                                <DietStat
                                status="STARTED"
                            />
                            )

                     
                        
                    ) : (
                        ( setDietstatusLoading ) ? (
                            <View style={
                                {
                                    flex: 1,
                                    height: SIZES.loadingIndicatorHeight,
                                    padding: SIZES.padding,
                                    alignSelf: 'center',
                                    justifyContent: 'space-between',
                                    borderRadius: SIZES.radius,
                                    shadowColor: COLORS.VIEW.shadow,
                                    shadowOffset: { width: -5, height: 5 },
                                    shadowOpacity: 0.5,
                                    shadowRadius: 2,
                                    flexDirection: 'row',
                                    flexWrap: 'wrap'
                                }
                            }>
            
                                <HorizontalWorkoutLoader />
                            </View>
                        ):(
                            <DietStat
                            status="NOTSTARTED"
                        />
                        )

                    )

                }
            </View>
        ) 
    }


    function renderDietForm() {
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding
                }}
            >
                {/* Rating */}
                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ ...FONTS.body3 }}>{diet?.description}</Text>

                </View>
                <TextButton
                    buttonContainerStyle={{
                        height: 60,
                        ...styles.selectedBtnStyle
                    }}
                    label="Start Diet"
                    labelStyle={{
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                    onPress={() => onStartDiet()}
                />
                {/* Tips */}
                <View
                    style={{
                        marginTop: SIZES.padding,
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>Comments to Kenneth</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.base,
                            justifyContent: 'space-between',
                        }}
                    >

                    </View>
                </View>

                {/* Comments */}
                <View
                    style={{
                        flex: 1,
                        marginTop: SIZES.padding,
                        paddingHorizontal: SIZES.padding,
                        paddingVertical: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                    }}
                >
                    <TextInput
                        style={{
                            flex: 1,
                            ...FONTS.body3
                        }}
                        onChangeText={val => setCommentText(val)}
                        rows={1}
                        multiline={true}
                        placeholder="Add a comment"
                    />

                </View>
            </View>
        )
    }

    function renderStartButton() {
        return (
            <View
                style={{

                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <TextButton
                    buttonContainerStyle={{
                        height: 60,
                        ...styles.selectedBtnStyle
                    }}
                    label="Start Diet"
                    labelStyle={{
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                    onPress={() => onStartDiet()}
                />
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding
                }}
            >
                {currentStep < constants.track_order_status.length - 1 &&
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 55,
                        }}
                    >
                        <TextButton
                            buttonContainerStyle={{
                                width: "40%",
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.lightGray2
                            }}
                            label="Cancel"
                            labelStyle={{
                                color: COLORS.primary
                            }}
                            onPress={() => navigation.navigate("Home")}
                        />

                        <TextIconButton
                            containerStyle={{
                                flex: 1,
                                marginLeft: SIZES.radius,
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.primary
                            }}
                            label="Map View"
                            labelStyle={{
                                color: COLORS.white,
                                ...FONTS.h3
                            }}
                            icon={icons.map}
                            iconPosition="LEFT"
                            iconStyle={{
                                width: 25,
                                height: 25,
                                marginRight: SIZES.base,
                                tintColor: COLORS.white
                            }}
                            onPress={() => navigation.navigate("Map")}
                        />
                    </View>
                }

                {currentStep == constants.track_order_status.length - 1 &&
                    <TextButton
                        buttonContainerStyle={{
                            height: 55,
                            borderRadius: SIZES.base,
                        }}
                        label="DONE"
                        onPress={() => navigation.navigate("Home")}
                    />
                }
            </View>
        )
    }

    return (



        <KeyboardAwareScrollView
            keyboardDismissMode="on-drag"
            contentContainerStyle={{

                height: 3000,
                paddingBottom: SIZES.padding,


            }}
        >
            {renderDietInfo()}
            {loading ? (
                <View style={
                    {
                        flex: 1,
                        height: SIZES.loadingIndicatorHeight,
                        padding: SIZES.padding,
                        alignSelf: 'center',
                        justifyContent: 'space-between',
                        borderRadius: SIZES.radius,
                        shadowColor: COLORS.VIEW.shadow,
                        shadowOffset: { width: -5, height: 5 },
                        shadowOpacity: 0.5,
                        shadowRadius: 2,
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }
                }>

                    <HorizontalWorkoutLoader />
                </View>
            ) : (

                hasDiet ? (
                    renderDietDays()
                ) :
                (
                    renderDietForm()
                )
            )
            }

        </KeyboardAwareScrollView>


    )
}
const styles = StyleSheet.create({
    selectedBtnStyle: {
        backgroundColor: COLORS.primary,
        padding: SIZES.radius,
        borderRadius: 10,
        marginTop: 32,
    },
    unselectedBtnStyle: {
        borderColor: COLORS.gray2,
        borderWidth: 1,
        padding: SIZES.radius,
        backgroundColor: COLORS.white,
        borderRadius: 10,
    },
    selectedLabelStyle: {
        ...FONTS.body3,
        color: COLORS.white,
    },
    unselectedLabelStyle: {
        ...FONTS.body3,
        color: COLORS.gray2,
    },
})

export default DietStatus;