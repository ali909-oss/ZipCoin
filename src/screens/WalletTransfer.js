import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WalletToWallet from "../components/Wtw";
import PeerToPeer from "../components/Ptp";



const WalletTransfer = () => {
    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();
    



   

   
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                    <TouchableOpacity onPress={() => navigation.navigate("WalletScreen")}>
                        <AntDesign name="arrowleft" size={30} color="#fff"
                            style={{ marginLeft: wp('2%') }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.texta}>Wallet Transfer</Text>
                </View>
            </View>
            <Tab.Navigator
            swipeEnabled={false}




tabBarOptions={{
    
 
    

                indicatorStyle: {
                    backgroundColor: 'transparent'
                 },
tabStyle: {
marginTop:hp('1%')
},
activeTintColor: '#fff',
activeBackgroundColor:'black',
         


pressColor:'#fff',
labelStyle: { textTransform: "none",fontSize: 15,fontWeight:'bold',borderColor:Colors.DEFAULT_Color,borderWidth:1,width:wp('52%'),height:hp('6%'),borderRadius:20,fontFamily:Fonts.POPPINS_MEDIUM,padding:hp('1%'),backgroundColor:Colors.DEFAULT_Color},
style: { backgroundColor: '#f3f3f3',shadowOpacity: 0,
elevation: 0,width:wp('90%'),marginLeft:wp('5%') ,},
}}>

<Tab.Screen name="WalletToWallet(W2W)" component={WalletToWallet} />
<Tab.Screen name="PeerToPeer(P2P)" component={PeerToPeer} />





</Tab.Navigator>  
            </View>
    )}
export default WalletTransfer;
const styles=StyleSheet.create({
    header: {
        backgroundColor: Colors.DEFAULT_Color,
        height: hp('8%'),
        width: wp('100%'),
        
    },
    container: {
        height: hp('98%'),
        width: wp('100%'),
    },
    texta: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: '#fff',
        marginLeft: wp('25%')
    },
    textb: {
        fontSize: 17,
        fontFamily: Fonts.POPPINS_SEMI_BOLD
    },

    drop: {
        width: wp('90%'),
        zIndex: 2,
        height: hp('7%'),
        borderWidth: 0.5,
        borderRadius: 10,
        elevation: 2,





    },

})