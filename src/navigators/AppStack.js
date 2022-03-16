import React from 'react';
import { width ,isLargeScreen, View,style,StyleSheet,Button, Text,Image} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from '../screens/HomeStack';

import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Navigators from '../navigators/index';


import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import Send from '../screens/Send';
import KycStatus from '../screens/KycStatus';
import Topup from '../screens/Topup';
import Wallet from '../screens/Wallet';
import TransactionScreen from '../screens/TransactionScreen';
import BeneficiaryScreen from '../screens/BeneficiaryScreen';
import MyReferral from '../screens/MyReferrals';
import CustomerScreen from '../screens/CustomerScreen';
import Agent from '../screens/Agent';
import Profile from '../screens/Profile';
import KycStack from '../screens/KycProcessStack';
import { Colors } from '../contants';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const Drawer = createDrawerNavigator();
 

const Appstack = () => {
  return (
    

    <Drawer.Navigator drawerContent ={props => <CustomDrawer {...props}/>}
    drawerStyle={{
       width:widthPercentageToDP('100%'),
      }}
    //   screenOptions={{
    //     headerShown: true

    //   }}
    drawerContentOptions={{
      activeTintColor:Colors.DEFAULT_Color,
      inactiveTintColor:Colors.DEFAULT_Color,

      
      labelStyle:{
         marginLeft:wp('1%'),
         fontSize:16,

        
      }
    }}
    >
     <Drawer.Screen
        name = "Dashboard"
        component={Navigators}
        
        options={{
          drawerIcon: () => (
             <View style={styles.back}>
             <Entypo
                name="bar-graph"
                size={18}
                color={'#fff'}
             />
             </View>
          ),
       }}
        
        />
         <Drawer.Screen
        name = "Send Money"
        component={Send}
        options={{
          drawerIcon: () => (
             
            <View style={styles.back}>
            <Feather
               name="arrow-up-circle"
               size={22}
               color={'#fff'}
            />
            </View>
          ),
       }}
        
        />
         <Drawer.Screen
        name = "KYC Status"
        component={KycStatus}
        options={{
          drawerIcon: () => (
             
            <View style={styles.back}>
            <Feather
               name="file-minus"
               size={20}
               color={'#fff'}
            />
            </View>
          ),
       }}
        
        />
        <Drawer.Screen
        name = "Airtime Top Up"
        component={Topup}
        options={{
          drawerIcon: () => (
             
            <View style={styles.back}>
            <FontAwesome5
               name="plus-circle"
               size={20}
               color={'#fff'}
            />
            </View>
          ),
       }}
        
        />
        <Drawer.Screen
        name = "Wallets"
        component={Wallet}
        options={{
          drawerIcon: () => (
             
            <View style={styles.back}>
            <FontAwesome5
               name="wallet"
               size={20}
               color={'#fff'}
            />
            </View>
          ),
       }}
        
        />
        <Drawer.Screen
        name = "Transactions"
        component={TransactionScreen}
        options={{
          drawerIcon: () => (
             
            <View style={styles.back}>
            <Ionicons
               name="time"
               size={22}
               color={'#fff'}
            />
            </View>
          ),
       }}
        
        />
         <Drawer.Screen
        name = "Beneficiaries"
        component={BeneficiaryScreen}
        options={{
          drawerIcon: () => (
             
            <View style={styles.back}>
           <Image source={require('../assets/images/benif.png')} 
           style={styles.img}
           />
            </View>
          ),
       }}
        
        />
         <Drawer.Screen
        name = "Refer and Earn"
        component={MyReferral}
        options={{
          drawerIcon: () => (
             
            <View style={styles.back}>
           <Image source={require('../assets/images/dolrefer.png')} 
           style={styles.img1}
           />
           </View>
          ),
       }}
        
        />
         <Drawer.Screen
        name = "Agent"
        component={Agent}
        options={{
          drawerIcon: () => (
             
          
            <View style={styles.back}>
           <Image source={require('../assets/images/Account.png')} 
           style={styles.img1}
           />
           </View>
          ),
       }}
        
        />
        <Drawer.Screen
        name = "Customers"
        component={CustomerScreen}
        options={{
          drawerIcon: () => (
             
            <View style={styles.back}>
            <Image source={require('../assets/images/account-circle.png')} 
            style={styles.img1}
            />
            </View>
          ),
       }}
        
        />
         <Drawer.Screen
        name = "Profile"
        component={Profile}
        options={{
          drawerIcon: () => (
             
            <View style={styles.back}>
            <Image source={require('../assets/images/profilee.png')} 
            style={styles.img1}
            />
            </View>
          ),
       }}
        
        />
       
        
        
        
        
       
      
       
        
    </Drawer.Navigator>
    
    
  );
};

export default Appstack;
const styles=StyleSheet.create({
   back:{
      width:wp('10%'),
      height:hp('5%'),
      borderRadius:10,
      backgroundColor:'#4C5474',
      justifyContent:'center',
      alignItems:'center'
    },
    img:{
       width:wp('4%'),
       height:hp('2.5%')
    },
    img1:{
      width:wp('5%'),
      height:hp('2.5%')
   }
})
