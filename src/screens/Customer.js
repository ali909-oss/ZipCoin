import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image, TouchableOpacity,FlatList} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import { Table, Row, Rows } from 'react-native-table-component';

import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import Benefi from "../components/Beneficiaries";
import { Searchbar } from 'react-native-paper';


const DATA=[
    {
        id:'1',
        date:'2021/11/28 10:56:38',
        name:'Aziz Nepal',
        image: require("../assets/images/flag.png"),
        currency:'CAD'

        
       


        },
        {
        id: '2',
        date:'2021/11/28 10:56:38',
        name:'Aziz Nepal',
        image: require("../assets/images/flag.png"),
        currency:'CAD'



       
        

        },
        
        {
        id:'3',
        date:'2021/11/28 10:56:38',
        name:'Aziz Nepal',
        image: require("../assets/images/flag.png"),
        currency:'CAD'




       
       
        






        },
        {
            id:'4',
            date:'2021/11/28 10:56:38',
            name:'Aziz Nepal',
            image: require("../assets/images/flag.png"),
            currency:'CAD'




          
            
           
          





        },
]
const seprator=()=>{
    return (
    <View style={{height:2,backgroundColor:'#f1f1f1',width:wp('90%'),marginLeft:wp('5%')}}/>
    )
}
const Customer  = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row',marginTop:hp('2%')}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                <AntDesign name="arrowleft" size={30} color="#fff"
                style={{marginLeft:wp('2%')}}
                />
                </TouchableOpacity>
            <Text style={styles.texta}>Beneficiaries Summary Info</Text>
            </View>



            </View>
            <View style={{marginTop:hp('2%')}}>
            <Searchbar
      placeholder="Search Customers"
      style={{width:wp('90%'),marginLeft:wp('5%')}}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:hp('2%')}}>
                <Text style={styles.textb}>Beneficiaries </Text>
                <TouchableOpacity onPress={() => navigation.navigate("CreateCustomer")}>
        <View style={styles.btn1}>
            <View style={{flexDirection:'row'}}>
            

            <Text style={styles.textbtn1}>Customer</Text>
            <FontAwesome name="plus"  size={16} color="#fff"
            style={styles.icon}
            />
            </View>
        </View>
        </TouchableOpacity>
            </View>
           <View>
               <Benefi/>
           </View>
            </View>
    )}
    export default Customer ;
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
        marginLeft:wp('10%')
    },
    textb:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:Colors.DEFAULT_Color,

    },
    textt:{
        fontSize:16,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:'#000000'
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
    },
    
    textbtn1:{
        fontSize:15,
        color:'#fff',
        fontFamily:Fonts.POPPINS_MEDIUM
    },
    icon:{
        marginLeft:wp('2%'),
    marginTop:hp('0.5%')
    },
    image1:{
        height:hp('3%'),
        width:wp('8%')
    },
    main:{
        width:wp('95%'),
        backgroundColor:'#fff',
        marginLeft:wp('3%'),
        height:hp('7%'),
        elevation:2,
        
       
    },
    textbb:{
        fontSize:15,
        color:'black'
    }

})