import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Entypo from "react-native-vector-icons/dist/Entypo";
import Modal from "react-native-modal";


import { useNavigation } from '@react-navigation/native';

const Data = [
    {
        amount: '67.14',
        benif: '17.13',
        payment: 'CAD',
        totalfee: '35.15',
        totalamount: '50.2',
        name: 'John Doe',
        reason: 'Family Matter',
        relation: 'Brother'
    }
]

const FinalSend = () => {
    const navigation = useNavigation();
    // Modal
    
     const [isModalVisible, setModalVisible] = useState(false);
     const toggleModal = () => {
         setModalVisible(!isModalVisible);
         
       };
       const [isModalVisible1, setModalVisible1] = useState(false);
       const toggleModal1 = () => {
           setModalVisible1(!isModalVisible1);
           
         };
      
    return (
        <View style={styles.container}>
            {
                Data.map((item, index) => {
                    return (
                        <View style={{ padding: wp('5%') }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.texta}>Amount</Text>
                                <Text style={styles.texta}>{item.amount} CAD</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.texta}>Beneficiary Gets</Text>
                                <Text style={styles.texta}>{item.benif} CAD</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.texta}>Payment Method</Text>
                                <Text style={styles.texta}>{item.payment}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.texta}>Total Fee</Text>
                                <Text style={styles.texta}>{item.totalfee} CAD</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.texta}>Total Amount charged</Text>
                                <Text style={styles.texta}>{item.totalamount} CAD</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.texta}>Beneficiary Name</Text>
                                <Text style={styles.texta}>{item.name}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.texta}>Reason for your Transfer</Text>
                                <Text style={styles.texta}>{item.reason}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.texta}>Relation to Beneficiary</Text>
                                <Text style={styles.texta}>{item.relation}</Text>
                            </View>
                        </View>
                    )
                })
            }
            <TouchableOpacity onPress={toggleModal}>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>Send</Text>
            </View>
            </TouchableOpacity>
            <Modal style={styles.modal}

isVisible={isModalVisible}
animationType={"slide"}
onSwipeComplete={() => setModalVisible(false)}
swipeDirection="left"
onModalHide={() => {
    setModalVisible(false);
   console.log("First modal closed");
 }}



>
    <View style={{justifyContent:'center',alignItems:'center'}}>
        <View style={styles.backimg}>
        <Image source={require('../assets/images/Info.png')} style={styles.img1} />

        </View>
        <Text style={styles.textpara}>Please ensure the entered beneficiary information is correct before sending money to avoid unnecessary delays. ZIPREMIT is not responsible for any incorrect or wrong beneficiary information. You can cancel for a full refund within 7 days of payment, unless the funds have been picked up or deposited.</Text>
    <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={toggleModal}>
        <View style={styles.btn}>
            <Text style={styles.textbtn}>Cancel</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal1}>
        <View style={styles.btn1}>
            <Text style={styles.textbtn1}>Confirm</Text>
        </View>
        </TouchableOpacity>
        <Modal style={styles.modal1}

isVisible={isModalVisible1}
animationType={"slide"}
onSwipeComplete={() => setModalVisible1(false)}
swipeDirection="left"


>
    <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/images/checktick.png')} style={styles.img2} />

        <Text style={styles.textpara1}>Money Transfered Successfully.</Text>
    

        <TouchableOpacity onPress={toggleModal}>
        <View style={styles.btn1}>
            <Text style={styles.textbtn1}>OK</Text>
        </View>
        </TouchableOpacity>

    </View>

    </Modal>

    </View>
    </View>
    </Modal>
        </View>
    )
}
export default FinalSend;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: hp('100%')
    },
    texta: {
        fontSize: 16,
        fontFamily: Fonts.POPPINS_MEDIUM,
        padding: hp('1%')
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
        marginTop:hp('15%'),
        marginLeft:wp('5%')

    },
    btntexta:{
        fontSize:18,
        color:"#1ba0a5"
    },
    btntextb:{
        fontSize:20,
        color:"#fff"

    },
    modal: {
        flex:0,
      
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: wp('10%'),
        height:hp('50%'),
        width:wp('80%'),
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('20%')
        

    },
    modal1: {
        flex:0,
      
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: wp('10%'),
        height:hp('30%'),
        width:wp('80%'),
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('25%'),
        

    },
    textpara:{
        fontSize:13,
        padding:wp('5%'),
        fontFamily:Fonts.POPPINS_REGULAR
    },
    textpara1:{
        fontSize:16,
        padding:wp('5%'),
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    backimg:{
        width:wp('24%'),
        height:hp('12%'),
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#d6d7db',
    },
    img1:{
        height:hp('7%'),
        width:wp('14%')
    },
    img2:{
        height:hp('10%'),
        width:wp('20%')

    },
    btn:{
        height:hp('5%'),
        width:wp('30%'),
        borderWidth:2,
        borderColor:Colors.DEFAULT_Color,
        borderColor:Colors.DEFAULT_Color,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    btn1:{
        height:hp('5%'),
        width:wp('30%'),
        borderWidth:2,
        borderColor:Colors.DEFAULT_Color,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.DEFAULT_Color,
        marginLeft:wp('2%')
    },
    textbtn:{
        fontSize:15,
        color:Colors.DEFAULT_Color,
        fontFamily:Fonts.POPPINS_REGULAR
    },
    textbtn1:{
        fontSize:15,
        color:'#fff',
        fontFamily:Fonts.POPPINS_REGULAR
    }

})