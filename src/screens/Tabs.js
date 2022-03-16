
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconsetting from 'react-native-vector-icons/Feather';

import Icon01 from 'react-native-vector-icons/Fontisto';

import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();
import Homescreen from "../screens/HomeScreen" 
 
import { heightPercentageToDP } from 'react-native-responsive-screen';  
import Feedscreen from './Feedscreen';
import Urlscreen from './Urlscreen';
import Feedsman from '../components/Feedsman';
import Accountsmain from './Accountsmain';
import products from '../components/Products/Products'
import Myproducts from './Myproducts';
import HomeStack from './HomeStack';
export default function Tab({navigation}) {
  return (
    <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { position: 'absolute',backgroundColor:"#DBA84E",padding:5, height:heightPercentageToDP('8%'),borderTopRightRadius:30,borderTopLeftRadius:30}
    }}
    tabBarOptions={{
      showLabel: false,
      keyboardHidesTabBar: true,

       
  }}>
      <Tabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarVisible: false,
        }}
      />
      
      <Tabs.Screen
        name="Feed"
        component={Myproducts}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon01
                name="fire"
                size={25}
                style={{color: focused ? '#30d7e9' : 'white'}}
              />
            );
          },
        }}
      />

<Tabs.Screen
        name="Url"
        component={Urlscreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon01
                name="navigate"
                size={25}
                style={{color: focused ? '#30d7e9' : 'white'}}
              />
            );
          },
        }}
      />

<Tabs.Screen
        name="Accounts"
        component={Accountsmain}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon2
                name="account"
                size={25}
                style={{color: focused ? '#30d7e9' : 'white'}}
              />
            );
          },
        }}
      />
      
         
    </Tabs.Navigator>
  );
}

