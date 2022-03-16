import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'; 
import { HomeScreen } from '.';
import Send from './Send';
import SendOne from './SendOne';
import NewBenif from './NewBeneficiary';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import FinalSend from './FinalSend';
import KycStatus from './KycStatus';
import Notification from './Notifications';


const Stack = createStackNavigator();
const HomeStack = () => {
    return ( 
            
      <Stack.Navigator>
       
        
         <Stack.Screen
           name="."
           component={HomeScreen}
           options={{ headerShown: false }}

         />
           <Stack.Screen
           name="Send"
           component={Send}
           options={{ headerShown: false }}

          
         />
          <Stack.Screen
           name="SendOne"
           component={SendOne}
           headerShown={true}
           options={{ title: 'Send Money', headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#303549',
    
         } }}
         />
          <Stack.Screen
           name="NewBenif"
           component={NewBenif}
           options={{ headerShown: false }}

         />
         <Stack.Screen
           name="FinalSend"
           component={FinalSend}
           headerShown={true}
           options={{ title: 'Send Money', headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#303549',
    
         } }}
         />
          <Stack.Screen
           name="KycStatus"
           component={KycStatus}
           headerShown={true}
           options={{ title: 'KYC Status', headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#303549',
    
         } }}
         />
          <Stack.Screen
           name="Notification"
           component={Notification}
           headerShown={true}
           options={{ title: 'Notifications', headerTintColor: 'white',
            headerStyle: {
            backgroundColor: '#303549',
    
         } }}
         />
             
            

          
        
           
     
   </Stack.Navigator>  
    )
}

export default HomeStack;