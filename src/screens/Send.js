import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image,TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import RadioForm from 'react-native-simple-radio-button';
import Charges from "../components/Charges";
import {useNavigation} from '@react-navigation/native';

const radio_props = [
    {label: 'ZipCash', value: 0 },
    {label: 'CAD', value: 1 }
  ];




const Send = () => {
    const navigation = useNavigation();

    const [radioButtons, setRadioButtons] = useState(radio_props)

    function onPressRadioButton(radio_props) {
        setRadioButtons(radio_props);
    }
    

    //   Dropdown
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [items, setItems] = useState([
        { label: 'CAD', 
        value: 'CAD' ,
        icon: () =>(<Image source={require('../assets/images/flag.png')} style={styles.flag}/>),
    },
        { label: 'USA',
         value: 'USA',
         icon: () =>(<Image source={require('../assets/images/flag.png')} style={styles.flag}/>),

         }
    ]);
    const [items1, setItems1] = useState([
        { label: 'CAD', value: 'CAD',        icon: () =>(<Image source={require('../assets/images/flag.png')} style={styles.flag}/>),
    },
        { label: 'USA', value: 'USA',        icon: () =>(<Image source={require('../assets/images/flag.png')} style={styles.flag}/>),
    }
    ]);
    return (
        <View>
            <View style={styles.header}>
                <View style={{flexDirection:'row',marginTop:hp('2%')}}>
                    <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                <AntDesign name="arrowleft" size={30} color="#fff"
                style={{marginLeft:wp('2%')}}
                />
                </TouchableOpacity>
            <Text style={styles.textb}>Send Money</Text>
            </View>



            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.texta}>Enter Amount</Text>
            <View style={{flexDirection:'row',marginLeft:wp('5%')}}>
            <TextInput style={styles.input}
                        placeholder="67.14"
                        padding={8}
                    />
                <DropDownPicker
                                 placeholder="select"

                    style={styles.drop}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
                </View>
                </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.texta}>Beneficiary Gets</Text>
            <View style={{flexDirection:'row',marginLeft:wp('5%')}}>
            <TextInput style={styles.input}
                        placeholder="47.00"
                        padding={8}
                    />
                 <DropDownPicker
                 placeholder="select"
                    style={styles.drop}
                    open={open1}
                    value={value1}
                    items={items1}
                    setOpen={setOpen1}
                    setValue={setValue1}
                    setItems={setItems1}
                    
                />
            </View>
            </View>
            <View style={{flexDirection:'row',marginLeft:wp('4%'),marginTop:hp('3%')}}>
                <AntDesign name="checkcircle" size={25} color={Colors.DEFAULT_Color}/>
                <Text style={{padding:3,fontSize:16,fontFamily:Fonts.POPPINS_REGULAR}}>Include Fee</Text>
            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.texta}>Payment Method</Text>
            <RadioForm
  radio_props={radio_props}
  initial={0}
  formHorizontal={true}
  onPress={onPressRadioButton} 
  buttonColor={Colors.DEFAULT_Color}
  buttonInnerColor={Colors.DEFAULT_Color}
  selectedButtonColor={Colors.DEFAULT_Color}
  style={{margin:15,}}
  radioStyle={{paddingRight: 20}}


  
  
/>
</View>
<Charges/>
<TouchableOpacity onPress={()=> navigation.navigate("SendOne")}>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>Continue</Text>
            </View>
            </TouchableOpacity>

        </View>

    )
}
export default Send;
const styles = StyleSheet.create({
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
    textb:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:'#fff',
        marginLeft:wp('25%')
    },
    texta: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        marginLeft: wp('5%')
    },
    drop:{
        width:wp('30%'),
        zIndex:1,
        borderWidth:0,

        overflow:'hidden',
        borderTopLeftRadius:null,
        borderBottomLeftRadius:null,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        marginLeft:wp('-1%'),

        
    },
    input:{
        width:wp('60%'),
        backgroundColor:'#fff',
        borderWidth:0,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderTopRightRadius:null,
        borderBottomRightRadius:null,
        

    },
    flag:{
        height:hp('3%'),
        width:wp('6%')
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
        marginTop:hp('2%'),
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