import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'; 
import KycScreen from '../screens/Kyc';


const Stack = createStackNavigator();
const KycStatus = () => {
    return ( 
            
      <Stack.Navigator>
           <Stack.Screen
           name="KycScreen"
           component={KycScreen}
           options={{ headerShown: false }}

         />
         
        
       
         
          
         
             
            

          
        
           
     
   </Stack.Navigator>  
    )
}

export default KycStatus;