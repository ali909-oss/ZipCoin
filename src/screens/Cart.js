import { Button, View,Text } from "react-native";
import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import CardItem from "./CardItem";

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
          <CardItem key={item.id} item={item} />
        ))}
      </View>
      <View style={styles.cart__summary}>
        <Text className={styles.summary__title}>Cart Summary</Text>
        <View style={styles.summary__price}>
          <Text>TOTAL: ({totalItems} items)</Text>
          <Text>$ {totalPrice}</Text>
        </View>
        <Button style={styles.summary__checkoutBtn}>
          Proceed To Checkout
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