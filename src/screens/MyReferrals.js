import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Feather from "react-native-vector-icons/dist/Feather";
import Fontisto from "react-native-vector-icons/dist/Fontisto";
import Promofor from "../components/Promo";
import Clipboard from '@react-native-community/clipboard';
const Data = [
    {
        image: require("../assets/images/refer.png"),



    },
    {
        image: require("../assets/images/refer.png"),


    },
    



]


import { useNavigation } from '@react-navigation/native';
import Beneficiary from "./Beneficiary";
import Benefi from "../components/Beneficiaries";

const MyReferral = () => {
    const navigation = useNavigation();
    const[code,setcode] = useState("b367f");
    const [copiedText, setCopiedText] = useState('');

    const copyToClipboard = () => {
        Clipboard.setString('hello world');
      };
    
      const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText(text);
      };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                        <AntDesign name="arrowleft" size={30} color="#fff"
                            style={{ marginLeft: wp('2%') }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.texta}>My Referrals</Text>
                </View>



            </View>
            <View style={{marginTop:hp('2%'),flexDirection:'row',justifyContent:'space-around',marginLeft:wp('2%')}}>
                <View style={{flexDirection:'row'}}>
                <TextInput style={styles.input}
                        placeholder={code}
                        placeholderTextColor="#B5B5B5"
                        padding={8}
                        fontSize={18}
                    />
                    <TouchableOpacity onPress={copyToClipboard}>
                    <View style={styles.backicon}>
                        <Feather name="copy" color="#fff" size={20}/>
                    </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.backshare}>
                    <Fontisto name="share" color="#fff" size={20}/>

                </View>
            </View>
            <View style={{marginTop:hp('3%'),marginLeft:wp('5%')}}>
                <Text style={styles.textb}>Referral Highlights</Text>
                <Text style={styles.textc}>For every 6th successful send money transaction, ZIPREMIT will apply 5 ZIPCASH into your ZIPCASH wallet and use this amount to send money FREE to your family.</Text>
            </View>
            <View>
            <FlatList
                        data={Data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        legacyImplementation={false}
                        keyExtractor={(item) => { item.id }}
                        renderItem={({ item }) => {

                            return (

                                <View style={{margin:2}}>
                                                        <Image source={item.image} style={styles.image1} />

                                    
                                </View>
                            )
                        }} />
            </View>
            <View style={{marginTop:hp('2%'),marginLeft:wp('5%')}}>
                <Text style={styles.textb}>Referrals Summary Info</Text>
            </View>
            <Benefi/>
        </View>
    )
}
export default MyReferral;
const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.DEFAULT_Color,
        height: hp('8%'),
        width: wp('100%'),
    },
    container: {
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: '#fff'
    },
    texta: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: '#fff',
        marginLeft: wp('20%')
    },
    textb:{
        
            fontSize: 18,
            fontFamily: Fonts.POPPINS_SEMI_BOLD,
        
        

    },
    textc:{
        fontSize:13,
        fontFamily:Fonts.POPPINS_REGULAR,
        padding:2

    },
    input:{
        width:wp('50%'),
        backgroundColor:'#fff',
        borderWidth:0.5,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderTopRightRadius:null,
        borderBottomRightRadius:null,
        elevation:1

    },
    backicon:{
        width:wp('10%'),
        height:hp('6%'),
        backgroundColor:Colors.DEFAULT_Color,
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:null,
        borderBottomLeftRadius:null,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        

    },
    backshare:{
        width:wp('20%'),
        height:hp('6%'),
        backgroundColor:Colors.DEFAULT_Color,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10

    },
    image1:{
        width:wp('60%'),
        height:hp('15%'),
        borderRadius:10
    }

})
