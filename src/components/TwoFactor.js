import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Entypo from "react-native-vector-icons/dist/Entypo";

const Data=[
    {
        qrcode: require("../assets/images/qrcode.png"),

    }
]
const TwoFactor = () =>{
    const [code,setCode]=useState("dw87687id6876");
    return(
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.container}>
            <Text style={styles.texta}>Scan this QR code with your Google Authenticator App. Alternatively, you can use the code: <Text style={styles.textb}>{code} </Text> </Text>
         <View style={{marginTop:hp('1%'),justifyContent:'center',alignItems:'center'}}>
         <Image style={styles.qrcode} source={Data && Data[0].qrcode} />

         </View>
         <View>
             <Text style={styles.textaa}>Enter the pin from Google Authenticator app:</Text>
         </View>
         <View>
             <Text style={styles.textaa}>Authenticator Code</Text>
             <TextInput
                style={styles.input}
                placeholder=""
                fontSize={18}
                padding={wp('3%')}
                />
         </View>
         <TouchableOpacity>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>Enable 2FA</Text>
            </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
export default TwoFactor;

const styles=StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('65%'),
        backgroundColor:"#fff"
    },
    texta:{
        fontSize:15,
        fontFamily:Fonts.POPPINS_REGULAR,
        color:'black',
        padding:wp('1%'),
        marginLeft:wp('3%')
    },
    textb:{
        fontSize:20,
        color:'#94bc54',
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    textaa:{
        fontSize:15,
        fontFamily:Fonts.POPPINS_REGULAR,
        color:'black',
        padding:wp('2%'),
        marginLeft:wp('3%')
    },
    qrcode:{
        width:wp('50%'),
        height:hp('25%')
    },
    input:{
        width:wp('90%'),
        height:hp('7%'),
        borderRadius:10,
        elevation:2,
        backgroundColor:'#F9F9F9',
        marginLeft:wp('5%')

    },
    btn2:{
        width:wp('90%'),
        height:hp('7%'),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:Colors.DEFAULT_Color,
        backgroundColor:Colors.DEFAULT_Color,
        marginTop:hp('2%'),
        marginLeft:wp('5%')

    },
   
    btntextb:{
        fontSize:20,
        color:"#fff",
        fontFamily:Fonts.POPPINS_MEDIUM

    },
})