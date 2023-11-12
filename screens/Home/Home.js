import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    StyleSheet,
    ImageBackground
} from 'react-native';
import dummyNewsImage from '../../assets/images/news/news.jpeg'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { Auth, JS } from 'aws-amplify';
import { FilterModal } from "../";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { setSelectedTab } from "../../stores/tab/tabActions";
import { Loader, HorizontalLoader, Paywall, HorizontalProgramCard, Donut } from "../../components";
import { FONTS, SIZES, COLORS, icons, constants, } from "../../constants";
import { Storage, API } from "aws-amplify";
import { listBlogs, listNews } from "../../src/graphql/queries";
import { listCustomPrograms, listCustomUserWorkoutProgresses } from "../../src/graphql/custom-queries"
import { historyByDate } from "../../src/graphql/custom-queries"
import { LogBox } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


import { useGlobalDispatch, useGlobalState } from "../../globals/GlobalProvider";



const Section = ({ title, onPress, children }) => {
    return (
        <View>
            {/* Header 1*/}
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    marginTop: SIZES.padding,
                    marginBottom: SIZES.padding
                }}
            >
                <Text style={{ flex: 1, ...FONTS.body3 }}>
                    {title}
                </Text>

                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text style={{ color: COLORS.VIEW.secondary60, ...FONTS.body3 }}>
                        Show All
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Content */}
            {children}
        </View>
    )
}

const Home = ({ selectedTab, setSelectedTab }) => {
    const [news, setNews] = React.useState([]);
    const [blog, setBlog] = React.useState([]);
    const [showFilterModal, setShowFilterModal] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [loadingKPIs, setLoadingKPIs] = React.useState(true);
    const [loadingRecommended, setLoadingRecommended] = React.useState(true);
    const [lastWorkoutHistory, setLastWorkoutHistory] = React.useState([]);
    const [programs, setPrograms] = React.useState([]);
    const [paywallShown, setPaywallShown] = React.useState(false);

    const navigation = useNavigation();
    const globalState = useGlobalState();
    const globalDispatch = useGlobalDispatch();
    
    React.useEffect(() => {
        LogBox.ignoreLogs(['Setting a timer for a long period of time']);
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);



        const fetchUserWorkoutProgress = async () => {
            try {
                //first get the user
                const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

                let filter = {
                    userId: { eq: authUser.attributes.sub },

                };

                const progresses = await API.graphql({
                    query: listCustomUserWorkoutProgresses, variables: { filter: filter }
                });



                const resultHistoryItem = progresses.data.listUserWorkoutProgresses.items[0];

                //if there is no result
                if (resultHistoryItem) {
                    console.log(JSON.stringify(resultHistoryItem));

                    setLastWorkoutHistory([
                        {

                            description: resultHistoryItem?.workoutName,
                            count: resultHistoryItem.workoutExerciseCount,
                            completed: resultHistoryItem.completedExercises.length,
                            name: resultHistoryItem?.workoutName,
                            status: resultHistoryItem.progress,
                            workoutID: resultHistoryItem.workoutId,
                            image: icons.bar,
                            lightColor: COLORS.VIEW.secondary20,
                            color: COLORS.VIEW.secondary20,
                            darkColor: COLORS.VIEW.secondary20,
                        }
                    ]);
                } else {
                    setLastWorkoutHistory([
                        {
                            workoutID: '-1',
                            description: "No record",
                            count: 22,
                            completed: 22,
                            name: "",
                            status: 10,
                            image: icons.bar,
                            lightColor: COLORS.VIEW.secondary20,
                            color: COLORS.VIEW.secondary20,
                            darkColor: COLORS.VIEW.secondary20,
                        }
                    ])
                }
                setLoadingKPIs(false);
            } catch (err) {
                console.log(err);
            }

        }

        const calculateKPIs = async () => {
            try {
                setLoadingKPIs(true);
                let user = await Auth.currentAuthenticatedUser();

                const { attributes } = user;
                console.log("Home.js User Attributes are " + JSON.stringify(attributes));
                let filter = {
                    userWorkoutHistoryUserId: {
                        eq: attributes.sub,
                    },
                    description: { ne: "" },
                    progress: { eq: 'COMPLETED' },

                };


                const lastHistoryItem = await API.graphql({
                    query: historyByDate,
                    variables: { limit: 1, filter: filter, type: "Workout", sortDirection: "DESC" }
                });

                const resultHistoryItem = lastHistoryItem?.data?.historyByDate?.items;

                //if there is no result
                if (Array.isArray(resultHistoryItem) && resultHistoryItem.length) {

                    filter = {
                        ...filter,
                        userWorkoutHistoryWorkoutId: {
                            eq: lastHistoryItem.data.historyByDate?.items[0].userWorkoutHistoryWorkoutId,
                        },
                    }


                    const history = await API.graphql({
                        query: historyByDate,
                        variables: { filter: filter, type: "Workout", sortDirection: "DESC" }
                    });
                    const unique = [... new Set(history.data.historyByDate.items.map(item => item.userWorkoutHistoryLastExerciseId))];


                    setLastWorkoutHistory([
                        {

                            description: lastHistoryItem.data.historyByDate?.items[0].description,
                            count: lastHistoryItem.data.historyByDate?.items[0].exerciseCount,
                            completed: unique.length,
                            name: lastHistoryItem.data.historyByDate?.items[0].description,
                            status: eval(unique.length / lastHistoryItem.data.historyByDate?.items[0].exerciseCount) * 100,
                            image: icons.bar,
                            lightColor: COLORS.VIEW.secondary20,
                            color: COLORS.VIEW.secondary20,
                            darkColor: COLORS.VIEW.secondary20,
                        }
                    ]);
                } else {
                    setLastWorkoutHistory([
                        {

                            description: "No record",
                            count: 10,
                            completed: 10,
                            name: "",
                            status: 10,
                            image: icons.bar,
                            lightColor: COLORS.VIEW.secondary20,
                            color: COLORS.VIEW.secondary20,
                            darkColor: COLORS.VIEW.secondary20,
                        }
                    ])
                }
                setLoadingKPIs(false);

            } catch (error) {
                console.log(error);
            }


        }

        const fetctRecommendedPrograms = async () => {
            setLoadingRecommended(true);
            const allPrograms = await API.graphql({ query: listCustomPrograms });

            const programs = await Promise.all(
                allPrograms.data.listPrograms.items.map(async (program) => {
                    const image = await Storage.get(program.homepageImageUrl);
                    program.s3Image = image;
                    return program;
                })
            );
            setLoadingRecommended(false);
            setPrograms(programs);
        }


        const fetchNews = async () => {
            setLoading(true);
            const newsItem = await API.graphql({ query: listNews });
            const newss = await Promise.all(
                newsItem.data.listNews.items.map(async (news) => {
                    const image = await Storage.get(news.imageUrl);
                    const video = await Storage.get(news.videoUrl);
                    news.image = image;
                    news.videoUrl = video;

                    return news;
                })
            );
            if (Array.isArray(newss) && newss.length) {
                setNews(newss[0]);
            } else {
                setNews({
                    headerText: "Welcome",
                    image: Image.resolveAssetSource(dummyNewsImage).uri
                })
            }
            setLoading(false);
        };


        const fetchBlog = async () => {
            setLoading(true);
            const blogItem = await API.graphql({ query: listBlogs });
            const blogs = await Promise.all(
                blogItem.data.listBlogs.items.map(async (blog) => {
                    const image = await Storage.get(blog.imageUrl);

                    blog.image = image;


                    return blog;
                })
            );
            if (Array.isArray(blogs) && blogs.length) {
                setBlog(blogs[0]);
            } else {
                setBlog({
                    headerText: "Welcome",
                    image: Image.resolveAssetSource(dummyNewsImage).uri
                })
            }
            setLoading(false);
        };

        fetctRecommendedPrograms();
        //calculateKPIs();
        fetchUserWorkoutProgress();
        fetchNews();
        fetchBlog();
    }, []);



    function renderSearch() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 45,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                {/* Icon */}
                <Image
                    source={icons.search}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.black
                    }}
                />

                {/* Text Input */}
                <TextInput
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        ...FONTS.body5
                    }}
                    placeholder="search exercise..."
                />

                {/* Filter Button */}
                <TouchableOpacity
                    onPress={() => setShowFilterModal(true)}
                >
                    <Image
                        source={icons.filter}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.black
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }



    function renderRecommendedProgramsSection() {

        return (
            <Section
                title="Recommended Programs"
                onPress={() => { setSelectedTab(constants.screens.program) }}
            >

                {loadingRecommended ? (
                    <View style={
                        {
                            flex: 1,
                            height: SIZES.loadingIndicatorHeight,
                            padding: SIZES.padding,
                            alignSelf: 'center',
                            backgroundColor: data.color,
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

                        <HorizontalLoader />
                    </View>

                ) : (


                    <>
                        <FlatList
                            data={programs}
                            keyExtractor={item => `${item.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <ProgramCard
                                    containerStyle={{
                                        marginLeft: SIZES.padding,
                                    }}
                                    data={item}
                                    onPress={() => navigation.navigate("ProgramDetail", { program: item })}
                                />
                            )}
                        />

                    </>

                )}
            </Section>
        )
    }

    const Card = ({ data, index }) => {
        return (

            <TouchableOpacity
                style={{
                    flex: 1,
                    height: SIZES.KPI.kpiCardHeight,
                    //padding: SIZES.KPI.kpiPadding,
                    alignSelf: 'center',
                    backgroundColor: COLORS.VIEW.secondary80,
                    justifyContent: "space-between",
                    borderRadius: SIZES.VIEW.radius,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    flex: 1
                }}
                onPress={() => {
                      const toWorkoutDetail = {
                       
                            ...data
                         
                      }
                      //console.log("--> " + JSON.stringify(toWorkoutDetail));
                      navigation.navigate("WorkoutDetail", { workout: toWorkoutDetail })

                }}>

                <View
                    key={index}
                    style={{
                        flex: 1,
                        height: SIZES.KPI.kpiCardHeight,
                        //padding: SIZES.KPI.kpiPadding,
                        alignSelf: 'center',
                        backgroundColor: COLORS.VIEW.secondary80,
                        justifyContent: "space-between",
                        borderRadius: SIZES.VIEW.radius,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        flex: 1
                    }}>



                    <View style={{
                        height: SIZES.KPI.kpiCardHeight,
                        alignContent: "flex-start",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        marginLeft: SIZES.KPI.kpiPadding,
                        paddingTop: 0,
                        marginTop: 0
                    }}>

                        <>
                            {/* Play Now */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: "center",
                                        flexDirection: "row",
                                    }}>
                                    <Image
                                        source={icons.stopwatch}
                                        resizeMode="contain"
                                        style={{

                                            tintColor: COLORS.VIEW.primary,
                                        }}
                                    />
                                    <Text style={{ color: COLORS.VIEW.primary, ...FONTS.body4Bold }}>Workout</Text>
                                </View>
                            </View>

                            <Donut percentage={data.status * 100} color={COLORS.VIEW.primary} delay={500 + 100 * 1} max={100} />
                        </>
                    </View>

                    <View style={{ alignItems: "flex-start", paddingRight: SIZES.KPI.kpiPadding }}>
                        <Text style={{ ...FONTS.body4Bold, paddingRight: SIZES.KPI.kpiPadding, color: COLORS.VIEW.primary, marginTop: SIZES.KPI.kpiPadding }}>{data.name}</Text>

                        <Text style={{ ...FONTS.body5, paddingRight: SIZES.KPI.kpiPadding, color: COLORS.VIEW.secondary }}>
                            {'Total Exercise ' + data.count}
                        </Text>
                        <Text style={{ ...FONTS.body5, paddingRight: SIZES.KPI.kpiPadding, color: COLORS.VIEW.secondary }}>
                            {'Completed ' + data.completed}
                        </Text>

                    </View>


                </View>

            </TouchableOpacity>
        );
    };

    const renderWorkoutHistory = () => (

        <>
            <View style={{
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding
            }}>
                <Text style={{

                    color: COLORS.titleprimary,
                    ...FONTS.body3Bold
                }}>{"Your activities"}</Text>


                <>{loadingKPIs ? (
                    <>
                        <View style={
                            {
                                flex: 1,
                                height: SIZES.loadingIndicatorHeight,
                                padding: 10,
                                alignSelf: 'center',
                                backgroundColor: data.color,
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

                            <Loader />
                        </View>

                    </>
                ) : (

                    <View style={{ flexDirection: 'row', marginTop: SIZES.padding }}>
                        {lastWorkoutHistory.map((item, index) => (
                            <Card data={item} index={index} key={index} />
                        ))}
                    </View>

                )}
                </>


            </View>
        </>

    );


    const OfferText = ({ children }) => (
        <Text style={styles.offerText}>{children}</Text>
    );


    const ProgramCard = ({ data, index, onPress }) => (
        <>{loading ? (
            <>
                <View style={
                    {
                        flex: 1,
                        height: SIZES.loadingIndicatorHeight,
                        padding: SIZES.padding,
                        alignSelf: 'center',
                        backgroundColor: data.color,
                        justifyContent: 'space-between',
                        borderRadius: SIZES.radius,
                        shadowColor: 'lightgrey',
                        shadowOffset: { width: -5, height: 5 },
                        shadowOpacity: 0.5,
                        shadowRadius: 2,
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }
                }>

                    <Loader />
                </View>

            </>
        ) : (
            <>


                <TouchableWithoutFeedback
                    onPress={onPress}
                >
                    <View
                        style={{
                            marginLeft: SIZES.padding,

                            width: SIZES.programCardWidth
                        }}
                    >
                        <ImageBackground
                            source={{ uri: data?.s3Image }}
                            resizeMode="cover"
                            style={{
                                height: SIZES.newsBannerHeight,
                                justifyContent: "space-between"
                            }}
                            imageStyle={{
                                borderRadius: SIZES.radius
                            }}
                        >
                            <View style={{
                                marginLeft: SIZES.padding,
                                marginTop: SIZES.padding
                            }}>
                                <Text style={styles.bannerTitle}>{data?.name}</Text>
                                <OfferText>{data?.description}</OfferText>
                            </View>


                        </ImageBackground>
                    </View>
                </TouchableWithoutFeedback>

            </>
        )}
        </>
    );


    const renderNewsBanner = () => (
        <>{loading ? (
            <>
                <View style={
                    {
                        flex: 1,
                        height: SIZES.loadingIndicatorHeight,
                        padding: SIZES.padding,
                        alignSelf: 'center',
                        backgroundColor: data.color,
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

                    <Loader />
                </View>

            </>
        ) : (
            <>
                <Text style={{
                    paddingBottom: SIZES.padding,
                    marginLeft: SIZES.padding,
                    color: COLORS.titleprimary,
                    ...FONTS.body3Bold
                }}>{news?.headerText}</Text>
                <TouchableWithoutFeedback
                    onPress={() => {
                        if (news.headerText !== "Welcome") {
                            navigation.navigate("News", { selectedItem: news })
                        } else {
                            setSelectedTab(constants.screens.program);
                        }
                    }}>
                    <View
                        style={{
                            marginLeft: SIZES.padding,
                            marginRight: SIZES.padding,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <ImageBackground
                            source={{ uri: news?.image }}
                            resizeMode="cover"
                            style={{

                                height: SIZES.newsBannerHeight,
                                justifyContent: "space-between"
                            }}
                            imageStyle={{
                                borderRadius: SIZES.radius
                            }}>
                            <View style={{
                                marginLeft: SIZES.padding,
                                marginTop: SIZES.padding
                            }}>
                                <Text style={styles.bannerTitle}>{news?.title}</Text>
                                <OfferText>{news?.description}</OfferText>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    height: 60,
                                    width: "100%",
                                    marginBottom: SIZES.radius,
                                    paddingHorizontal: SIZES.radius
                                }}
                            >
                                {/* Play Now */}
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',

                                    }}>
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            width: "30%",
                                            height: SIZES.videoPlayHeight,
                                            flexDirection: "row",
                                            backgroundColor: COLORS.white,
                                            borderRadius: SIZES.radius * 3
                                        }}>
                                        <Image
                                            source={icons.play}
                                            resizeMode="contain"
                                            style={{
                                                width: 15,
                                                height: 15,
                                                tintColor: COLORS.TEXT.header,
                                            }}
                                        />
                                        <Text style={{ marginLeft: SIZES.base, color: COLORS.TEXT.header, ...FONTS.h3 }}>Start</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableWithoutFeedback>

            </>
        )}
        </>
    );




    const renderBlogSection = () => (
        <>{loading ? (
            <>
                <View style={
                    {
                        flex: 1,
                        height: SIZES.loadingIndicatorHeight,
                        padding: SIZES.padding,
                        alignSelf: 'center',
                        backgroundColor: data.color,
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

                    <Loader />
                </View>

            </>
        ) : (
            <>
                <Text style={{
                    paddingBottom: SIZES.padding,
                    marginLeft: SIZES.padding,
                    color: COLORS.titleprimary,
                    ...FONTS.body3Bold
                }}>{blog?.title}</Text>
                <TouchableWithoutFeedback
                    onPress={() => {

                        navigation.navigate("Blog", { selectedItem: blog })

                    }}>
                    <View
                        style={{
                            marginLeft: SIZES.padding,
                            marginRight: SIZES.padding,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <ImageBackground
                            source={{ uri: news?.image }}
                            resizeMode="cover"
                            style={{

                                height: SIZES.homepageCardHeight,
                                justifyContent: "space-between"
                            }}
                            imageStyle={{
                                borderRadius: SIZES.radius
                            }}>
                            <View style={{
                                marginLeft: SIZES.padding,
                                marginTop: SIZES.padding
                            }}>
                                <Text style={styles.bannerTitle}>{blog?.title}</Text>
                                <OfferText>{blog?.description}</OfferText>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    height: 30,
                                    width: "100%",
                                    marginBottom: SIZES.radius,
                                    paddingHorizontal: SIZES.radius
                                }}
                            >
                                {/* Play Now */}
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',

                                    }}>
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            width: "30%",
                                            height: SIZES.videoPlayHeight,
                                            flexDirection: "row",
                                            backgroundColor: COLORS.white,
                                            borderRadius: SIZES.radius * 3
                                        }}>
                                        <Image
                                            source={icons.play}
                                            resizeMode="contain"
                                            style={{
                                                width: 15,
                                                height: 15,
                                                tintColor: COLORS.TEXT.header,
                                            }}
                                        />
                                        <Text style={{ marginLeft: SIZES.base, color: COLORS.TEXT.header, ...FONTS.h3 }}>Start</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableWithoutFeedback>

            </>
        )}
        </>
    );


    return (
        <View
            style={{
                flex: 1
            }}
        >
            {/* Search */}
            {renderSearch()}

            {/* Filter */}
            {showFilterModal &&
                <FilterModal
                    isVisible={showFilterModal}
                    onClose={() => setShowFilterModal(false)}
                />
            }

            {/* List */}
            <FlatList
                data={data}

                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Render Banner */}
                        {renderNewsBanner()}

                        {/* History */}
                        {renderWorkoutHistory()}

                        {/* Recommended */}
                        {renderRecommendedProgramsSection()}

                        {/* Render Blogs */}
                        {renderBlogSection()}
                    </View>
                }
                renderItem={({ item, index }) => {
                    return (
                        <View></View>
                        // <HorizontalProgramCard
                        //     containerStyle={{
                        //         height: 0,
                        //         alignItems: 'center',
                        //         marginHorizontal: SIZES.padding,
                        //         marginBottom: SIZES.radius
                        //     }}
                        //     imageStyle={{
                        //         marginTop: 20,
                        //         height: 110,
                        //         width: 110
                        //     }}
                        //     item={item}
                        //     onPress={() => navigation.navigate("ProgramDetail", { program: item })
                        //     }
                        // />
                    )
                }}
                ListFooterComponent={
                    <View style={{ height: 600, backgroundColor: COLORS.red }} />
                }
            />
            {paywallShown && <Paywall />}

        </View>
    )
}

 

export default Home;

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: { paddingHorizontal: 10, flex: 1, justifyContent: 'center' },
    bigTitle: { ...FONTS.body1 },
    smallTitle: { ...FONTS.body1 },
    image: { height: '100%', width: '100%' },
    fireImage: { height: 15, width: 15, alignSelf: 'center', margin: 5 },
    banner: {
        marginTop: SIZES.base,
        padding: SIZES.padding,
        height: 250,
        resizeMode: 'contain',
        borderRadius: SIZES.radius,
        overflow: 'hidden',
        flexDirection: 'row',
        marginHorizontal: SIZES.padding,

    },
    bannerContainer: { flex: 1 },
    label: { ...FONTS.body1, marginVertical: 10 },
    model: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: 10,
        height: '75%',
        width: '50%',
        transform: [{ rotateY: '180deg' }],
    },

    bannerTitle: { color: 'white', ...FONTS.body4Bold },
    offerText: { color: 'white', ...FONTS.body3Bold },

    rowLabel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    fireContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const data = [
    {
        id: 1,
        name: 'Challenge of Muscle',
        status: 85,
        image: icons.bar,
        lightColor: '#f8e4d9',
        color: '#fcf1ea',
        darkColor: '#fac5a4',
    }
];

