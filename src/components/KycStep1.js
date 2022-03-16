import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image, TouchableOpacity,FlatList} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Fontisto from "react-native-vector-icons/dist/Fontisto";
import { Table, Row, Rows } from 'react-native-table-component';
import { Select ,Box,Center} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider } from "native-base";
import CheckBox from 'react-native-check-box'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RadioForm from 'react-native-simple-radio-button';
import UploadFile from "./UploadFile";

const radio_props = [
    {
        label: 'Passport', value: 0,
    },
    {
        label: 'Drivers License ', value: 1,
    },
    { label: 'Government Issued ID Card', value: 2 },
    { label: 'Residence Permit', value: 3 },


];
const Seprator=()=>{
    return (
    <View style={{height:2,backgroundColor:'#f1f1f1',width:wp('90%'),marginLeft:wp('5%')}}/>
    )
}

const KycStep1 = () =>{
    const [checked, setChecked] = useState(true);

    let [service, setService] = React.useState("");
    const [radioButtons, setRadioButtons] = useState(radio_props)

    function onPressRadioButton(radio_props) {
        setRadioButtons(radio_props);
    }
 // DatePicker
 const [selectedDate, setselectedDate] = useState("");
 const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 const [selectedDate1, setselectedDate1] = useState("");

 const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);

 const showDatePicker = () => {
   setDatePickerVisibility(true);
 };
 const showDatePicker1 = () => {
    setDatePickerVisibility1(true);
  };

 const hideDatePicker = () => {
   setDatePickerVisibility(false);
 };
 const hideDatePicker1 = () => {
    setDatePickerVisibility1(false);
  };

 

 const handleDate = (date) => {
     setselectedDate(date.toDateString());
     hideDatePicker();
   };
   const handleDate1 = (date) => {
    setselectedDate1(date.toDateString());
    hideDatePicker1();
  };

   


    return(
        <NativeBaseProvider>
        <View style={{marginLeft:wp('3%')}}>
            <Text style={styles.texta}>Identity Document</Text>
            <Text style={styles.textb}>Select the country that issued your document</Text>

        </View>
        <Center>
      <Box w="4/5" maxW="400">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Country" placeholder="Choose Country" width={wp('80%')} fontSize={18}  _selectedItem={{
        bg: "teal.600",
        fontSize:20
        // endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="America" value="Usa" />
          <Select.Item label="Canada" value="Cad" />
          <Select.Item label="Australia" value="Aus" />
          <Select.Item label="Pakistan" value="pk" />
        </Select>
      </Box>
      </Center>
      <View style={{marginLeft:wp('3%'),marginTop:hp('2%')}}>
          <Text style={styles.texta}>Choose your document type</Text>
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
      </View>
      <Seprator/>
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
                <Text style={styles.title}>Date of Birth</Text>
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
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.title}>ID Number</Text>
                <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder=""
                fontSize={18}
                padding={wp('3%')}
                />
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.title}>ID card Expiry</Text>
               <View style={{flexDirection:'row',justifyContent:'space-around'}}>
               <TouchableOpacity onPress={showDatePicker1}>

               <View style={styles.input1}>
                <Text style={styles.caltext}>{selectedDate1}</Text>

                    <AntDesign name="calendar" size={20} Color="black"
                    style={styles.icon1}
                    />
                    <DateTimePickerModal
                isVisible={isDatePickerVisible1}
                mode="date"
                onConfirm={handleDate1}
                onCancel={hideDatePicker1}
            />
                </View>
                </TouchableOpacity>

                <View style={{flexDirection:'row',marginTop:hp('1%')}}>
                <CheckBox
        style={{ flex: 1, padding: 2}}
        onClick={() => setChecked(!checked)}
        isChecked={checked}
      />
      <Text style={{fontSize:14,padding:3,marginLeft:wp('6%')}}>Never Expires</Text>
      </View>
                </View>
            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.title}>Physical Address</Text>
                <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder=""
                fontSize={20}
                padding={wp('3%')}
                />
            </View>
            <Seprator/>
            <View style={{marginTop:hp('2%')}}>
                <UploadFile/>
            </View>
        </NativeBaseProvider>
    )
}
export default KycStep1;
const styles=StyleSheet.create({
    texta:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        padding:2
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


})