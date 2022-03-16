import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'; 
import WalletScreen from './WalletScreen';
import Topup from './Topup';
import Fund from './Fund';
import WalletTransfer from './WalletTransfer';
const Stack = createStackNavigator();
const Wallet = () => {
    return ( 
            
      <Stack.Navigator>
           <Stack.Screen
           name="WalletScreen"
           component={WalletScreen}
           options={{ headerShown: false }}

         />
          <Stack.Screen
           name="Topup"
           component={Topup}
           options={{ headerShown: false }}

         />
          <Stack.Screen
           name="Fund"
           component={Fund}
           options={{ headerShown: false }}

         />
          <Stack.Screen
           name="WalletTransfer"
           component={WalletTransfer}
           options={{ headerShown: false }}

         />
         
        
       
         
          
         
             
            

          
        
           
     
   </Stack.Navigator>  
    )
}

export default Wallet;