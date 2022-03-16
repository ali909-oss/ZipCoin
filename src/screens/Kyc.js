import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image, TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { useNavigation } from '@react-navigation/native';


const Data=[
    {
      id:"1",
      title:"Standard KYC",
      price:"$5.00 - $1,999.00",
      status:"Approved",
      image: require("../assets/images/Checkk.png"),

    },
    {
        id:"2",
      title:"Advanced KYC",
      price:"$2,000.00+",
      status:"Approved",
      image: require("../assets/images/Checkk.png"),


    }
]
const KycScreen = () => {
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
            <Text style={styles.texta}>KYC Status</Text>
            </View>



            </View>
            <View style={{marginTop:hp('3%'),marginLeft:wp('5%')}}>
            <Text style={styles.textt}>Know Your Customer (KYC)</Text>
            <Text style={styles.textb}>For the safety of your information, please enter and review your personal information correctly and accurately. You will not be able to modify your personal information once the form has been submitted.</Text>
            </View>
            <View style={{marginTop:hp('4%')}}>
            {Data.map(data => {
           return(
            <View style={styles.main}>
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:wp('2%')}}>
                    <View style={{flexDirection:'column',marginLeft:wp('2%')}}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.price}>{data.price}</Text>
                        <Text style={styles.status}>{data.status}</Text>
                    </View>
                    <Image source={data.image} style={styles.image1} />


                </View>

            </View>
           )
            })
        }

        </View>
        <View style={{marginTop:hp('1%')}}>
            <Text style={styles.textc}>This is ONLY a one time KYC process completion.</Text>
        </View>
        </View>
    )}
export default KycScreen;
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
        fontFamily:Fonts.POPPINS_REGULAR,
        color:'#fff',
        marginLeft:wp('25%')
    },
    textt:{
        fontSize:16,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:'#000000'
    },
    textb:{
        fontSize:15,
        color:'#000000',
        fontFamily:Fonts.POPPINS_REGULAR


    },
    main:{
        width:wp('90%'),
        borderRadius:10,
        borderColor:Colors.DEFAULT_Color,
        borderWidth:2,
        marginLeft:wp('5%'),
        marginBottom:hp('3%'),
        padding:hp('1%')
    },
    image1:{
        width:wp('10%'),
        height:hp('6%'),
        marginTop:hp('2%')
    },
    title:{
        color:Colors.DEFAULT_Color,
        fontFamily:Fonts.POPPINS_REGULAR,
        fontSize:14,
        margin:2

    },
    price:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:Colors.DEFAULT_Color
    },
    status:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:Colors.DEFAULT_Color
    },
    textc:{
        fontFamily:Fonts.POPPINS_MEDIUM,
        fontSize:14,
        textAlign:'center'
    }

})