import React, { useState, useEffect } from "react";
import { Button, Text, View,StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";
const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <View style={styles.cart}>
      <View style={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </View>
      <View style={styles.cart__summary}>
        <Text style={styles.summary__title}>Cart Summary</Text>
        <View className={styles.summary__price}>
          <Text>TOTAL: ({totalItems} items)</Text>
          <Text>Price:{totalPrice} </Text>
        </View>
        <Button title="          Proceed To Checkout
" style={styles.summary__checkoutBtn}>
        </Button>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);

const styles = StyleSheet.create({
    container: {

        backgroundColor:'#B0C4DE',
        height:hp('100%'),
        width:wp('100%')


    },
})