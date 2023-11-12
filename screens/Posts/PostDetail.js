import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
 
import { useRoute } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Storage, API, graphqlOperation } from "aws-amplify";
import { getPost } from '../../src/graphql/queries';
import { COLORS, SIZES } from '../../constants';
import { Paywall, Loader } from '../../components';
const PostDetail = () => {
    const [paywallShown, setPaywallShown] = useState(true);
    const [post, setPost] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const route = useRoute();
    console.log(route.params);
    const postId = route?.params?.id;

    React.useEffect(() => {
        let isApiSubscribed = true;
  
        const fetchPost = async (postId) => {
            setLoading(true);


            let filter = {
                id: {
                    eq: postId,
                },
            };

            const post = await API.graphql({
                query: getPost,
                variables: { id: postId },
            });

            if (isApiSubscribed) {
                setPost(post.data.getPost);
                setLoading(false);

            }
        };

        fetchPost(postId);
        return () => {
            isApiSubscribed = false;
        };
    }, []);



    return (
        <View>


            <>{loading ? (
                <>
                    <View style={
                        {
                            flex: 1,
                            height: SIZES.loadingIndicatorHeight, 
                            padding: SIZES.padding,
                            alignSelf: 'center',
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

                        <Loader  />
                    </View>

                </>
            ) : (
                <>

                    <ScrollView style={styles.container} scrollEnabled={!paywallShown}>


                        <View style={styles.userRow}>
                            <Image source={{ uri: post.user?.image }} style={styles.userImage} />
                            <Text style={styles.username}>
                                {post.user?.name} in {post.category} - {post.createdAt}
                            </Text>
                        </View>

                        <Text style={styles.title}>{post.title}</Text>
                        <Text style={styles.caption}>{post.caption}</Text>

                        <Image source={{ uri: post.image }} style={styles.image} />
                        <Text style={styles.contentText}>{post.content}</Text>
                    </ScrollView>
                    {paywallShown && <Paywall />}
                </>
            )}
            </>
        </View>

    );
};

export default PostDetail;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: COLORS.white,
        height: '100%'
    },
    errorText: {
        color: COLORS.darkGray,
        margin: 20,
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        width: 30,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10,
    },
    userName: {
        color: 'black',
    },
    title: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    caption: {
        color: COLORS.darkGray2,
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 100,
        marginVertical: 10,
    },
    contentText: {
        marginTop: 10,
        color: COLORS.darkGray,
        lineHeight: 24,
        letterSpacing: 1,
        fontSize: 16,
    },
});
