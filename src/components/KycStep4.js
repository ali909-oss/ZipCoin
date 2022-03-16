import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image, TouchableOpacity,FlatList} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Fontisto from "react-native-vector-icons/dist/Fontisto";
import { Table, Row, Rows } from 'react-native-table-component';
import { Select ,Box,Center} from "native-base";
import { useNavigation } from '@react-navigation/native';

const Data=[
    {
        title:'Identity Document'

    },
    {
        title:'Address Document'


    },
    {
        title:'Selfie Document'


    }
]
const Seprator=()=>{

    return (
    <View style={{height:2,backgroundColor:'#f1f1f1',width:wp('90%'),marginLeft:wp('5%')}}/>
    )
}
const KycStep4 = () =>{
    const [iconName, setIconName] = useState("checkbox-passive");

    return(
        <View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assets/images/checktick.png')}
            style={styles.check}
            />
            </View>
            <View style={{marginTop:hp('1%'),justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.texta}>Thank You!</Text>
            <Text style={styles.textb}>We are Currently Checking your data!</Text>
           <Text style={styles.textc}>The Verification status will update automatically</Text>
            </View>
            <Seprator/>
            <View style={{marginTop:hp('5%')}}>
            <FlatList
            data={Data}
            ItemSeparatorComponent={Seprator}

            keyExtractor={(item) => { item.id }}
            renderItem={({ item }) => {
                
                return (
                    <View>
                          
                            <View style={styles.main}>
                                <View style={{flexDirection:'row',marginTop:hp('2%'),marginLeft:wp('3%')}}>
                                <TouchableOpacity onPress={() => {
              if(iconName === "checkbox-passive" ){
              setIconName("checkbox-passive")
              }
              if(iconName === "checkbox-passive"){
                setIconName("checkbox-active")
              }
            }
            }> 
            <Fontisto name={iconName} size={25} color={Colors.DEFAULT_Color}  />
            </TouchableOpacity>
                                    <Text style={styles.textaa}>{item.title}</Text>
                                    </View>
                                    </View>
                                    </View>
                )}
            }
            />
            </View>
            

        </View>
    )
}
export default KycStep4;
const styles=StyleSheet.create({
    check:{
        width:wp('20%'),
        height:hp('10%')
    },
    texta:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    textaa:{
        fontSize:18,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        marginLeft:wp('5%')
    },
    textb:{
        fontSize:16,
        fontFamily:Fonts.POPPINS_MEDIUM
    },
    textc:{
        fontSize:14,
        fontFamily:Fonts.POPPINS_REGULAR,
        padding:5
    },
    main:{
        marginBottom:hp('3%'),
        
    }

})