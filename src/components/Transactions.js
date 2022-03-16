import React from "react";
import { View,Text,FlatList,Image,TouchableOpacity,StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from "react-native-responsive-screen";
import { Fonts } from "../contants";

const DATA=[
    {
        id:'1',
        date:'2021/11/28 10:56:38',
        Id:'6789765',
        amount:'$4.5',
        currency:'CAD'

        
       


        },
        {
        id: '2',
        date:'2021/11/28 10:56:38',
        Id:'6789765',
        amount:'$4.5',
        currency:'CAD'



       
        

        },
        
        {
        id:'3',
        date:'2021/11/28 10:56:38',
        Id:'6789765',
        amount:'$4.5',
        currency:'CAD'




       
       
        






        },
        {
            id:'4',
            date:'2021/11/28 10:56:38',
            Id:'6789765',
            amount:'$4.5',
            currency:'CAD'




          
            
           
          





        },
]
const seprator=()=>{
    return (
    <View style={{height:2,backgroundColor:'#f1f1f1',width:wp('90%'),marginLeft:wp('5%')}}/>
    )
}
const Transactions =() =>{
    return(
        <View>
        <View style={{flexDirection:'row'}}>
        <Text style={{ fontSize:15,color:'#77767E',marginLeft:wp('6%')}}>Date Time</Text>
        <Text style={{ fontSize:15,color:'#77767E',marginLeft:wp('25%')}}>ID</Text>
        <Text style={{ fontSize:15,color:'#77767E',marginLeft:wp('10%')}}>Amount</Text>
        <Text style={{ fontSize:15,color:'#77767E',marginLeft:wp('5%')}}>Currency</Text>

     
     </View>
        <View style={{ marginTop: hp("1%") , }}>
        <FlatList
            data={DATA}
            nestedScrollEnabled={true}
            ItemSeparatorComponent={seprator}

            keyExtractor={(item) => { item.id }}
            renderItem={({ item }) => {
                
                return (
                    <View>
                          
                            <View style={styles.main}>
                                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:hp('1%')}}>
                                    <Text style={styles.textb}>{item.date}</Text>
                                    <Text style={styles.textb}>{item.Id}</Text>
                                    <Text style={styles.textb}>{item.amount}</Text>
                                    <Text style={styles.textb}>{item.currency}</Text>
                                </View>

                            </View>
                            </View>
                )
            }}
            />
            </View>
            </View>
    )
}
export default Transactions;
const styles = StyleSheet.create({
    container: {
      height: hp("100%"),
      width: wp("100%"),
      backgroundColor: "#f6f7fc",
    },
    image1:{
        height:hp('5%'),
        width:wp('10%'),
        marginLeft:wp('15%'),
        marginTop:hp('3%')

    },
    main:{
        width:wp('90%'),
        backgroundColor:'#fff',
        marginLeft:wp('5%'),
        height:hp('6%'),
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
    texta:{
        fontSize:16,
        color:'#77767E'
    },
    textb:{
        fontSize:15,
        color:'black'
    }
})
