import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import RadioForm from 'react-native-simple-radio-button';

const Data = [
    {
        price:'3.50',
        title:'Total Fee',
        image: require("../assets/images/cal.png"),

    },
    {
        price:'70.50',
        title:'Total Amount Charged',
        image: require("../assets/images/amount.png"),

    }
   
  ];




const Charges = () => {
    return(
        <View>
        {Data.map(data => {
           return(
            <View style={styles.main}>

               <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:hp('1%'),padding:wp('2%')}}>
                                     <Image source={data.image} style={styles.image1} />
                                     <Text style={styles.texta}>{data.title}</Text>
                                     <Text style={styles.textb}>{data.price} CAD</Text>

               </View>
               </View>
           )
        })
    }
    </View>
    )
}
export default Charges;
const styles=StyleSheet.create({
    main:{
        height:hp('8%'),
        width:wp('90%'),
        marginLeft:wp('5%'),
        borderRadius:10,
        borderColor:'#D7D7D7',
        borderWidth:2,
       
        marginBottom:hp('5%')
    },
    image1:{
        height:hp('3%'),
        width:wp('6%')
    },
    texta:{
        fontSize:16,
        fontFamily:Fonts.POPPINS_REGULAR
    },
    textb:{
        fontSize:17,
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    }

})