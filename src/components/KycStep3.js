import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image, TouchableOpacity,FlatList} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Entypo from "react-native-vector-icons/dist/Entypo";
import { Table, Row, Rows } from 'react-native-table-component';
import { Select ,Box,Center} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider } from "native-base";
import CheckBox from 'react-native-check-box'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RadioForm from 'react-native-simple-radio-button';
import UploadFile from "./UploadFile";

const Data=[
    {
        user_image: require("../assets/images/userpro.png"),

    }
]
const Seprator=()=>{
    return (
    <View style={{height:2,backgroundColor:'#f1f1f1',width:wp('90%'),marginLeft:wp('5%')}}/>
    )
}

const KycStep3 = () =>{
   
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
        <View>

        <View style={{marginLeft:wp('3%')}}>
            <Text style={styles.textaa}>Selfie</Text>
            <Text style={styles.textbb}>This step requires access to a camera (either your mobile device or a laptop with a camera).</Text>

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
                <Text style={styles.title}>Driver License</Text>
                <TextInput
                style={styles.input}
                placeholder=""
                fontSize={20}
                padding={wp('3%')}
                />
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.title}>Add Calendar</Text>
                <TouchableOpacity onPress={showDatePicker}>
                <View style={styles.input}>
                <Text style={styles.caltext}>{selectedDate}</Text>

                   
                    <AntDesign name="calendar" size={25} Color="black"
                    style={styles.icon}
                    />
                    <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDate}
                onCancel={hideDatePicker}
            />
                </View>
                </TouchableOpacity>


            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={{
  paddingLeft:10,
  height:hp('20%'),
  width:wp('40%'),
  marginBottom:1,
  borderStyle: 'dashed',
  borderRadius: 80,
  borderWidth: 1,
  borderColor: 'black',
  justifyContent:'center',
  alignItems:'center',
  marginTop:hp('2%'),
 }}>
              <Image style={styles.imagehead} source={Data && Data[0].user_image} />

     </View>
     </View>
     <View style={{flexDirection:'row',justifyContent:'center',marginTop:hp('1%')}}>
                <TouchableOpacity>

                <View style={styles.back}>
                    <Entypo name="camera" size={30} Color={Colors.DEFAULT_Color}/>
                    <Text>Capture</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.back}>
                <Entypo name="upload" size={30} Color={Colors.DEFAULT_Color}/>

                    <Text>Upload</Text>
                </View>
                </TouchableOpacity>
                </View>
                <View style={{marginTop:hp('1%')}}>
                    <Text style={styles.textt}>If Your Selfie Visible click Next!</Text>
                </View>
            
            
            
          
            </View>
    )
}
export default KycStep3;
const styles=StyleSheet.create({
    texta:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        padding:2
    },
    textaa:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        padding:2,
        marginLeft:wp('3%')
    },
    textb:{
        fontSize:15,
        fontFamily:Fonts.POPPINS_REGULAR,
        padding:2
    },
    title:{
        fontSize:17,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        padding:wp('1%')
    },
    textbb:{
        fontSize:14,
        fontFamily:Fonts.POPPINS_REGULAR,
        padding:wp('2%')

    },
    input:{
        width:wp('90%'),
        height:hp('6%'),
        borderRadius:10,
        elevation:2,
        backgroundColor:'#F9F9F9',

    },
    input1:{
        width:wp('50%'),
        height:hp('6%'),
        borderRadius:10,
        elevation:2,
        backgroundColor:'#F9F9F9',

    },
    caltext:{
        fontSize:16,
        color:'#bcbcc2',
        marginLeft:wp('3%'),
        marginTop:hp('2%')
      },
      icon:{
        marginLeft:wp('80%'),
        marginTop:hp('-3.5%'),
       },
       icon1:{
        marginLeft:wp('40%'),
        marginTop:hp('-3%'),
       },
       imagehead:{
           width:wp('30'),
           height:hp('15%')
       },
       back:{
        width:wp('40%'),
        height:hp('10%'),
        backgroundColor:'#F3F4F9',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textt:{
        fontSize:16,
        fontFamily:Fonts.POPPINS_MEDIUM,
        textAlign:'center'
    }


})