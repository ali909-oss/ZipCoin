import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image, TouchableOpacity,FlatList} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Fontisto from "react-native-vector-icons/dist/Fontisto";
import { Table, Row, Rows } from 'react-native-table-component';

import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import { Searchbar } from 'react-native-paper';
import CheckBox from 'react-native-check-box'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView } from "react-native-gesture-handler";
import Countrypicker from "../components/Countrypicker";


const KycProcess  = () => {
    const navigation = useNavigation();
    // const [iconName, setIconName] = useState("checkbox-passive");
    const [checked, setChecked] = useState(false);


    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

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
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row',marginTop:hp('2%')}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                <AntDesign name="arrowleft" size={30} color="#fff"
                style={{marginLeft:wp('2%')}}
                />
                </TouchableOpacity>
            <Text style={styles.texta}>KYC Process</Text>
            </View>



            </View>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
            <View style={{marginTop:hp('2%')}}>
                <Text style={styles.textaa}>Verify Your Identity</Text>
                <Text style={styles.textbb}>Before you start, please prepare your identity document and make sure it is valid.</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:wp('4%')}}>
            {/* <TouchableOpacity onPress={() => {
              if(iconName == "checkbox-passive" ){
              setIconName("checkbox-passive")
              }
              if(iconName == "checkbox-passive"){
                setIconName("checkbox-active")
              }
            }
            }> 
            <Fontisto name={iconName} size={25} color={Colors.DEFAULT_Color}  />
            </TouchableOpacity> */}
             <CheckBox
        style={{ flex: 1, padding: 10 }}
        onClick={() => setChecked(!checked)}
        isChecked={checked}
      />
                <Text style={styles.textc}>I agree to the processing of my personal data, as described in the Consent to Personal Data Processing</Text>

            </View>
            <View style={{marginTop:hp('1%')}}>
                <Text style={styles.textaa}>User Profile</Text>
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.title}>Full Name</Text>
                <TextInput
                style={styles.input}
                placeholder="Samanha Smith"
                fontSize={18}
                padding={wp('3%')}
                />
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.title}>Birthday</Text>
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
                <Text style={styles.title}>Email Address</Text>
                <TextInput
                style={styles.input}
                placeholder="Samanhasmith@gmail.com"
                fontSize={18}
                padding={wp('3%')}
                />
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.title}>Create Password</Text>
                <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder=""
                fontSize={20}
                padding={wp('3%')}
                />
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.title}>Reconfirm Password</Text>
                <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder=""
                fontSize={20}
                padding={wp('3%')}
                />
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.title}>Mobile Number</Text>
                <Countrypicker/>
               
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("KycProcessSteps")} >
                    <View style={styles.btn2}>
                        <View style={{flexDirection:'row'}}>
                <Text style={styles.btntextb}>Next</Text>
                <AntDesign name="arrowright" size={23} color="#fff"
                style={{marginLeft:wp('1%'),padding:3}}
                />
                </View>
            </View>
            </TouchableOpacity>
            </ScrollView>
            
            </View>
    )}
export default KycProcess;
const styles=StyleSheet.create({
    header:{
        backgroundColor:Colors.DEFAULT_Color,
        height:hp('8%'),
        width:wp('100%'),
    },
    container:{
        height:hp('95%'),
        width:wp('100%'),
        backgroundColor:'#fff'
    },
    texta:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:'#fff',
        marginLeft:wp('20%')
    },
    textb:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:Colors.DEFAULT_Color,

    },
    textaa:{
        fontSize:16,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        textAlign:'center'
    },
    textbb:{
        fontSize:14,
        fontFamily:Fonts.POPPINS_REGULAR,
        textAlign:'center'
    },
    textc:{
        fontSize:12,
        fontFamily:Fonts.POPPINS_REGULAR,
        padding:hp('1%')
    },
    title:{
        fontSize:17,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        padding:wp('1%')
    },
    input:{
        width:wp('90%'),
        height:hp('6%'),
        borderRadius:10,
        elevation:2,
        backgroundColor:'#F9F9F9',

    },
    caltext:{
        fontSize:16,
        color:'#bcbcc2',
        marginLeft:wp('3%'),
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        marginTop:hp('2%')
      },
      icon:{
        marginLeft:wp('80%'),
        marginTop:hp('-3.5%'),
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