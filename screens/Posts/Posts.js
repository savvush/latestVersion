import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text, FlatList } from 'react-native';
import { PostListItem, Loader } from '../../components';
import { listPosts } from "../../src/graphql/queries";
import { StyleSheet } from 'react-native';
import { Storage, API, graphqlOperation } from "aws-amplify";
import { COLORS, SIZES } from '../../constants';

const Posts = () => {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);


    React.useEffect(() => {
        let isApiSubscribed = true;
        setLoading(true);


        const fetchPosts = async () => {
            const allPosts = await API.graphql({ query: listPosts });
            const posts = await Promise.all(
                allPosts.data.listPosts.items.map(async (post) => {
                    post.image = await Storage.get(post.image);
                    return post;
                })
            );
            if (isApiSubscribed) {
                setPosts(posts);
                setLoading(false);

            }
        };

        fetchPosts();

        return () => {
            isApiSubscribed = false;
        };
    }, []);



    return (
        <View style={styles.page}>
            <>{loading ? (
                <>
                    <View style={
                        {
                            flex: 1,
                            height: SIZES.loadingIndicatorHeight,
                            padding: 30,
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

                        <Loader />
                    </View>

                </>
            ) : (
                <>
                    <View style={styles.titleRow}>
                        {/* <Feather name="bell" color={'white'} size={24} /> */}
                    </View>

                    <FlatList
                        data={posts}
                        renderItem={({ item }) => <PostListItem post={item} />}
                    />

                </>
            )}
            </>

        </View>
    );
};

export default Posts;

const styles = StyleSheet.create({
    page: {
        backgroundColor: COLORS.white,
        padding: SIZES.padding,
        flex: 1,
    },
    title: {
        color: COLORS.darkGray2,
        fontSize: 30,
        fontWeight: 'bold',
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
