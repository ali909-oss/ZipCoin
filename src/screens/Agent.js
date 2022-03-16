import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";

import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';


const Data = [
    {
        name: 'Kim Kebab',
    Id: '1776798',
        mobile: '+9275765764',
        wallet: '76788',
        email: 'abc@gmail.com',
        accountbal: '36',
        walletbel: '276',
        walletacc: '9876546789'
    }
]
const Agent = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                        <AntDesign name="arrowleft" size={30} color="#fff"
                            style={{ marginLeft: wp('2%') }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.texta}>Send Agent</Text>
                </View>
                



            </View>
            <View style={{marginTop:hp('2%'),marginLeft:wp('5%')}}>
                <Text style={styles.textc}>Enter user ID or user email or user mobile number</Text>
                </View>
                <View style={{marginTop:hp('2%')}}>
                <Searchbar
      placeholder="Search"
      style={{width:wp('90%'),marginLeft:wp('5%')}}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
            </View>
            <View style={{marginTop:hp('2%')}}>
            {
                Data.map((item, index) => {
                    return (
                        <View style={styles.main}>
                            <Text style={styles.textb}>User Details</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textaa}>Full Name</Text>
                                <Text style={styles.textaa}>{item.name}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textaa}>REM ID</Text>
                                <Text style={styles.textaa}>{item.Id}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textaa}>Mobile Number</Text>
                                <Text style={styles.textaa}>{item.mobile}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textaa}>Wallet Account</Text>
                                <Text style={styles.textaa}>{item.wallet}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textaa}>E-mail Address</Text>
                                <Text style={styles.textaa}>{item.email}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textaa}>Account Balance</Text>
                                <Text style={styles.textaa}>{item.accountbal} CAD</Text>
                            </View>
                            <Text style={styles.textb}>Agent details</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textaa}>Wallet Balance</Text>
                                <Text style={styles.textaa}>{item.walletbel} CAD</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textaa}>Wallet Account</Text>
                                <Text style={styles.textaa}>{item.walletacc}</Text>
                            </View>
                            
                        </View>
                    )
                })
            }
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>Add User</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>Send Money</Text>
            </View>
            </TouchableOpacity>
            </View>
            </View>
    )}
    export default Agent ;
const styles=StyleSheet.create({
    header: {
        backgroundColor: Colors.DEFAULT_Color,
        height: hp('8%'),
        width: wp('100%'),
    },
    container: {
        height: hp('95%'),
        width: wp('100%'),
        backgroundColor: '#fff'
    },
    texta: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: '#fff',
        marginLeft: wp('20%')
    },
    textb: {
        fontSize: 17,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_Color,
        marginTop:hp('2%'),
        marginLeft:wp('2%')

    },
    textc:{
        fontSize:13,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:Colors.DEFAULT_Color
    },
    textaa: {
        fontSize: 13,
        fontFamily: Fonts.POPPINS_MEDIUM,
        padding: hp('1%')
    },
    main:{
        borderRadius:10,
        padding:wp('2%'),
    
        borderWidth:0.5,
        width:wp('90%'),
        marginLeft:wp('5%')
    },
    btn2:{
        width:wp('40%'),
        height:hp('6%'),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:Colors.DEFAULT_Color,
        backgroundColor:Colors.DEFAULT_Color,
        marginTop:hp('3%'),

    },
   
    btntextb:{
        fontSize:18,
        color:"#fff"

    }
})