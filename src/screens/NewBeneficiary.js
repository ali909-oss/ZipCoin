import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image,TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Entypo from "react-native-vector-icons/dist/Entypo";

import {useNavigation} from '@react-navigation/native';


const NewBenif = () => {
    const navigation = useNavigation();
    //   Dropdown
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items, setItems] = useState([
        { label: 'CAD', 
        value: 'CAD' ,
    },
        { label: 'USA',
         value: 'USA',

         }
    ]);
    const [items1, setItems1] = useState([
        { label: 'CAD', value: 'CAD',        
    },
        { label: 'USA', value: 'USA',        
    }
    ]);
    const [items2, setItems2] = useState([
        { label: 'CAD', value: 'CAD',        
    },
        { label: 'USA', value: 'USA',        
    }
    ]);
    return(
        <View style={{backgroundColor:'#FFFFFF'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:wp('3%')}}>
                <Text style={styles.textt}>Send To Myself</Text>
                <TouchableOpacity onPress={()=> navigation.navigate("SendOne")}>
                <Entypo name="cross" size={25}/>
                </TouchableOpacity>

            </View>
            <View style={{marginTop:hp('1%')}}>
            <Text style={styles.texta}>Mobile Number</Text>
            
            <TextInput 
            placeholder="+147686575"
            placeholderTextColor={'#B5B5B5'}
            style={styles.input}
            fontSize={18}
            padding={wp('2%')}
            />
                </View>
               
                <View style={{marginTop:hp('1%')}}>
            <Text style={styles.texta}>Country</Text>
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
                <View style={{marginTop:hp('1%')}}>
            <Text style={styles.texta}>City</Text>
            <DropDownPicker
                                 placeholder="Please Select"
                                 placeholderTextColor="#FFFFFF"

                    style={styles.drop}
                    open={open2}
                    value={value2}
                    items={items2}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems2}
                />
                </View>
                <View style={{marginTop:hp('1%')}}>
            <Text style={styles.texta}>Address</Text>
            
            <TextInput 
            placeholder="California Street No 1"
            placeholderTextColor={'#B5B5B5'}
            style={styles.input}
            fontSize={18}
            padding={wp('2%')}
            />
                </View>
                <View style={{marginTop:hp('1%')}}>
                    <Text style={styles.textt}>Receiving Methods</Text>
            <Text style={styles.texta}>Wallet</Text>
            <DropDownPicker
                                 placeholder="Please Select"
                                 placeholderTextColor="#FFFFFF"

                    style={styles.drop}
                    open={open2}
                    value={value2}
                    items={items2}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems2}
                />
                </View>
                <View style={{marginTop:hp('2%')}}>
            <Text style={styles.texta}>Wallet Number</Text>
            
            <TextInput 
            placeholder="y4g6768y3ih"
            placeholderTextColor={'#B5B5B5'}
            style={styles.input}
            fontSize={18}
            padding={wp('2%')}
            />
                </View>

                <TouchableOpacity onPress={()=> navigation.navigate("SendOne")}>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>Confirm</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}
export default NewBenif ;
const styles = StyleSheet.create({
    drop:{
        width:wp('90%'),
        zIndex:1,
        height:hp('7%'),
        borderWidth:0.3,

        overflow:'hidden',
        borderRadius:10,
        marginLeft:wp('5%')

        
    },
    texta: {
        fontSize: 16,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        marginLeft: wp('5%')
    },
    textt: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        marginLeft: wp('5%')
    },
    input:{
        width:wp('90%'),
        height:hp('7%'),
        backgroundColor:'#fff',
        borderWidth:0.5,
    

        borderRadius:10,
        marginLeft:wp('5%'),
        marginBottom:hp('2%')

    },
    textb:{
        fontSize:16,
        marginLeft:wp('5%'),
        fontFamily:Fonts.POPPINS_MEDIUM
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
        marginTop:hp('1%'),
        marginLeft:wp('5%')

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