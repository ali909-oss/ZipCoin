import React ,{useEffect,useState}from 'react';
import { StyleSheet, View, Image, Text, FlatList, Button, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {addToCart} from '../redux/Shopping/Shoppingaction'
import { connect } from 'react-redux';


import { Fonts } from '../contants';
import { fontSize } from 'styled-system';
import { TouchableOpacity } from 'react-native-gesture-handler';
const DATA = [
    
    {
        user_name: 'Shoes',
        id: '1',
        user_image: require('../assets/images/dow.jpg'),
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"

    },
    {
        user_name: 'Jackets',
        id: '2',
        user_image: require('../assets/images/dow2.jpg'),
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
    },
    {
        user_name: 'T-Shirt',
        id: '3',
        user_image: require('../assets/images/dow3.jpg'),
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
    },
    {
        user_name: 'Shirts',
        id: '4',
        user_image: require('../assets/images/dow4.jpg'),
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
    },
    {
        user_name: 'Mobile',
        id: '5',
        user_image: require('../assets/images/dow5.jpg'),
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
    },
    {
        user_name: 'Pents',
        id: '6',
        user_image: require('../assets/images/dow6.jpg'),
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
    }

]



const Insta = ({addToCart,cart}) => {
        const [cartCount, setCartCount] = useState(0);
       
        
        
       
     
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row'}}>
            
            <Text  style={styles.texthead}>Products</Text>
            </View>
            <TouchableOpacity >
            <View style={{marginLeft:hp('30%')}}>

            <View style={styles.mycart}>
               <Text style={{fontSize:25}}>Cart</Text>
                <Image style={{height:35,width:35}} source={require('../assets/images/cart.png')} />
                <Text style={styles.cart__counter}>{cartCount}</Text>

                
                
                </View>
                </View>
                </TouchableOpacity>
                </View>
            <View style={{ marginTop: hp('5%'),height:hp('90%') }}>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.main}>
                            <Text style={styles.userName} >{item.user_name}</Text>

                            <Image
                                style={styles.hImage}
                                source={item.user_image}
                            />


                            <Text style={{
                                fontSize: 15, color: 'black', marginLeft: wp('4%'), marginRight: wp('3%'),
                                marginTop: hp('2')
                            }}>{item.description}</Text>


                            <View style={{
                                borderRadius: 30, height: hp('20%'),
                                width: wp('40%'), marginLeft: wp('20%'),
                                marginTop: hp('2%')
                            }}>
                                <Button title="Add To Cart" onPress={() => addToCart(product.id)} style={{ backgroundColor: 'black' }}>{item.accessor}</Button>
                            </View>

                        </View>
                        
                    )


                    }
                />
            





            </View>
            </View>






    )
}

const mapDispatchToProps = dispatch => {
    return{
        addToCart: (id) => dispatch(addToCart(id))
    }
}


  


export default connect(mapDispatchToProps,) (Insta) ; 
const styles = StyleSheet.create({
    container: {

        backgroundColor:'#B0C4DE',
        height:hp('100%'),
        width:wp('100%')


    },
    header:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:15,
        color:'white'
    },
    card: {
        backgroundColor: '#fff',
        marginTop: hp('2'),



    },
    
    texthead:{
        fontSize:25,
        fontWeight:'700',
        color:'#4d4d4d',
        marginTop: hp('10%'),
        fontFamily:'Poppins'



  },
  mycart:{
    backgroundColor: '#fff',
    width: 120,
    height:60,
    borderRadius: 15,
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    
    padding: 0.5,

  },
  cart:{
      height:50,
      width:10,
      resizeMode:'contain',
      marginLeft:wp('5%')

  },

    HeaderLeft: {
        flexDirection: 'column',
    },
    hImage: {
        height: hp('22%'),
        width: wp('35%'),
        




    },
    main:{
        height: hp('50%'),
        marginTop: hp('3%'),
        marginLeft:wp('5%'),

        
       
        width: wp('90%'),
        padding:15,
        marginBottom:-4,
        borderRadius:19,
        backgroundColor:'white'
    },
    userName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: wp('3'),
        padding:5,
        marginTop: hp('2'),
        fontFamily: Fonts.POPPINS_MEDIUM



    },
    cart__counter: {
        
        borderRadius:10,
        color:'red',
        display:'flex',
        backgroundColor:'white',
        fontSize: 24,
       justifyContent:'flex-end',
        textAlign:'center',
        
      }

});