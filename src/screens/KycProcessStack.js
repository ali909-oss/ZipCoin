import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'; 
import KycProcess from './KycProcess';
import KycProcessSteps from './KycProcessSteps';
const Stack = createStackNavigator();
const KycStack = () => {
    return ( 
            
      <Stack.Navigator>
           <Stack.Screen
           name="KycProcess"
           component={KycProcess}
           options={{ headerShown: false }}

         />
          <Stack.Screen
           name="KycProcessSteps"
           component={KycProcessSteps}
           options={{ headerShown: false }}

         />
         
         
        
       
         
          
         
             
            

          
        
           
     
   </Stack.Navigator>  
    )
}

export default KycStack;