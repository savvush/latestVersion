import React from 'react';
import { StyleSheet, View,  Image, ImageBackground,Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBarAdvancedButton } from './TabBar/TabBarAdvancedButton';
import { Diet, Home, Workout } from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import { IS_IPHONE_X } from '../utils/Utils';
import { COLORS, SIZES, icons } from '../constants';
import { Header } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BottomBar = createBottomTabNavigator();


function LogoTitle({children}) {
    console.log(children);
    const navigation = useNavigation();
     return ( 
        <View style={styles.header}>
        <Icon name='person-circle' size={38}  onPress={()=>navigation.openDrawer()} style={styles.icon} />
        <Text style={styles.headerText}>{children}</Text>
      </View>

    );
  }

 
const TabScreen = ({ barColor }) => (

    <BottomBar.Navigator
        tabBar={(props) => (
            <View style={styles.navigatorContainer}>
                <BottomTabBar
                    {...props}
                />
                {IS_IPHONE_X && (
                    <View style={[styles.xFillLine, {
                        backgroundColor: barColor
                    }]} />
                )}
            </View>
        )}       
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.VIEW.primary
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: (props) => <LogoTitle {...props} /> 
          }}
    >
        <BottomBar.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon
                        name="home"
                        size={24}
                        color={color}
                    />
                )
            }}
        />
        <BottomBar.Screen
            name="Diet"
            component={Diet}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon
                        name="receipt-outline"
                        size={24}
                        color={color}
                    />
                )
            }}
        />
        <BottomBar.Screen
            name="Workouts"
            component={Workout}
            options={{
                tabBarButton: (props) => (
                    <TabBarAdvancedButton
                        bgColor={barColor}
                        {...props}
                    />
                )
            }}
        />
        <BottomBar.Screen
            name="Programs"
            component={Home}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon
                        name="calendar-outline"
                        size={24}
                        color={color}
                    />
                )
            }}
        />
        <BottomBar.Screen
            name="News"
            component={Home}

            options={{
                tabBarIcon: ({ color }) => (
                    <Icon
                        name="mail-unread-outline"
                        size={24}
                        color={color}
                    />
                )
            }}
        />
    </BottomBar.Navigator>
);


export default TabScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigatorContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    navigator: {
        borderTopWidth: 0,
        backgroundColor: 'transparent',
        elevation: 30
    },
    xFillLine: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 34
    },
   
        header: {
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-around',
        },
        headerText: {
          fontWeight: '400',
          fontSize: 20,
           
          
        },
        icon: {
          position: 'absolute',
          left:2,
          bottom:10
        },
        headerTitle: {
          flexDirection: 'row'
        },
        headerImage: {
          width: 26,
          height: 26,
          marginHorizontal: 10
        },
      
});