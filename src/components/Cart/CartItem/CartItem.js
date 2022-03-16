import React, { useState } from "react";
import { View,Text, Image, Button ,StyleSheet} from "react-native";
import { Input } from "react-native-elements/dist/input/Input";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/Shoppingaction";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <View style={styles.cartItem}>
      <Image
        style={styles.cartItem__image}
        source={item.image}
      />
      <View style={styles.cartItem__details}>
        <Text style={styles.details__title}>{item.title}</Text>
        <Text style={styles.details__desc}>{item.description}</Text>
        <Text style={styles.details__price}>{item.price}</Text>
      </View>
      <View style={styles.cartItem__actions}>
        <View style={styles.cartItem__qty}>
          <Text>Qty</Text>
          <Input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </View>
       
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

const styles = StyleSheet.create({
    container: {

        height:hp('100%'),
        width:wp('100%'),
        


    },
    cartItem :{
    
      margin: 1,
      display:'flex',
      borderRadius:10
      
    },
    cartItem__image:{
      width: 350,
      borderRadius:20
      
    },
    cartItem__details :{
      padding: 1,
      display: 'flex',
      flexDirection:'column',
      justifyContent:'space-between'
    },
    details__title:{
      fontSize:16,
      fontWeight:'bold'

    },
    details__desc:{
      fontSize:16

    },
    details__price:{
      fontSize:16,
      fontWeight:'bold'

    },
    cartItem__actions:{
      display: 'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      alignItems:'center',
      padding:3
     

    },
    cartItem__qty:{
      display:'flex',
      alignItems:'center'

    }

    
   
})