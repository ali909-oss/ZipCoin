import React from "react";
import { View,Text, Image,StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList  } from "@react-navigation/drawer";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { DrawerActions } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/dist/Entypo";
import { Colors, Fonts } from "../contants";
const Seperator = () => <View style={{ marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth:1}} />;

const CustomDrawer =(props,navigation) => {

    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView
         {...props}
         contentContainerStyle={{backgroundColor:'#fff',padding:10 , height:hp('100%')
        }}>

             <View style={{flexDirection:'row',justifyContent:'space-between',padding:wp('3%')}}>
                <Text style={styles.textt}>Menu</Text>
                <TouchableOpacity onPress={props.navigation.closeDrawer}>
                <Entypo name="cross" size={25} color={Colors.DEFAULT_Color}/>
                </TouchableOpacity>

            </View>

         

         <View style={{flex:1,marginTop:hp('0%')}}>
            <DrawerItemList {...props} />

            </View>
            
            
            
            

            </DrawerContentScrollView>
          
          
           
       </View>
        
    )
}

export default CustomDrawer;

const styles=StyleSheet.create ({
    imagehead: {
        height: hp('8%'),
        width: wp('15%'),
        borderRadius: 12,
        marginLeft:wp('-5%')



    },
    textt:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:Colors.DEFAULT_Color

    },
    texta:{
        fontWeight:'500',
        fontSize:18,
        color:'white',
        marginLeft:wp('-18%'),
        padding:4



    },
    phone:{
        fontWeight:'500',
        fontSize:14,
        color:'white',
        marginLeft:wp('-13%'),
        marginTop:hp('-2%')



    },
    close:{
        marginLeft:wp('10%')
    },
    foot:{
        width:wp('100%'),
        position:'absolute',
        zIndex:1
        
    }
   

})