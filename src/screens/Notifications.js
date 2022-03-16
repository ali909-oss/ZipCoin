import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image,TouchableOpacity,FlatList} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import {useNavigation} from '@react-navigation/native';


const Data=[
    {
        title:'Promo 40% Discount for special day in the long weekend',
        time:'6 Hours ago',
        image: require("../assets/images/Notifi.png"),


    },
    {
        title:'Promo 40% Discount for special day in the long weekend',
        time:'6 Hours ago',
        image: require("../assets/images/Notifi.png"),

    },
    {
        title:'Promo 40% Discount for special day in the long weekend',
        time:'6 Hours ago',
        image: require("../assets/images/Notifi.png"),

    }
]

const seprator=()=>{
    return (
    <View style={{height:2,backgroundColor:'#f1f1f1',width:wp('90%'),marginLeft:wp('5%')}}/>
    )
}
const Notification = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={{height:hp('75%')}}>
            <FlatList
            data={Data}
            ItemSeparatorComponent={seprator}

            keyExtractor={(item) => { item.id }}
            renderItem={({ item }) => {
                
                return (
                    <View style={styles.main}>
                        <View style={{flexDirection:'row'}}>
                        <Image source={item.image} style={styles.image1} />

                            <View style={{flexDirection:'column',marginLeft:wp('3%')}}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.time}>{item.time}</Text>

                            </View>
                            </View>
                        </View>
                )
            }}
            />
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("Dashboard")}>
                    <View style={styles.btn2}>
                <Text style={styles.btntextb}>Clear All Notifications</Text>
            </View>
            </TouchableOpacity>


        </View>

    )
}
export default Notification;
const styles=StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('95'),
        backgroundColor:'#fff'
    },
    main:{
        width:wp('90%'),
        padding:wp('3%'),
        marginBottom:hp('1%'),
        marginLeft:wp('2%')
    },
    image1:{
        width:wp('10%'),
        height:hp('5%')
    },
    title:{
        fontSize:16,
        fontFamily:Fonts.POPPINS_MEDIUM,
        padding:wp('1%')
    },
    time:{
        color:'#B5B5B5',
        fontSize:15,
        fontFamily:Fonts.POPPINS_REGULAR
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
   
    btntextb:{
        fontSize:20,
        color:"#fff"

    }
})