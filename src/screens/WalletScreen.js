import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image, TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { useNavigation } from '@react-navigation/native';
import SearchBar from "../components/SearchBar";
import { ScrollView } from "react-native-gesture-handler";

const wallet=[
    {
        title:'ZIPCASH',
        price:'50.0',
        Id:'Z268576',
        date:'2020/06/04 04:33:50',
        image: require("../assets/images/zipcash.png"),



    },
    {
        title:'CAD',
        price:'40.0',
        Id:'C768576',
        date:'2020/06/04 04:33:50',
        image: require("../assets/images/cd.png"),

    },
    {
        title:'USA',
        price:'65.0',
        Id:'U768576',
        date:'2020/06/04 04:33:50',
        image: require("../assets/images/dollar.png"),

    },
    {
        title:'CAD',
        price:'40.0',
        Id:'C768576',
        date:'2020/06/04 04:33:50',
        image: require("../assets/images/cd.png"),

    },
]

const WalletScreen = () => {
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
            <Text style={styles.texta}>Wallet Transaction Summary</Text>
            </View>
            </View>
            <View style={{marginTop:hp('2%')}}>
                <SearchBar/>
            </View>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            >
            <View style={{marginTop:hp('2%')}}>
            {wallet.map(data => {
           return(
            <View style={styles.main}>
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:wp('3%')}}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.title}>{data.price}</Text>

                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:wp('2%')}}>
                    <View style={{flexDirection:'column',marginLeft:wp('2%')}}>
                        <Text style={styles.Id}>{data.Id}</Text>
                        <Text style={styles.date}>{data.date}</Text>
                    </View>
                    <Image source={data.image} style={styles.image1} />


                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Fund")}>
                    <View style={styles.backtext}>
                        <Text style={styles.textb}>Fund</Text>
                    </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("WalletTransfer")}>
                    <View style={styles.backtexta}>
                        <Text style={styles.textb}>Send</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Topup")}>
                    <View style={styles.backtext}>
                        <Text style={styles.textb}>Send Airtime</Text>
                    </View>
                    </TouchableOpacity>
                </View>

            </View>
           )
            })
        }

        </View>
        </ScrollView>
            </View>
            )}
export default WalletScreen;
const styles=StyleSheet.create({
    header:{
        backgroundColor:Colors.DEFAULT_Color,
        height:hp('8%'),
        width:wp('100%'),
    },
    container:{
        height:hp('98%'),
        width:wp('100%'),
    },
    texta:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:'#fff',
        marginLeft:wp('10%')
    },
    main:{
        width:wp('90%'),
        borderRadius:5,
        marginLeft:wp('5%'),
        borderWidth:0.2,
        marginBottom:hp('2%'),
        backgroundColor:'#fff',
        elevation:2,
        padding:wp('2%')
    },
    title:{
        fontSize:23,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:Colors.DEFAULT_Color
    },
    Id:{
        fontSize:17,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:Colors.DEFAULT_Color
    },
    date:{
        fontSize:15,
        fontFamily:Fonts.POPPINS_REGULAR,
        color:Colors.DEFAULT_Color
    },
    image1:{
       
    },
    backtext:{
        width:wp('30%'),
        height:hp('4%'),
        backgroundColor:Colors.DEFAULT_Color,
        justifyContent:'center',
        alignItems:'center'
    },
    textb:{
        fontSize:14,
        color:'#fff',
        fontFamily:Fonts.POPPINS_REGULAR

    },
    backtexta:{
        width:wp('24%'),
        height:hp('4%'),
        backgroundColor:'#DBA84E',
        justifyContent:'center',
        alignItems:'center'

    }

})