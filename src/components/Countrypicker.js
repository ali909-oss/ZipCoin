import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';


const Countrypicker = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  return (
    
      <View style={styles.container}>
         
          <PhoneInput
        textInputStyle={{height:hp('4%'),padding:4}}
        containerStyle={{elevation:2,width:wp('90%'),borderRadius:10}}
            defaultValue={value}
            defaultCode="CA"

            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
           
          />
          
      </View>
    
  );
};

export default Countrypicker;
const styles=StyleSheet.create({
    container:{
       
        

        

    },
   
  
   
})