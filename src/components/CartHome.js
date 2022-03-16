import React from "react";
import { View,Text,FlatList,Image,TouchableOpacity,StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from "react-native-responsive-screen";
import { Colors, Fonts } from "../contants";

const DATA=[
    {
        id:'1',
        name: 'Account Status',
        image: require("../assets/images/Account.png"),
        kyc:'Standard KYC: Verified',
        otp:'OTP: Verified',
        email:'Email: Verified',
       


        },
        {
        name: 'Refer & Earn',
        id: '2',
        image: require("../assets/images/Earn.png"),
        commi:'10%',
        kyc:'Referrals: 0',
        otp:'Commission 10%',
        email:'2.00 CAD',
        

        },
        
        {
        id:'3',
        name: 'Wallet Balance ',
        image: require("../assets/images/Transaction.png"),
        kyc:'435.61 CAD',
        otp:'Click More',
        email:'',
        






        },
        {
            id:'4',
            name: 'Transactions Count',
            image: require("../assets/images/Topup.png"),
            
            kyc:'Send Money: 128',
            otp:'Airtime TopUp: 117',
            email:'',
          





        },
]
const CartHome =() =>{
    return(
        <View style={{ marginTop: hp("2%") , }}>
        <FlatList
            data={DATA}
            nestedScrollEnabled={true}
            numColumns={2}
            keyExtractor={(item) => { item.id }}
            renderItem={({ item }) => {
                
                return (
                           <View style={{flex:1,marginTop:hp('-2%')}}>

                            <View style={styles.main}>
                                <View style={styles.backimg}>
                            <Image source={item.image} style={styles.image1} />
                            </View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>{item.kyc}</Text>
                            <Text style={styles.price}>{item.otp}</Text>
                            <Text style={styles.price}>{item.email}</Text>
                           

                            

                            
                            </View>
                            </View>
                )
            }}
            />
            </View>
    )
}
export default CartHome;
const styles = StyleSheet.create({
    container: {
      height: hp("100%"),
      width: wp("100%"),
      backgroundColor: "#f6f7fc",
    },
    image1:{
        height:hp('2.5%'),
        width:wp('5%'),
       

    },
    main:{
        borderRadius:10,
        width:wp('45%'),
        backgroundColor:'#fff',
        padding:3,
        marginBottom:hp('5%'),
        marginLeft:wp('2%'),
        elevation:2
    },
    name:{
        fontSize:16,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        textAlign:'center',
        marginTop:hp('3%')
    },
    price:{
        fontSize:15,
        padding:5
    },
    backimg:{
        width:wp('11%'),
        height:hp('5.5%'),
        borderRadius:10,
        backgroundColor:Colors.DEFAULT_Color,
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('2%'),
        marginLeft:wp('15%')
      }
})
