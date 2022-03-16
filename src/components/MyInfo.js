import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Entypo from "react-native-vector-icons/dist/Entypo";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const MyInfo =() =>{
    const navigation = useNavigation();
    const [enteredName, setEnteredName] = useState('');
    function sendValues(enteredName) {
        console.log(enteredName);
    };
    // DatePicker
    const [selectedDate, setselectedDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  

  const handleDate = (date) => {
      setselectedDate(date.toDateString());
      hideDatePicker();
    };

    return(
        <ScrollView 
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.container}>
            <View style={{marginLeft:wp('5%')}}>
                <Text style={styles.texta}>Name</Text>
                <TextInput
                style={styles.input}
                placeholder="Samantha Zalo"
                fontSize={18}
                padding={wp('3%')}
                value={enteredName}
    onChangeText={text => setEnteredName(text)}
                />
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.texta}>Email Address</Text>
                <TextInput
                style={styles.input}
                placeholder="Samantha@gmail.com"
                fontSize={18}
                padding={wp('3%')}
                />
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.texta}>Phone Number</Text>
                <TextInput
                style={styles.input}
                placeholder="678654568"
                fontSize={18}
                padding={wp('3%')}
                />
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.texta}>Birthday</Text>
                <View style={styles.input}>
                <Text style={styles.caltext}>{selectedDate}</Text>

                    <TouchableOpacity onPress={showDatePicker}>
                    <AntDesign name="calendar" size={25} Color="black"
                    style={styles.icon}
                    />
                    </TouchableOpacity>
                    <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDate}
                onCancel={hideDatePicker}
            />
                </View>

            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.texta}>Country</Text>
                <TextInput
                style={styles.input}
                placeholder=""
                fontSize={18}
                padding={wp('3%')}
                />
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.texta}>Province/State</Text>
                <TextInput
                style={styles.input}
                placeholder=""
                fontSize={18}
                padding={wp('3%')}
                />
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.texta}>City</Text>
                <TextInput
                style={styles.input}
                placeholder=""
                fontSize={18}
                padding={wp('3%')}
                />
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.texta}>Postal/Zip Code</Text>
                <TextInput
                style={styles.input}
                placeholder=""
                fontSize={18}
                padding={wp('3%')}
                />
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.texta}>Physical Address</Text>
                <TextInput
                style={styles.input}
                placeholder=""
                fontSize={18}
                padding={wp('3%')}
                />
            </View>
            <TouchableOpacity>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>Update</Text>
            </View>
            </TouchableOpacity>

        </View>
        </ScrollView>
    )
}
export default MyInfo;
const styles=StyleSheet.create({
    container:{
        width:wp('100%'),
        backgroundColor:'#fff',
        height:hp('125%')
    },
    texta:{
        fontSize:17,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        padding:wp('1%')
    },
    input:{
        width:wp('90%'),
        height:hp('7%'),
        borderRadius:10,
        elevation:2,
        backgroundColor:'#F9F9F9',

    },
    icon:{
        marginLeft:wp('80%'),
        marginTop:hp('-2%')
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
    caltext:{
        fontSize:16,
        color:'#bcbcc2',
        marginLeft:wp('3%'),
        fontWeight:'700',
        marginTop:hp('2%')
      },

})