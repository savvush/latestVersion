import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Animated
} from 'react-native';

import { FONTS, SIZES, COLORS, constants } from "../../constants";
import { TextButton } from "../../components";
import { Storage, API } from "aws-amplify";
import { listOnboardings } from "../../src/graphql/queries"

const OnBoarding = ({ navigation }) => {
    const [onboarding, setOnboarding] = React.useState([])
    React.useEffect(() => {
        let isApiSubscribed = true;

        const fetchOnBoardingData = async () => {
            try {
                let filter = {
                    isDisplay: { eq: "Yes" },
                    _deleted: { ne: true }
                };

                const allOnboardingData = await API.graphql({
                    query: listOnboardings,
                    variables: { filter: filter },
                    authMode: 'AWS_IAM'
                });
                const onboardings = await Promise.all(
                    allOnboardingData.data.listOnboardings.items.map(async (onboarding) => {
                        const image = await Storage.get(onboarding.imageUrl, {
                            level: "public"
                        });
                        onboarding.imageUrl = image;
                        return onboarding;
                    })
                );
                if (isApiSubscribed) {
                    if (!onboardings) {
                        setOnboarding([
                            { id: 0, imageUrl: constants.onboardingImage },
                        ]);
                    } else {
                        setOnboarding(onboardings);
                    }
                }
            } catch (error) {
                setOnboarding([
                    { id: 0, imageUrl: constants.onboardingImage },
                ]);
            }

        };

        fetchOnBoardingData();

        return () => {
            isApiSubscribed = false;
        };
    }, []);

    const av = new Animated.Value(0);
    av.addListener(() => { return });

    const scrollX = React.useRef(av).current;
    const flatListRef = React.useRef()
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const onViewChangeRef = React.useRef(({ viewableItems, changed }) => {

        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index)
        }

    })

    const Dots = () => {
        const dotPosition = Animated.divide(scrollX, SIZES.width)

        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {
                    onboarding.map((item, index) => {
                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.ONBOARDING.dotPassive, COLORS.ONBOARDING.dotActive, COLORS.ONBOARDING.dotPassive],
                            extrapolate: "clamp"
                        }) 

                        const dotWidth = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [10, 30, 10],
                            extrapolate: "clamp"
                        })
 
                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                style={{
                                    borderRadius: SIZES.ONBOARDING.dotRadius,
                                    marginHorizontal: SIZES.ONBOARDING.dotMargin,
                                    width: dotWidth,
                                    height: SIZES.ONBOARDING.dotHeight,
                                    backgroundColor: dotColor
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }


    function renderFooter() {
        return (
            <View
                style={{
                    height: SIZES.ONBOARDING.footerHeight
                }}
            >
                {/* Pagination / Dots */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}
                >
                    <Dots />
                </View>

                {/* Buttons */}
                {currentIndex < onboarding.length - 1 &&
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: SIZES.ONBOARDING.padding,
                            marginVertical: SIZES.ONBOARDING.padding
                        }}
                    >
                        <TextButton
                            label="Skip"
                            buttonContainerStyle={{
                                backgroundColor: null
                            }}
                            labelStyle={{
                                color: COLORS.VIEW.darkGray
                            }}
                            onPress={() => navigation.replace("SignIn")}
                        />

                        <TextButton
                            label="Next"
                            buttonContainerStyle={{
                                height: SIZES.VIEW.buttonHeight,
                                width: SIZES.VIEW.buttonWidth,
                                borderRadius: SIZES.VIEW.radius,
                                backgroundColor: COLORS.VIEW.primary,

                            }}
                            onPress={() => {
                                flatListRef?.current?.scrollToIndex({
                                    index: currentIndex + 1,
                                    animated: true
                                })


                            }}
                        />
                    </View>
                }

                {currentIndex == onboarding.length - 1 &&
                    <View
                        style={{
                            paddingHorizontal: SIZES.ONBOARDING.padding,
                            marginVertical: SIZES.ONBOARDING.padding
                        }}
                    >
                        <TextButton
                            label="Let's Get Started"
                            buttonContainerStyle={{
                                backgroundColor: COLORS.VIEW.primary,
                                height: SIZES.VIEW.buttonHeight,
                                borderRadius: SIZES.VIEW.radius,
                            }}
                            onPress={() => navigation.replace("SignIn")}
                        />
                    </View>
                }
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.VIEW.white,
            }}
        >

            <Animated.FlatList
                ref={flatListRef}
                style={{ backgroundColor: COLORS.VIEW.primary }}
                horizontal
                pagingEnabled
                data={onboarding}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                onEndReached={({ distanceFromEnd }) => {

                    //setCurrentIndex(onboarding.length-1)
                }}
                onViewableItemsChanged={onViewChangeRef.current}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: SIZES.width,
                            }}
                        >
                            {/* Header */}
                            <View
                                style={{
                                    flex: 3,
                                }}
                            >
                                <ImageBackground
                                    source={{ uri: item.imageUrl }}
                                    style={{
                                        flex: 1,

                                        justifyContent: "flex-end",
                                        height: index == 1 ? "100%" : "100%",
                                        width: "100%",
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...FONTS.h1,
                                            textAlign: "center",
                                            color: COLORS.VIEW.white,
                                        }}
                                    >
                                        {item.description}
                                    </Text>
                                    {
                                        <Text
                                            style={{
                                                marginTop: SIZES.ONBOARDING.height,
                                                textAlign: "center",
                                                color: COLORS.VIEW.white,
                                                paddingHorizontal: SIZES.ONBOARDING.padding,
                                                ...FONTS.body3,
                                            }}
                                        >
                                            {item.description}
                                        </Text>
                                    }

                                    {renderFooter()}
                                </ImageBackground>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default OnBoarding;