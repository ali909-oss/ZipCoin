import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { useNavigation } from '@react-navigation/native';

const Data = [
    {
        id:1,
        
        totalfee: '0',
        totalamount: '0',
        process:'Real Time'
    }
]


const PeerToPeer =() =>{
    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {
            label: 'Abc',
            value: 'Abc',
        },
        {
            label: 'xyz',
            value: 'xyz',

        }
    ]);
    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [items1, setItems1] = useState([
        {
            label: 'Abc',
            value: 'Abc',
        },
        {
            label: 'xyz',
            value: 'xyz',

        }
    ]);
    return(
        <View>
            <View style={{ marginLeft: wp('5%'), marginTop: hp('2%') }}>
            <Text style={styles.textb}>Source Wallet</Text>
            <DropDownPicker
                    placeholder="Please Select"

                    style={styles.drop}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />

            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('2%')}}>
                <Text style={styles.textb}>Amount</Text>
                <TextInput
                style={styles.input}
                placeholder=""
                />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:hp('2%')}}>
                <View style={{flexDirection:'row',marginLeft:wp('4%')}}>
                <AntDesign name="checkcircle" size={25} color={Colors.DEFAULT_Color}/>
                <Text style={{padding:3,fontSize:16,fontFamily:Fonts.POPPINS_REGULAR}}>Include Fee</Text>
            </View>
            <Text style={styles.textc}>Conversion Fx Rate:</Text>
            </View>
            <View style={{ marginLeft: wp('5%'), marginTop: hp('2%') }}>
            <Text style={styles.textb}>Destination Wallet</Text>
            <DropDownPicker
                    placeholder="Please Select"

                    style={styles.drop}
                    open={open1}
                    value={value1}
                    items={items1}
                    setOpen={setOpen1}
                    setValue={setValue1}
                    setItems={setItems1}
                />

            </View>
            <View style={{marginTop:hp('2%')}}>
                <Text style={styles.textd}>Summary :</Text>
                {
                Data.map((item, index) => {
                    return (
                        <View style={{ padding: wp('2%') }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textaa}>Total Fee</Text>
                                <Text style={styles.textaa}>{item.totalfee} CAD</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textaa}>Total Amount charged</Text>
                                <Text style={styles.textaa}>{item.totalamount} CAD</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textaa}>Processing time</Text>
                                <Text style={styles.textaa}>{item.process}</Text>
                            </View>
                            </View>
                    )
                            
                    })
                            }
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("Dashboard")}>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>Continue</Text>
            </View>
            </TouchableOpacity>
      </View>
    )
}
export default PeerToPeer;
const styles=StyleSheet.create({
    drop: {
        width: wp('90%'),
        zIndex: 1,
        height: hp('7%'),
        borderWidth: 0.5,
        borderRadius: 10,
        elevation: 2,


        overflow: 'hidden',



    },
    textb: {
        fontSize: 17,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
    },
    input:{
        width:wp('90%'),
        height:hp('7%'),
        borderRadius:10,
        elevation:1,
        backgroundColor:'#fff',
        borderWidth:0.5

    },
    textc:{
        fontSize:16,
        color:Colors.DEFAULT_Color,
        fontFamily:Fonts.POPPINS_REGULAR
    },
    textd:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_REGULAR,
        color:Colors.DEFAULT_Color,
        marginLeft:wp('3%')
    },
    textaa: {
        fontSize: 16,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        padding: hp('0.5%')
    },
    btn2:{
        width:wp('95%'),
        height:hp('7%'),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:Colors.DEFAULT_Color,
        backgroundColor:Colors.DEFAULT_Color,
        marginTop:hp('1%'),
        marginLeft:wp('3%')

    },
   
    btntextb:{
        fontSize:20,
        color:"#fff"

    }

})