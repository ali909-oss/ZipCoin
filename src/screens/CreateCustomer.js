import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";

import { useNavigation } from '@react-navigation/native';

const CreateCustomer = () => {
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
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        {
            label: 'Abc',
            value: 'Abc',
        },
        {
            label: 'xyz',
            value: 'xyz',

        }
    ]);
    const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState(null);
    const [items3, setItems3] = useState([
        {
            label: 'Abc',
            value: 'Abc',
        },
        {
            label: 'xyz',
            value: 'xyz',

        }
    ]);
    const [open4, setOpen4] = useState(false);
    const [value4, setValue4] = useState(null);
    const [items4, setItems4] = useState([
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
                    <Text style={styles.texta}>Create New Customer</Text>
                </View>



            </View>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
            <View style={{ marginLeft: wp('5%') }}>
            <View style={{marginTop:hp('2%')}}>
                    <DropDownPicker
                        placeholder="Member Role"

                        style={styles.drop}
                        open={open3}
                        value={value3}
                        items={items3}
                        setOpen={setOpen3}
                        setValue={setValue3}
                        setItems={setItems3}
                    />
                </View>
                <View style={{ marginTop: hp('2%') }}>
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        placeholderTextColor={'#B5B5B5'}
                        fontSize={16}
                        padding={5}
                    />
                </View>
                <View style={{ marginTop: hp('2%') }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                        placeholderTextColor={'#B5B5B5'}
                        fontSize={16}
                        padding={5}
                    />
                </View>
                <View style={{marginTop:hp('2%')}}>
                    <DropDownPicker
                        placeholder="Status"


                        style={styles.drop}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>
                <View style={{ marginTop: hp('2%') }}>
                    <TextInput
                        style={styles.input}
                        placeholder="UserName"
                        placeholderTextColor={'#B5B5B5'}
                        fontSize={16}
                        padding={5}
                    />
                </View>
                <View style={{ marginTop: hp('2%') }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor={'#B5B5B5'}
                        fontSize={16}
                        padding={5}
                    />
                </View>
                <View style={{ marginTop: hp('2%') }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor={'#B5B5B5'}
                        fontSize={16}
                        padding={5}
                    />
                </View>
                <View style={{marginTop:hp('2%')}}>
                    <DropDownPicker
                        placeholder="Country"

                        style={styles.drop}
                        open={open4}
                        value={value4}
                        items={items4}
                        setOpen={setOpen4}
                        setValue={setValue4}
                        setItems={setItems4}
                    />
                </View>
                <View style={{ marginTop: hp('2%') }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Mobile Number"
                        placeholderTextColor={'#B5B5B5'}
                        fontSize={16}
                        padding={5}
                    />
                </View>

            
           
                <View style={{marginTop:hp('2%')}}>
                    <DropDownPicker
                        placeholder="State"

                        style={styles.drop}
                        open={open1}
                        value={value1}
                        items={items1}
                        setOpen={setOpen1}
                        setValue={setValue1}
                        setItems={setItems1}
                    />
                </View>
                
                <View style={{ marginTop: hp('2%') }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        placeholderTextColor={'#B5B5B5'}
                        fontSize={16}
                        padding={5}
                    />
                </View>
                <View style={{marginTop:hp('2%')}}>
                    <DropDownPicker
                        placeholder="City"

                        style={styles.drop}
                        open={open2}
                        value={value2}
                        items={items2}
                        setOpen={setOpen2}
                        setValue={setValue2}
                        setItems={setItems2}
                    />
                </View>
                <View style={{ marginTop: hp('2%') }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Postal/Zip Code"
                        placeholderTextColor={'#B5B5B5'}
                        fontSize={16}
                        padding={5}
                    />
                </View>

           
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity onPress={()=> navigation.navigate("Customer")}>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>Reset</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("Customer")}>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>Submit</Text>
            </View>
            </TouchableOpacity>
            </View>
            </ScrollView>

        </View>
    )
}
export default CreateCustomer;

const styles = StyleSheet.create({
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
        marginLeft: wp('12%')
    },
    textb: {
        fontSize: 17,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_Color,
        marginTop:hp('2%')

    },
    input: {
        width: wp('90%'),
        height: hp('6%'),
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 0.5,

    },
    drop: {
        width: wp('90%'),
        zIndex: 2,
        height: hp('6%'),
        borderWidth: 0.5,
        borderRadius: 10,





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
        fontSize:20,
        color:"#fff"

    }
})