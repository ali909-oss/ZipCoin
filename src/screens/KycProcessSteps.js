import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image, TouchableOpacity,FlatList} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Fontisto from "react-native-vector-icons/dist/Fontisto";
import { Table, Row, Rows } from 'react-native-table-component';

import { useNavigation } from '@react-navigation/native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Col } from "react-native-table-component";
import KycStep1 from "../components/KycStep1";
import KycStep2 from "../components/KycStep2";
import KycStep3 from "../components/KycStep3";
import KycStep4 from "../components/KycStep4";


const buttonTextStyle = {
    color:Colors.DEFAULT_Color,
    width:wp('25%'),
    height:hp('5%'),
    backgroundColor:Colors.DEFAULT_Color,
    borderRadius:30,
    color:'#fff',
    textAlign:'center',
    padding:5,

    
};
const KycProcessSteps  = () => {
    const navigation = useNavigation();
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
            <View style={{flex: 1}}>
        <ProgressSteps 
        activeStepIconBorderColor={Colors.DEFAULT_Color}
        progressBarColor={Colors.DEFAULT_Color}
        labelColor={'#fff'}
        labelFontSize={18}
        activeLabelColor={Colors.DEFAULT_Color}
        completedProgressBarColor={Colors.DEFAULT_Color}
        completedStepIconColor={Colors.DEFAULT_Color}

        >
            <ProgressStep label="Step 1" nextBtnTextStyle={buttonTextStyle}>
                <View>
                    <KycStep1/>
                </View>
            </ProgressStep>
            <ProgressStep label="Step 2" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}
>
                <View>
                    <KycStep2/>
                </View>
            </ProgressStep>
            <ProgressStep label="Step 3" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                <View>
                    <KycStep3/>
                </View>
            </ProgressStep>
            <ProgressStep label="Step 4" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                <View>
                    <KycStep4/>
                </View>
            </ProgressStep>
        </ProgressSteps>
    </View>
            </View>
    )}
    export default KycProcessSteps;
    const styles=StyleSheet.create({
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
    })