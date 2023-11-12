import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import { COLORS, SIZES } from '../constants';

const PostListItem = ({post}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('PostDetail', {id: post.id});
  };
  return (
    <Pressable onPress={onPress} style={{
        marginBottom: SIZES.radius,
        padding: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2
    }}>
      <View style={styles.userRow}>
        <Image source={{uri: post.user.image}} style={styles.userImage} />
        <Text style={styles.userName}>
          {post.user.name} in {post.category}
        </Text>
      </View>

      <View style={styles.contentRow}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.caption}>{post.caption}</Text>
          <View style={styles.footerRow}>
            <Text style={styles.footerText}>
              {post.createdAt} - {post.readMinutes} min read
            </Text>
            {/* <Feather name="bookmark" color={'white'} size={11} /> */}
          </View>
        </View>
        <Image source={{uri: post.image}} style={styles.postImage} />
      </View>
    </Pressable>
  );
};

export default PostListItem;

const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
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
      color: COLORS.darkGray,
    },
    contentRow: {
      flexDirection: 'row',
      alignItems: 'center',
    
      borderColor: COLORS.darkGray,
      paddingBottom: 10,
    },
    mainContent: {
      flex: 1,
    },
    title: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    caption: {
      color: COLORS.darkGray,
    },
    footerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    footerText: {
      color: 'black',
      marginTop: 10,
    },
    postImage: {
      width: 70,
      aspectRatio: 1,
      marginLeft: 10,
    },
  });
  
