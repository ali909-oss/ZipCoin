import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { useNavigation } from '@react-navigation/native';
import RadioForm from 'react-native-simple-radio-button';


const radio_props = [
    {
        label: 'Debit/Credit Card', value: 0, image: require("../assets/images/card.png"),
    },
    {
        label: 'Bank Debit', value: 1, image: require("../assets/images/bankacc.png"),
    },
    { label: 'Email Payment', value: 2 },
    { label: 'INTEREC Online', value: 3 },
    { label: 'Zelle', value: 4 },


];

const Data = [
    {
        
        totalfee: '0',
        totalamount: '0',
        process:'Instant'
    }
]


const Fund = () => {
    const navigation = useNavigation();
    const [radioButtons, setRadioButtons] = useState(radio_props)

    function onPressRadioButton(radio_props) {
        setRadioButtons(radio_props);
    }

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
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                        <AntDesign name="arrowleft" size={30} color="#fff"
                            style={{ marginLeft: wp('2%') }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.texta}>Fund Wallet</Text>
                </View>
            </View>
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
            <View style={{ marginLeft: wp('5%'), marginTop: hp('2%') }}>
                <Text style={styles.textb}>Payment Method</Text>
                <View style={{flexDirection:'row'}}>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    
                    formHorizontal={true}
                    onPress={onPressRadioButton}
                    buttonColor={Colors.DEFAULT_Color}
                    buttonInnerColor={Colors.DEFAULT_Color}
                    selectedButtonColor={Colors.DEFAULT_Color}
                    style={{ margin: 15, width: wp('60%'), flexWrap: 'wrap' }}
                    radioStyle={{ paddingRight: 20 }}
                    buttonSize={14}
                    labelStyle={{ fontSize: 16 }}




                />
                <View style={{flexDirection:'column'}}>
                {radio_props.map(data => {
           return(
            <Image source={data.image} style={styles.image1} />

           )
                })
            }
            </View>
                </View>
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('2%')}}>
                <Text style={styles.textb}>Amount</Text>
                <TextInput
                style={styles.input}
                placeholder=""
                />
                </View>
                <View style={{marginTop:hp('2%')}}>
                
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
export default Fund;

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.DEFAULT_Color,
        height: hp('8%'),
        width: wp('100%'),
    },
    container: {
        height: hp('98%'),
        width: wp('100%'),
        backgroundColor:'#fff'
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
        zIndex: 1,
        height: hp('7%'),
        borderWidth: 0.5,
        borderRadius: 10,
        elevation: 2,


        overflow: 'hidden',



    },
    image1:{
        marginLeft:wp('-22%'),
        margin:1,
        marginTop:hp('2%')
        
    },
    input:{
        width:wp('90%'),
        height:hp('7%'),
        borderRadius:10,
        elevation:1,
        backgroundColor:'#fff',
        borderWidth:0.5

    },
    textaa: {
        fontSize: 16,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        padding: hp('1%')
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