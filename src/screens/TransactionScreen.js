import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'; 
import Transaction from './Transaction';
import Recurring from './RecurringTrans';
const Stack = createStackNavigator();
const TransactionScreen = () => {
    return ( 
            
      <Stack.Navigator>
           <Stack.Screen
           name="Transaction"
           component={Transaction}
           options={{ headerShown: false }}

         />
          <Stack.Screen
           name="Recurring"
           component={Recurring}
           options={{ headerShown: false }}

         />
         
        
       
         
          
         
             
            

          
        
           
     
   </Stack.Navigator>  
    )
}

export default TransactionScreen;