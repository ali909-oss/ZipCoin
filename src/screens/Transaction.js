import React ,{useState}from "react";
import { View, Text, StyleSheet ,TextInput,Image,TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import Transactions from "../components/Transactions";
import Modal from "react-native-modal";
import TransactionList from "../components/TransactionList";


import {useNavigation} from '@react-navigation/native';

const Transaction = () => {
    const navigation = useNavigation();
     // Modal
    
     const [isModalVisible, setModalVisible] = useState(false);
     const toggleModal = () => {
         setModalVisible(!isModalVisible);
         
       };
       const [isModalVisible1, setModalVisible1] = useState(false);
       const toggleModal1 = () => {
           setModalVisible1(!isModalVisible1);
           
         };
         const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {
            label: 'Abc',
            value: 'Abc',
        },
        {
            label: 'xyz',
            value: 'xyz',

        }
    ]);
    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [items1, setItems1] = useState([
        {
            label: 'Abc',
            value: 'Abc',
        },
        {
            label: 'xyz',
            value: 'xyz',

        }
    ]);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row',marginTop:hp('2%')}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                <AntDesign name="arrowleft" size={30} color="#fff"
                style={{marginLeft:wp('2%')}}
                />
                </TouchableOpacity>
            <Text style={styles.texta}>Transactions</Text>
            </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:wp('3%')}}>
                <Text style={styles.textb}>All Transaction</Text>
                <TouchableOpacity onPress={toggleModal}>
                <FontAwesome  name="filter" size={30} color={Colors.DEFAULT_Color}/>
                </TouchableOpacity>
            </View>
            <Modal style={styles.modal}

isVisible={isModalVisible}
animationType={"slide"}
onSwipeComplete={() => setModalVisible(false)}
swipeDirection="left"
onModalHide={() => {
    setModalVisible(false);
   console.log("First modal closed");
 }}



>
    <Text style={styles.textb}>Filters</Text>
    <View style={{marginTop:hp('1%')}}>
    <TextInput
                style={styles.input}
                placeholder="Date Range"
                placeholderTextColor={'#B5B5B5'}
                fontSize={18}
                padding={5}
                />
                </View>
                <View style={{marginTop:hp('1%')}}>

                <DropDownPicker
                    placeholder="Currency"
                    placeholderTextColor={'#B5B5B5'}
                fontSize={18}

                    style={styles.drop}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
                </View>
                <View style={{marginTop:hp('1%')}}>

                <DropDownPicker
                    placeholder="Type"
                    placeholderTextColor={'#B5B5B5'}
                fontSize={18}

                    style={styles.drop}
                    open={open1}
                    value={value1}
                    items={items1}
                    setOpen={setOpen1}
                    setValue={setValue1}
                    setItems={setItems1}
                />
                </View>
                <View style={{flexDirection:'row',marginTop:hp('2%')}}>
                <TouchableOpacity onPress={toggleModal}>
        <View style={styles.btn1}>
            <Text style={styles.textbtn1}>Clear Filters</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Recurring")}>
        <View style={styles.btn1}>
            <Text style={styles.textbtn1}>Apply</Text>
        </View>
        </TouchableOpacity>
        </View>
</Modal>
            <View style={{marginTop:hp('2%')}}>
            <TransactionList/>
            </View>
            </View>
)}
export default Transaction;
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
        marginLeft:wp('25%')
    },
    textb:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_SEMI_BOLD,
        color:Colors.DEFAULT_Color,

    },
    modal: {
        flex:0,
      
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: wp('5%'),
        height:hp('35%'),
        width:wp('90%'),
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('15%'),
        borderWidth:1,
        borderColor:'black'
        

    },
    drop: {
        width: wp('80%'),
        zIndex: 1,
        height: hp('6%'),
        borderWidth: 0.5,
        borderRadius: 10,
        elevation: 2,


        overflow: 'hidden',



    },
    input:{
        width:wp('80%'),
        height:hp('6%'),
        borderRadius:10,
        elevation:1,
        backgroundColor:'#fff',
        borderWidth:0.5

    },
    
    btn1:{
        height:hp('5%'),
        width:wp('40%'),
        borderWidth:2,
        borderColor:Colors.DEFAULT_Color,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.DEFAULT_Color,
        marginLeft:wp('2%')
    },
    
    textbtn1:{
        fontSize:15,
        color:'#fff',
        fontFamily:Fonts.POPPINS_REGULAR
    }


})
