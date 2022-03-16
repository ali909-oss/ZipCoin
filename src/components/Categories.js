import React ,{useState}from "react";
import { View, Text, StyleSheet, Image,FlatList,TouchableOpacity } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import { useNavigation } from '@react-navigation/native';
import { Colors, Fonts } from "../contants";
const Data=[
    {
        name: 'Send',
        id: '1',
      image: require("../assets/images/Sendd.png"),
      page:'Send'

    },
    {
        name: 'Fund',
        id: '2',
        image: require("../assets/images/fund.png"),
        page:'KycStack'


    },
    {
        name: 'Topup',
        id: '3',
        image: require("../assets/images/Topup.png"),


    },
    {
        name: 'Schedule',
        id: '4',
        image: require("../assets/images/Schedule.png"),


    },
]

const Category = () => {
    const navigation = useNavigation();
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
      setStatus(ss);
    }
    console.log(Status);

    return (
        <View style={styles.main}>
        {Data.map(data => (
           
          <View
            style={{
             
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:hp('3%'),
                width: widthPercentageToDP('22%'),
                height:hp('4%'),
                borderRadius: 10, 
                marginBottom:15
                                
            }}>
            <TouchableOpacity onPress={() => navigation.navigate(data.page)}>
              <View
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <View
                  style={[
                    Status === data.name ? styles.cont : styles.mainview,
                  ]}>
                    <View style={styles.backimg}>
                  <Image source={data.image} style={styles.image1} />
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    textAlign: 'center',
                    fontFamily:Fonts.POPPINS_SEMI_BOLD,
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  {data.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
           
       
        


            
        </View>
    )
}

export default Category;

const styles = StyleSheet.create({
    
    main:{
        height: hp('13%'),
        width: wp('90%'),
        padding:5,
        marginBottom:-4,
        backgroundColor:'white',
        borderRadius:19,
        marginLeft:wp('5%'),
        borderWidth:0.5,
        flexDirection:'row'
    },
    image1:{
        height:hp('3%'),
        width:wp('6%'),
    },
    Imageholder: {
        flexDirection: 'row',
        justifyContent:'center',alignItems:'center',
        marginTop:hp('4%'),


    },
    name:{
        fontSize:14,
        marginTop:hp('2%'),
        fontWeight:'bold',
        
    },
    backimg:{
      width:wp('10%'),
      height:hp('5%'),
      borderRadius:10,
      backgroundColor:Colors.DEFAULT_Color,
      justifyContent:'center',
      alignItems:'center'
    }

})