import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'; 
import Customer from './Customer';
import CreateCustomer from './CreateCustomer';
const Stack = createStackNavigator();
const CustomerScreen = () => {
    return ( 
            
      <Stack.Navigator>
           <Stack.Screen
           name="Customer"
           component={Customer}
           options={{ headerShown: false }}

         />
           <Stack.Screen
           name="CreateCustomer"
           component={CreateCustomer}
           options={{ headerShown: false }}

         />
        
         
        
       
         
          
         
             
            

          
        
           
     
   </Stack.Navigator>  
    )
}

export default CustomerScreen;