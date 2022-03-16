import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Button, ScrollView, } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { Colors, Fonts } from "../contants";

const Data = [
    {
        title: 'You Have Pending email payment reclaim',
        id: '1',
        info: 'Tab here to reclaim'


    },
    {
        title: 'You Have Pending email payment reclaim',
        id: '1',
        info: 'Tab here to reclaim'

    },
    



]

const Promofor = ({ navigation }) => {
    return (
   
                <View >

                    <FlatList
                        data={Data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        legacyImplementation={false}
                        keyExtractor={(item) => { item.id }}
                        renderItem={({ item }) => {

                            return (

                                <View style={styles.main}>
                                    <Text style={styles.name}>{item.title}</Text>
                                    <Text style={styles.info}>{item.info}</Text>
                                    
                                </View>
                            )
                        }} />
                </View>




           
    )
}

export default Promofor;

const styles = StyleSheet.create({

    main: {
        height: hp('15%'),
        marginTop: hp('1%'),
        width: wp('70%'),
        padding: 5,
        backgroundColor:Colors.DEFAULT_Color,
        borderRadius: 10,
        marginLeft: wp('2%')
    },
    image1: {
        height: hp('6%'),
        width: wp('15%')
    },
    Imageholder: {
        flexDirection: 'row',
        marginTop: hp('4%'),


    },
    name: {
        fontSize: 16,
        marginTop: hp('1%'),
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:'#fff',

        padding: 5,
        
    },
    texta: {
        fontSize: 15,
        color: '#f8f8ff',
        fontWeight: 'bold'
    },
    sub: {
        fontSize: 12,
        padding: 5,
        color: 'black'
    },
    info: {
        fontSize: 14,
        padding: 2,
        color:'#fff',
        fontFamily:Fonts.POPPINS_SEMI_BOLD

    }

})