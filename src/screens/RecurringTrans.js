import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image,TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import Transactions from "../components/Transactions";
import {useNavigation} from '@react-navigation/native';
import TransactionList from "../components/TransactionList";



const Recurring = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row',marginTop:hp('2%')}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Transaction")}>
                <AntDesign name="arrowleft" size={30} color="#fff"
                style={{marginLeft:wp('2%')}}
                />
                </TouchableOpacity>
            <Text style={styles.texta}>Recurring Transactions</Text>
            </View>
            </View>
            <View style={{marginTop:hp('2%')}}>
                <Text style={styles.textb}>All Transaction</Text>
               
            </View>
            <View style={{marginTop:hp('2%')}}>
                <TransactionList/>
            </View>
            </View>
    )}
export default Recurring;
const styles=StyleSheet.create({
    header:{
        backgroundColor:Colors.DEFAULT_Color,
        height:hp('8%'),
        width:wp('100%'),
    },
    container:{
        height:hp('100%'),
        width:wp('100%'),
        backgroundColor:'#fff'
    },
    texta:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:'#fff',
        marginLeft:wp('15%')
    },
    textb:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:Colors.DEFAULT_Color,
        marginLeft:wp('5%')

    },

})