/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    Pressable,
    TouchableOpacity,
    StatusBar,
    BackHandler,
    Image,
    TextInput,
    VirtualizedList,
    ScrollView,
} from 'react-native';
import {
    FONTS,
    SIZES,
    COLORS,
    icons,
    images,
    dummyData,
  } from "../../constants";
import HomeData from './Utils/HomeData.json';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackActions, useFocusEffect } from '@react-navigation/native';
import { ProgressView } from '@react-native-community/progress-view';
import Modal from 'react-native-modal';
import CommentsData from './Utils/Comments.json';
import { numberFormat, numberSeperator, getMonthString } from './Utils/Util';
import { heightPercentageToDP } from './Utils/DpToPixel';
import { Storage, API, graphqlOperation } from "aws-amplify";
import { createUserWorkoutHistory } from "../../src/graphql/mutations";
import { Auth, Hub } from "aws-amplify";

const Player = props => {
    const videoIndex  = props.route.params;
    const [paused, setPause] = useState(true);
    const [showControls, setShowControls] = useState(true);
    const [fullScreen, setFullScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [currentProgress, setCurrentProgress] = useState(0);
    const [videoDuration, setVideoDuration] = useState(0);
    const [videoLength, setVideoLength] = useState(0);
    const [progressBar, setProgressBar] = useState(0);
    const [videoTime, setVideoTime] = useState(0);
    const [commentModal, setCommentModal] = useState(false);
    const [textInputModal, setTextInputModal] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [descModal, setDescModal] = useState(false);
    const [downloadModal, setDownloadModal] = useState(false);
    const [video, setVideo] = React.useState();
    // const [videoUrl, setVideoUrl] = React.useState();
    const [exerciseItem, setExerciseItem] = React.useState([]);
    const [thumbnail, setThumbnail] = React.useState();

    const [videoDetail, setVideoDetail] = useState({
        liked: false,
        disliked: false,
        saved: false,
    });
    const videoUrl = props.route.params?.exercise?.videoUrl;
    const allexercises = props.route.params?.allexercises;
    const workout = props.route.params?.workoutproperties;
    

    const data = HomeData[videoIndex];


    const bufferConfig = {
        minBufferMs: 15000,
        maxBufferMs: 60000,
        bufferForPlaybackMs: 2500,
        bufferForPlaybackAfterRebufferMs: 5000,
    };


    async function saveUserHistoryCompleted(exercise) {
        try {
            //first get the user
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            //then save it to history table 
            console.log("------>" + JSON.stringify(workout));

            await API.graphql(
                graphqlOperation(createUserWorkoutHistory, {
                    input: {
                        progress: 'COMPLETED',
                        userWorkoutHistoryLastExerciseId: exercise.id,
                        type:"Workout",
                        description: workout.workout.title,
                        exerciseCount: allexercises.length,
                        userWorkoutHistoryUserId: authUser.attributes.sub,
                        userWorkoutHistoryWorkoutId: exercise.workoutExercisesId
                    }
                }
                ));

        } catch (error) {
            console.log(error);
            navigation.navigate("SignIn")
        }
    } 
    async function fetchVideoProps(exercise) {
        const videoThumbnail = await Storage.get(exercise?.thumbnailUrl);
        setThumbnail(videoThumbnail);
    }

    React.useEffect(() => {
        let exercise  = videoIndex.exercise;
         

        // saveUserHistory(exercise);
        fetchVideoProps(exercise);
        setExerciseItem(exercise);
    }, []);


    React.useEffect(() => {
         
    
      }, []);


    useFocusEffect(
        useCallback(() => {
            const onHardwareBack = () => {
                if (fullScreen) {
                    setFullScreen(false);
                    return true;
                } else if (descModal || commentModal) {
                    setCommentModal(false);
                    setDescModal(false);
                    return;
                } else {
                    props.navigation.dispatch(
                        StackActions.replace('Main', { screen: 'Home' }),
                    );
                }
            };
            BackHandler.addEventListener('hardwareBackPress', onHardwareBack);
            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onHardwareBack);
        }, [fullScreen, props.navigation, descModal, commentModal]),
    );

    const buffering = event => {
        setIsLoading(event?.isBuffering ? true : false);
    };

    useFocusEffect(
        useCallback(() => {
            const onBlur = () => {
                setPause(true);
            };
            props.navigation.addListener('blur', onBlur);
            return () => props.navigation.removeListener('blur', onBlur);
        }, [props.navigation]),
    );

    const videoLoading = payload => {
        setIsLoading(false);
        setVideoTime(payload?.duration);
        if (payload?.duration > 60) {
            if (payload?.duration / 60 > 60) {
                setVideoDuration(`${(payload?.duration / 3600).toFixed()}:00:00`);
                setVideoLength('hour');
                return;
            } else {
                setVideoDuration(`${(payload?.duration / 60).toFixed()}:00`);
                setVideoLength('minutes');
                return;
            }
        } else {
            setVideoDuration(payload?.duration);
            setVideoLength('seconds');
            return false;
        }
    };

    const VideoProgress = () => {
        return (
            <View style={styles.time}>
                <Text
                    style={
                        styles.timeText
                    }>{`${currentProgress} /1 ${videoDuration}`}</Text>
            </View>
        );
    };

    const progressHandler = payload => {
        setProgressBar(parseFloat(payload?.currentTime) / parseFloat(videoTime));
        if (videoLength === 'hour') {
            setCurrentProgress(payload?.currentTime);
            return;
        } else if (videoLength === 'minutes') {
            setCurrentProgress(
                new Date(payload?.currentTime * 1000).toISOString().substr(14, 5),
            );
        } else {
            setCurrentProgress(
                new Date(payload?.currentTime * 1000).toISOString().substr(17, 2),
            );
        }
    };

    const renderedItems = ({ item, index }) => {
        return (
            <Pressable
                onPress={() => {
                    console.log(item.description);
                    props.navigation.navigate('Player', {
                       
                        exercise: item,
                        allexercises : allexercises
                    })}
                }
                style={styles.autoPlayContainer}>
                <Image
                    source={{
                        uri: item?.s3Image,
                    }}
                    resizeMode="cover"
                    style={styles.thumbnail}
                />
                <View style={styles.detailContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.listVideoTitle} numberOfLines={2}>
                            {item?.title}
                        </Text>
                        <Text style={styles.videoDescription} numberOfLines={2}>
                            {`${item?.views} views . ${item?.uploaded === 'just now'
                                ? 'just now'
                                : `${item?.createdAt} ago`
                                }`}
                        </Text>
                    </View>
                </View>
            </Pressable>
            
        );
    };



    const HeaderComp = () => {
        return (
            <View>
                <View style={styles.descHead}>
                    <Text style={styles.heading} numberOfLines={2}>
                    {exerciseItem?.title}
                    </Text>
                    <Pressable onPress={() => setDescModal(true)}>
                        <Icon name="chevron-down-outline" color="#040201" size={24} />
                    </Pressable>
                </View>
 
                <View style={styles.optionsContainer}>
                    <Pressable
                        style={styles.option}
                        onPress={() =>
                            setVideoDetail({ ...videoDetail, liked: !videoDetail.liked })
                        }>
                        <Icon
                            name={videoDetail?.liked ? 'heart' : 'heart-outline'}
                            color={videoDetail?.liked ? '#F25252' : '"#040201"'}
                            size={30}
                        />
                        <Text style={styles.optionCounter}>
                            {numberFormat(data?.likes)}
                        </Text>
                    </Pressable>
                    <Pressable
                        style={styles.option}
                        onPress={() =>
                            setVideoDetail({ ...videoDetail, disliked: !videoDetail.disliked })
                        }>
                        <Icon
                            name={
                                videoDetail?.disliked
                                    ? 'heart-dislike'
                                    : 'heart-dislike-outline'
                            }
                            color="#040201"
                            size={30}
                        />
                        <Text style={styles.optionCounter}>{data?.dislikes}</Text>
                    </Pressable>
                    <Pressable style={styles.option}>
                        <Icon name="share-social-outline" color="#040201" size={30} />
                        <Text style={styles.optionCounter}>Share</Text>
                    </Pressable>
                    <Pressable
                        style={styles.option}
                        onPress={() => setDownloadModal(true)}>
                        <Icon name="download-outline" color="#040201" size={30} />
                        <Text style={styles.optionCounter}>Download</Text>
                    </Pressable>
                    <Pressable
                        style={styles.option}
                        onPress={() =>
                            setVideoDetail({ ...videoDetail, saved: !videoDetail.saved })
                        }>
                        <Icon
                            name={videoDetail?.saved ? 'bookmark' : 'bookmark-outline'}
                            color={videoDetail?.saved ? '#04abf2' : '#040201'}
                            size={30}
                        />
                        <Text style={styles.optionCounter}>Save</Text>
                    </Pressable>
                </View>
                <View style={styles.seperator} />
                <View style={styles.channelContainer}>
                    <TouchableOpacity
                        style={styles.channel}
                        onPress={() =>
                            props.navigation.navigate('ChannelScreen', {
                                channelName: data?.channel,
                                channelIndex: data?.channelId,
                            })
                        }>
                        <Image
                            source={{
                                uri: exerciseItem?.s3Image  ,
                            }}
                            style={styles.channelAvtar}
                        />
                        <Text style={styles.channelName}>{data?.channel}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.followButton}>
                        <Text style={styles.followText}>Follow</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.seperator} />
                <Pressable
                    style={styles.commentContainer}
                    onPress={() => setCommentModal(true)}>
                    <View style={styles.descHead}>
                        <Text style={styles.commentText}>
                            Description
                        </Text>
                        <Icon name="ellipsis-horizontal" color="#040201" size={24} />
                    </View>
                    <View style={styles.commentAccount}>
                       
                        <Text style={styles.userCommentText}>
                            {exerciseItem?.description}
                        </Text>
                    </View>
                </Pressable>
                <View style={styles.seperator} />
            </View>
        );
    };

    const AutoFooter = () => {
        return <View />;
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={fullScreen} />
            <Pressable
                style={!fullScreen ? styles.player : styles.fullScreenVideo}
                onPress={() => setShowControls(!showControls)}>
                <Video
                    source={{
                        uri: videoUrl
                    }}
                    style={styles.backgroundVideo}
                    onBuffer={e => buffering(e)}
                    bufferConfig={bufferConfig}
                    resizeMode={fullScreen ? 'cover' : 'contain'}
                    paused={paused}
                    controls={true}
                    playInBackground={false}
                    onLoad={payload => videoLoading(payload)}
                    fullscreen={fullScreen}
                    onProgress={e => progressHandler(e)}
                    onEnd={e => {
                        saveUserHistoryCompleted(videoIndex.exercise)
                    }}
                    fullscreenOrientation="landscape"
                />
            </Pressable>
            {/* {showControls && (
                <Pressable
                    style={
                        !fullScreen
                            ? styles.controller
                            : { ...styles.controller, width: '100%', height: '100%' }
                    }
                    onPress={() => {
                        console.log("Presses");
                        setShowControls(!showControls)
                    }
                    }>
                    <TouchableOpacity
                        style={styles.fullScreen}
                        onPress={() => setFullScreen(!fullScreen)}>
                        <Icon name={'scan-outline'} color="#fff" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            !fullScreen
                                ? styles.playButton
                                : { alignSelf: 'center', top: '39%' }
                        }
                        onPress={() => setPause(!paused)}>
                        <Icon
                            name={paused ? 'play-outline' : 'pause-outline'}
                            color="#fff"
                            size={45}
                        />
                    </TouchableOpacity>
                    <View style={styles.videoProgress}>{VideoProgress()}</View>
                </Pressable>
            )} */}
            <ProgressView
                style={styles.progressBar}
                progressTintColor="#fff"
                trackTintColor="#fff"
                progress={progressBar}
            />
            {isLoading && (
                <ActivityIndicator
                    color="#fff"
                    size="large"
                    style={styles.controller}
                />
            )}
            {!fullScreen && (
                <VirtualizedList
                    data={allexercises}
                    getItemCount={() => allexercises.length}
                    getItem={(item, index) => item[index]}
                    contentContainerStyle={styles.descContainer}
                    ListFooterComponent={AutoFooter}
                    ListFooterComponentStyle={{ height: 15 }}
                    ListHeaderComponent={HeaderComp}
                    renderItem={renderedItems}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
            <Modal
                isVisible={commentModal}
                style={styles.modal}
                hasBackdrop={false}
                coverScreen={false}>
                <View style={styles.modalView}>
                    <View style={styles.modalHead}>
                        <Text style={styles.modalHeading}>
                            Comments{' '}
                            {data?.totalComments && (
                                <Text style={styles.commentCount}>{data?.totalComments}</Text>
                            )}
                        </Text>
                        <TouchableOpacity
                            style={styles.modalClose}
                            onPress={() => setCommentModal(false)}>
                            <Icon name="close-outline" size={28} color="#040201" />
                        </TouchableOpacity>
                    </View>
                    <Pressable
                        style={styles.commentBox}
                        onPress={() => setTextInputModal(true)}>
                       
                        <Text style={styles.inputCommentText}>Write your comment</Text>
                    </Pressable>
                    <View style={styles.seperator} />
                    <VirtualizedList
                        data={CommentsData}
                        getItemCount={() => CommentsData.length}
                        getItem={(item, index) => item[index]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.userCommentContainer}>
                                    <Image
                                        source={{ uri: item?.profileAvtar }}
                                        style={styles.channelAvtar}
                                        resizeMode="cover"
                                    />
                                    <View>
                                        <Text style={styles.userCommentText}>
                                            {item?.username} .{' '}
                                            <Text style={styles.commentCount}>2 days ago</Text>
                                        </Text>
                                        <Text style={styles.commentStyle} numberOfLines={1}>
                                            {item?.comment}
                                        </Text>
                                        <View style={styles.inlineOptionContainer}>
                                            <View style={styles.inlineOption}>
                                                <Icon name="heart-outline" color="#040201" size={22} />
                                                <Text style={styles.inlineOptionCounter}>
                                                    {item?.likes}
                                                </Text>
                                            </View>
                                            <Text style={styles.dot}>.</Text>
                                            <View style={styles.inlineOption}>
                                                <Icon
                                                    name="heart-dislike-outline"
                                                    color="#040201"
                                                    size={22}
                                                />
                                                <Text style={styles.inlineOptionCounter}>
                                                    {item?.dislikes}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            );
                        }}
                        ItemSeparatorComponent={() => <View style={styles.seperator} />}
                    />
                </View>
                <Modal
                    style={styles.modal}
                    isVisible={textInputModal}
                    onBackdropPress={() => setTextInputModal(false)}
                    onBackButtonPress={() => setTextInputModal(false)}>
                    <View style={styles.textInputContainer}>
                     
                        <TextInput
                            style={styles.input}
                            placeholder="Write your comment"
                            placeholdercolor="#9c9c9c"
                            onChangeText={val => setCommentText(val)}
                            autoCompleteType="off"
                            autoCorrect={false}
                            multiline
                        />
                        {commentText.length !== 0 && (
                            <Icon name="paper-plane" size={28} color="#04abf2" />
                        )}
                    </View>
                </Modal>
            </Modal>
            <Modal
                isVisible={descModal}
                style={styles.modal}
                hasBackdrop={false}
                coverScreen={false}
                propagateSwipe={true}
                scrollOffset={1}
                scrollTo={() => { }}
                useNativeDriverForBackdrop
                swipeDirection="down"
                onSwipeComplete={() => setDescModal(false)}
                onBackButtonPress={() => setDescModal(false)}>
                <View style={styles.descModalView}>
                    <View style={styles.descModalHead}>
                        <View style={styles.modalLine} />
                        <View style={styles.descHeader}>
                            <Text style={styles.modalHeading}>Description</Text>
                            <TouchableOpacity
                                style={styles.modalClose}
                                onPress={() => setDescModal(false)}>
                                <Icon name="close-outline" size={28} color="#040201" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView
                        style={{ flex: 1 }}
                        contentContainerStyle={{ flexGrow: 1, margin: 10 }}>
                        <Text style={styles.videoTitle}>{data?.title}</Text>
                        <View style={styles.optionsContainer}>
                            <View style={styles.option}>
                                <Text style={styles.modalCounter}>
                                    {numberFormat(data?.likes)}
                                </Text>
                                <Text style={styles.modalOptionDesc}>Likes</Text>
                            </View>
                            <View style={styles.option}>
                                <Text style={styles.modalCounter}>
                                    {"1"}
                                </Text>
                                <Text style={styles.modalOptionDesc}>Views</Text>
                            </View>
                            <View style={styles.option}>
                                <Text style={styles.modalCounter}>
                                    {new Date(data?.uploadedDate).getFullYear()}
                                </Text>
                                <Text style={styles.modalOptionDesc}>
                                    {`${getMonthString(
                                        new Date(data?.uploadedDate).getUTCMonth(),
                                    )} ${new Date(data?.uploadedDate).getDate()}`}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.seperator} />
                        <Text style={styles.descContent}>{exerciseItem?.description}</Text>
                    </ScrollView>
                </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    player: {
        height: '35%',
    },
    backgroundVideo: {
        height: '100%',
        width: '100%',
        flex: 1,
        top: 0,
        backgroundColor: '#000',
    },
    controller: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '35%',
    },
    playButton: {
        alignSelf: 'center',
        top: '25%',
    },
    fullScreenVideo: {
        flex: 1,
        width: '100%',
    },
    fullScreen: {
        alignSelf: 'flex-end',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    heading: {
        ...FONTS.h1,
        letterSpacing: 0.2,
    },
    descContainer: { marginVertical: 10 },
    descHead: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    time: {
        position: 'absolute',
    },
    timeText: {
        color: '#fff',
    },
    videoProgress: {
        position: 'absolute',
        bottom: '8%',
    },
    progressBar: {
        position: 'absolute',
        top: '33.5%',
    },
    videoDesc: {
        ...FONTS.h3,
        letterSpacing: 0.2,
        color: '#9c9c9c',
        marginHorizontal: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
    },
    option: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    optionCounter: {
        ...FONTS.h5,
        color: '#040201',
    },
    seperator: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#dfdfdf',
        width: '100%',
    },
    channelContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    channelAvtar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    channelName: {
        ...FONTS.h5,
        marginHorizontal: 10,
    },
    followButton: {
        backgroundColor: '#04abf2',
        width: '25%',
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 18,
    },
    followText: {
        ...FONTS.h5,
        color: '#fff',
        letterSpacing: 0.1,
    },
    channel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    commentContainer: {
        marginVertical: 6,
        marginHorizontal: 10,
    },
    commentText: {
        ...FONTS.h5,
        color: '#040201',
    },
    commentCount: {
        color: 'rgba(4, 2, 1, 0.7)',
    },
    commentAccount: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    commentAvtar: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
    },
    userCommentText: {
        marginHorizontal: 10,
        ...FONTS.h5,
        color: '#040201',
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
        height: '65%',
    },
    modalView: {
        backgroundColor: '#fff',
        height: '65%',
    },
    modalHead: {
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
    modalHeading: {
        ...FONTS.h5,
    },
    modalClose: {
        width: 30,
        height: 30,
        borderRadius: 30,
    },
    commentBox: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
    },
    inputCommentText: {
        ...FONTS.h5,
        color: '#9c9c9c',
        marginLeft: 10,
    },
    textInputContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
    },
    input: {
        width: '78%',
        ...FONTS.h5,
        color: '#040201',
        marginHorizontal: 10,
    },
    userCommentContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    commentStyle: {
        ...FONTS.h5,
        marginLeft: 10,
    },
    inlineOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
    },
    inlineOptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inlineOptionCounter: {
        ...FONTS.h5,
        color: '#040201',
    },
    dot: {
        ...FONTS.h5,
        color: '#040201',
        textAlign: 'center',
        textAlignVertical: 'top',
    },
    descModalView: {
        backgroundColor: '#fff',
        height: '65%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    modalLine: {
        borderBottomWidth: 4,
        borderBottomColor: '#040201',
        width: '10%',
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    descModalHead: {
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 8,
        paddingBottom: 10,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    descHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    videoTitle: {
        color: '#040404',
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
    },
    modalCounter: {
        fontFamily: 'Roboto-Black',
        color: '#030303',
        fontSize: 22,
    },
    modalOptionDesc: {
        color: '#696969',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
    },
    descContent: {
        color: '#151515',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        marginVertical: 10,
    },
    thumbnail: {
        width: '35%',
        height: heightPercentageToDP('10%'),
        borderRadius: 8,
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        marginHorizontal: 10,
        alignItems: 'center',
        width: '48%',
    },
    listVideoTitle: {
        color: '#282828',
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        letterSpacing: 0.1,
        width: '100%',
    },
    titleContainer: {
        flexDirection: 'column',
        width: '80%',
    },
    videoDescription: {
        color: '#9c9c9c',
        fontFamily: 'Roboto-Medium',
        fontSize: 12,
    },
    autoPlayContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 8,
        width: '100%',
        alignItems: 'flex-start',
    },
    downloadHeading: {
        ...FONTS.h1,
 
        textAlign: 'center',
    },
    qualityContainer: {
        marginHorizontal: 10,
        marginVertical: 8,
    },
    qualityText: {
        ...FONTS.h1,
        marginVertical: 4,
    },
});

export default Player;
