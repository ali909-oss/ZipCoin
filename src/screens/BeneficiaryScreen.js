import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'; 
import Beneficiary from './Beneficiary';
import CreateBenif from './CreateBenif';
const Stack = createStackNavigator();
const BeneficiaryScreen = () => {
    return ( 
            
      <Stack.Navigator>
           <Stack.Screen
           name="Beneficiary"
           component={Beneficiary}
           options={{ headerShown: false }}

         />
           <Stack.Screen
           name="CreateBenif"
           component={CreateBenif}
           options={{ headerShown: false }}

         />
        
         
        
       
         
          
         
             
            

          
        
           
     
   </Stack.Navigator>  
    )
}

export default BeneficiaryScreen;