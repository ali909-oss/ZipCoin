import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image, TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { useNavigation } from '@react-navigation/native';
import Countrypicker from "../components/Countrypicker";
import RadioForm from 'react-native-simple-radio-button';
import { fontSize } from "styled-system";

const Data = [
    {
        
        totalfee: '35.15',
        totalamount: '50.2',
        process:'Instant'
    }
]
const radio_props = [
    {label: 'ZipCash (50.00)', value: 0 },
    {label: 'CAD ( 421.01 )', value: 1 },
    {label:'EUR ( 87.88 )      ',value:2},
    {label:'GBP ( 66.65 )',value:3},

  ];

const Topup = () => {
    const navigation = useNavigation();
    const [radioButtons, setRadioButtons] = useState(radio_props)

    function onPressRadioButton(radio_props) {
        setRadioButtons(radio_props);
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Abc', 
        value: 'Abc' ,
    },
        { label: 'xyz',
         value: 'xyz',

         }
    ]);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row',marginTop:hp('2%')}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                <AntDesign name="arrowleft" size={30} color="#fff"
                style={{marginLeft:wp('2%')}}
                />
                </TouchableOpacity>
            <Text style={styles.texta}>Airtime Top Up</Text>
            </View>
            </View>
            <View style={{marginTop:hp('2%'),marginLeft:wp('5%')}}>
                <Text style={styles.textb}>Enter Beneficiary's Mobile Number</Text>
                <Countrypicker/>
                <Text style={styles.textc}>Enter your beneficiary mobile number with country code.</Text>

            </View>
            <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                <Text style={styles.textb}>Select Product/Bundle</Text>
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
                <Text style={styles.textb}>Amount Between</Text>
                <TextInput
                style={styles.input}
                placeholder=""
                />
                </View>
                <View style={{marginLeft:wp('5%'),marginTop:hp('2%')}}>
                <Text style={styles.textb}>Payment Method</Text>
                <RadioForm
  radio_props={radio_props}
  initial={0}
  formHorizontal={true}
  onPress={onPressRadioButton} 
  buttonColor={Colors.DEFAULT_Color}
  buttonInnerColor={Colors.DEFAULT_Color}
  selectedButtonColor={Colors.DEFAULT_Color}
  style={{margin:15,flexWrap:'wrap',width:wp('100%')}}
  radioStyle={{paddingRight: 20}}
  buttonSize={14}
  labelStyle={{fontSize:16}}


  
  
/>
                </View>
                <View>
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
            )}
export default Topup;
const styles=StyleSheet.create({
    header:{
        backgroundColor:Colors.DEFAULT_Color,
        height:hp('8%'),
        width:wp('100%'),
    },
    container:{
        height:hp('100%'),
        width:wp('100%'),
    },
    texta:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:'#fff',
        marginLeft:wp('25%')
    },
    textb:{
        fontSize:17,
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    textc:{
        fontSize:12,
        fontFamily:Fonts.POPPINS_REGULAR,
        color:'#8A8A8A',
        padding:hp('1%')
    },
    drop:{
        width:wp('90%'),
        zIndex:1,
        height:hp('7%'),
        borderWidth:0.5,
        borderRadius:10,
        elevation:2,


        overflow:'hidden',
        

        
    },
    input:{
        width:wp('90%'),
        height:hp('7%'),
        borderRadius:10,
        elevation:1,
        backgroundColor:'#fff'

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
    btntexta:{
        fontSize:18,
        color:"#1ba0a5"
    },
    btntextb:{
        fontSize:20,
        color:"#fff"

    }
})