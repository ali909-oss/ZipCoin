import React from "react";
import { View, Text, Image, StyleSheet, TextInput, Button,TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Foundation from "react-native-vector-icons/dist/Foundation";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { backgroundColor } from "styled-system";
import {Fonts, Images} from '../contants';
import Category from "../components/Categories";
import Promofor from "../components/Promo";
import CartHome from "../components/CartHome";
import Transactions from "../components/Transactions";
import { ScrollView} from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions } from '@react-navigation/native';
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import TransactionList from "../components/TransactionList";


const Data=[
  {
    name:'Catherine',
    balance:'5,000.00'
  }
]

const HomeScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     
      <View style={styles.head}>
      <LinearGradient
    colors={['#303549','#DBA84E']}
    style={{flex:1, 
    }}
>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:hp('2%'),padding:wp('3%')}}>
  <TouchableOpacity onPress={props.navigation.openDrawer}>
      <Image source={require('../assets/images/menuu.png')} style={styles.menu} />
      </TouchableOpacity>
      <Text style={styles.texta}>Hi {Data && Data[0].name}</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Notification")}>
<FontAwesome name="bell" size={18} color="#fff"/>
</TouchableOpacity>


      </View>
      {
                    Data.map( (item, index) => {

                        return (
                          <View style={{marginTop:hp('1%')}}>
      <View style={{marginLeft:wp('5%')}}>
      <Text style={styles.textb}>Balance</Text>
      <Text style={styles.textc}>${item.balance}</Text>
      </View>
      </View>
                        )
                    })
                  }


<Image source={require('../assets/images/Pattern.png')}
style={styles.img1}
/>
</LinearGradient>

</View>
<View style={{flex:3}}>
  <View style={{marginTop:hp('-3%')}}>
  <Category/>
  </View>
  <ScrollView
  showsVerticalScrollIndicator={false}
  >
  <Text style={styles.promo}>Promo For You</Text>
  <Promofor/>
  <View>
    <CartHome/>
  </View>
  <Text style={styles.textt}>Recent Transactions Activity</Text>
<TransactionList/>
  </ScrollView>
</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: hp("98%"),
    width: wp("100%"),
    backgroundColor: "#f6f7fc",
  },
  head:{
    flex:1,
    backgroundColor:'#494954'

  },
  img1:{
    height:hp('30%'),
    width:wp('100%'),
    marginTop:hp('-12%')

  },
  texta:{
    textAlign:'center',
    fontSize:18,
    fontFamily:Fonts.POPPINS_REGULAR,
    color:'#fff'

  },
  textb:{
    fontSize:16,
    fontFamily:Fonts.POPPINS_REGULAR,
    color:'#fff',

  },
  textc:{
    fontSize:25,
    fontFamily:Fonts.POPPINS_REGULAR,
    color:'#fff',

  },
  promo:{
    fontFamily:Fonts.POPPINS_SEMI_BOLD,
    fontSize:18,
    marginLeft:wp('5%'),
    marginTop:hp('2%')

  },
  textt:{
    fontFamily:Fonts.POPPINS_SEMI_BOLD,
    fontSize:18,
    marginLeft:wp('5%'),

  },
  btn: {
    marginTop: hp("12%"),
    width: wp("90%"),
    marginLeft: wp("5%"),
    height:hp('9%'),
    backgroundColor:'#27abaf',
    borderRadius:10
  },
  maletext: {
    fontSize: 15,
    marginLeft: wp("4%"),
    marginTop: hp("3%"),
    fontWeight: "bold",
    textAlign:'center',
    fontFamily: Fonts.POPPINS_MEDIUM,

  },
  btntext:{
    fontSize:25,
    color:'white',
    textAlign:'center',
    marginTop:hp('2%'),
    fontFamily: Fonts.POPPINS_MEDIUM,


  },
  view1: {
    height: hp("8%"),
    width: wp("25%"),
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: hp("2%"),
    marginLeft: wp("5%"),
    borderRadius:10
  },

  male: {
    
    marginTop: hp("2%"),
    marginLeft: wp("2%"),
  },
  // cal: {
  //   height: hp("10%"),
  //   width: wp("100%"),
  // },

  calender: {
    height: hp("5%"),
    width: wp("10%"),
    marginLeft: wp("75%"),
    marginTop: hp("1%"),
  },

  text1: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: wp("3%"),
    marginTop: hp("4%"),
  },
  bardesighn: {
    marginLeft: wp("2%"),
    
    marginTop: hp("2%"),
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: hp("14%"),
    marginLeft: wp("5%"),
    fontFamily: Fonts.POPPINS_BOLD,
    color:'black'

  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: hp("4%"),
    marginLeft: wp("5%"),
    fontFamily: Fonts.POPPINS_BOLD,
    color:'black'

  },
  textinput: {
    fontSize: 20,
    borderColor: "#229da2",
    borderWidth: 2,
    borderRadius: 6,
    width: wp("95%"),

    height: hp("7%"),
    backgroundColor: "white",
    marginLeft: wp("1%"),
    
  },
  textinput1: {
    fontSize: 25,
    height: hp("7%"),
    width: wp("95%"),
    backgroundColor: "white",
    marginLeft: wp("3%"),
    marginTop: hp("2%"),
    borderRadius: 8,
  },
  calender:{
    marginLeft:wp('83%'),
    marginTop:hp('1%')
  },
  menu:{
    height:hp('3%'),
    width:wp('6%'),
    
  },
  bell:{
    height:hp('2%'),
    width:wp('4%'),


  }
});

export default HomeScreen;
