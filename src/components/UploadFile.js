import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image, TouchableOpacity,FlatList} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Fontisto from "react-native-vector-icons/dist/Fontisto";
import { Table, Row, Rows } from 'react-native-table-component';

import { useNavigation } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/dist/Entypo";

const UploadFile =() =>{
    return(
        <View>
            <View>
            <Text style={styles.texta}>Upload front of the document</Text>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
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
                </View>
                <View style={{marginTop:hp('2%')}}>
            <Text style={styles.texta}>Upload back of the document</Text>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
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
                </View>
                <View style={{marginTop:hp('2%')}}>
                <Text style={styles.textc}>Please Note:</Text>
                <Text style={styles.textb}>Use your phone to take a coloured picture of your original Identity Document. Ensure the address and other details are clearly visible. </Text>
                <Text style={styles.textb}>1- Do not take a picture of a photocopy or printout of your Identity Document. Photocopies or scanned images will not be accepted. </Text>
               <Text style={styles.textb}>2- Do not crop edges of the document</Text>
                </View>
        </View>
    )
}
export default UploadFile;

const styles=StyleSheet.create({
    texta:{
        fontSize:17,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        marginLeft:wp('3%')
    },
    back:{
        width:wp('40%'),
        height:hp('10%'),
        backgroundColor:'#F3F4F9',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textc:{
        fontSize:17,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        marginLeft:wp('3%'),
        color:'red'
    },
    textb:{
        fontSize:14,
        fontFamily:Fonts.POPPINS_REGULAR,
        padding:wp('2%')
    }

})