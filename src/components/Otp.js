import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Entypo from "react-native-vector-icons/dist/Entypo";

const Data=[
    {
        phone:'+925678576',
        status:'Verified'

    }
]
const Otp =() =>{
    return(
        <View style={styles.container}>
            <View>
            {
                      Data.map((item, index) => {
                          return (
                              <View style={{flexDirection:'row',justifyContent:'space-around',padding:wp('2%')}}>
                                  <Text style={styles.texta}>Mobile Number</Text>
                                  <Text style={styles.texta}>{item.phone}</Text>
                                  <Text style={styles.textc}>({item.status})</Text>
                              </View>
                          )}
                      )
                          }
            </View>
        </View>
    )
}
export default Otp;

const styles=StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('70%'),
        backgroundColor:'#fff'
    },
    texta:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    textc:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:'#94bc54'
    }
})