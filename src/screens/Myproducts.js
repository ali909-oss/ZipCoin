import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";

const Stack = createStackNavigator();

function Myproducts() {
  return (
    <Stack.Navigator >
      
      <Stack.Screen 
      name="products" 
      component={Products} 
      options={{ headerShown: false }} 
      />
       <Stack.Screen
       name="Cart" 
       component={Cart}
       options={{ headerShown: false }} 
        />
      
    
    </Stack.Navigator>
  );
}

export default Myproducts;
