import React,{useState,useEffect} from "react";
import { Text,View,Button ,StyleSheet,TouchableOpacity,Image,FlatList} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Redux
import { connect } from "react-redux";

const CartCount = ({cart,navigation}) => {
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
          count += item.qty;
        });
    
        setCartCount(count);
      }, [cart, cartCount]);
    

  return (
    <View style={styles.mycart}  >
    <Text style={{fontSize:25}}>Cart</Text>
     <Image style={{height:35,width:35}} source={require('../assets/images/cart.png')} />
     <Text style={styles.cart__counter}>{cartCount}</Text>

     
     
     </View>
  )
}

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
  export default connect(mapStateToProps)(CartCount);
  const styles = StyleSheet.create({

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
  cart__counter: {
        
    borderRadius:10,
    color:'red',
    display:'flex',
    backgroundColor:'white',
    fontSize: 24,
   justifyContent:'flex-end',
    textAlign:'center',
    
  }
  })