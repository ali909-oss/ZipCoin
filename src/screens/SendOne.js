import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image,TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import {useNavigation} from '@react-navigation/native';


const SendOne = () => {
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
        <View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.texta}>Send to Beneficiary</Text>
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
                <View style={{marginTop:hp('2%')}}>
                    <Text style={styles.texta}>New Beneficiary</Text>
                    <View style={{flexDirection:'column'}}>
                        <TouchableOpacity onPress={()=> navigation.navigate("NewBenif")}>
                        <View style={styles.input}>
                            <View style={{flexDirection:'row',marginTop:hp('1.2%'),margin:wp('5%')}}>
                            <AntDesign name="pluscircle" size={22} color={Colors.DEFAULT_Color}/>

                                <Text style={styles.textb}>Myself</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.input}>
                        <View style={{flexDirection:'row',marginTop:hp('1.2%'),margin:wp('5%')}}>
                        <AntDesign name="pluscircle" size={22} color={Colors.DEFAULT_Color}/>

                                <Text style={styles.textb}>Someone Else</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:hp('2%')}}>
            <Text style={styles.texta}>Reason for your Transfer</Text>
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
            <Text style={styles.texta}>Relation to Beneficiary</Text>
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
                <TouchableOpacity onPress={()=> navigation.navigate("FinalSend")}>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>Continue</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}
export default SendOne ;
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
        fontSize: 18,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        marginLeft: wp('5%')
    },
    input:{
        width:wp('90%'),
        height:hp('7%'),
        backgroundColor:'#fff',
        elevation:2,
    

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
        width:wp('95%'),
        height:hp('7%'),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:Colors.DEFAULT_Color,
        backgroundColor:Colors.DEFAULT_Color,
        marginTop:hp('8%'),
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