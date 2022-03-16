import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Entypo from "react-native-vector-icons/dist/Entypo";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WalletToWallet from "../components/Wtw";
import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import MyInfo from "../components/MyInfo";
import Otp from "../components/Otp";
import TwoFactor from "../components/TwoFactor";

const Profile = () => {
    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                        <AntDesign name="arrowleft" size={30} color="#fff"
                            style={{ marginLeft: wp('2%') }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.texta}>My Profile Setting</Text>
                </View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:hp('2%')}}>
          <View style={styles.profile}>
          
          <Image source={require('../assets/images/profile.png')} 
           style={styles.userimg}
           />

        
           </View>
           <View>
           <TouchableOpacity >
             

           <View style={{
            
                    height:hp('4%'),
                    width:wp('8%'),
                    borderRadius:30,
                    backgroundColor:Colors.DEFAULT_Color,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft:wp('18%'),
                    marginTop:hp('-3%')
                  
                  }}>
             <Entypo name={'camera'} size={15} color={'#ffffff'}/>
           </View>
           
           </TouchableOpacity>
           
                </View>
            
        </View>
        <Tab.Navigator
            swipeEnabled={false}




tabBarOptions={{
    
 
    

                indicatorStyle: {
                    backgroundColor: 'transparent'
                 },
tabStyle: {
marginTop:hp('1%'),

},
activeTintColor: '#fff',
activeBackgroundColor:'black',
         


pressColor:'#fff',
labelStyle: { textTransform: "none",fontSize: 16,fontFamily:Fonts.POPPINS_MEDIUM,borderColor:Colors.DEFAULT_Color,borderWidth:1,width:wp('33%'),height:hp('5%'),padding:hp('1%'),borderRadius:5,fontFamily:Fonts.POPPINS_MEDIUM,backgroundColor:Colors.DEFAULT_Color},
style: { backgroundColor: '#fff',shadowOpacity: 0,
elevation: 0,width:wp('100%'),},
}}>

<Tab.Screen name="My info" component={MyInfo} />
<Tab.Screen name="OTP" component={Otp} />
<Tab.Screen name="2FA" component={TwoFactor} />






</Tab.Navigator>  
        </View>
    )
}
export default Profile;
const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.DEFAULT_Color,
        height: hp('8%'),
        width: wp('100%'),
    },
    container: {
        height: hp('95%'),
        width: wp('100%'),
        backgroundColor: '#fff',
        
    },
    texta: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: '#fff',
        marginLeft: wp('20%')
    },
    textb: {
        fontSize: 17,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_Color,
        marginTop: hp('2%'),
        marginLeft: wp('2%')

    },
    profile:{
        width:wp('22%'),
        height:hp('11%'),
        borderRadius:50,
        backgroundColor:'#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
      
      },
      userimg:{
        
        width:wp('18%'),
        height:hp('10%'),
        resizeMode:'contain',
        
      
      },
})
