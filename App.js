import React from 'react';
import Navigators from './src/navigators';
import Store from './src/Store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Appstack from './src/navigators/AppStack';
export default () => (

   <NavigationContainer>
     <Appstack/>
   </NavigationContainer>

);
