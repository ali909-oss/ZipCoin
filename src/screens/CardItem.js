import React, { useState } from "react";
import { Button, View } from "react-native";
import { TextInput } from "react-native-paper";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../redux/Shopping/Shoppingaction";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <View style={styles.cartItem}>
     
      <View className={styles.cartItem__details}>
        <Text style={styles.details__title}>{item.title}</Text>
        <Text style={styles.details__desc}>{item.description}</Text>
        <Text style={styles.details__price}>$ {item.price}</Text>
      </View>
      <View style={styles.cartItem__actions}>
        <View className={styles.cartItem__qty}>
          <TextInput
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </View>
        <Button
          onPress={() => removeFromCart(item.id)}
          style={styles.actions__deleteItemBtn}
        >
          
          
        </Button>
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