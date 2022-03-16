import React from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { Fonts } from '../contants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RoundedButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={{ alignItems: 'center', justifyContent: 'center' }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 20, color: '#DBA84E',fontFamily:Fonts.POPPINS_MEDIUM,textAlign:'center'}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;