import React from 'react';
import { View, useWindowDimensions,TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import RoundedButton from './RoundButton';
const Foter = ({
    onPress,
  backgroundColor,
  rightButtonLabel = true,
  rightButtonPress = true
}) => {
  

  return (
   
    <View
      style={{
        flexDirection: 'row',
        justifyContent:'center',
        width:widthPercentageToDP('100%'),
        height:heightPercentageToDP('6%'),
        backgroundColor:'#DBA84E' ,
        opacity: 1,
        alignItems: 'center',
      }}
    >

              <View style={{width:widthPercentageToDP('60%'),height:heightPercentageToDP('6%'),backgroundColor:'#fff',borderRadius:10,marginTop:heightPercentageToDP('-10%'),justifyContent:'center'}}>
              <RoundedButton label={rightButtonLabel} onPress={rightButtonPress} />

   </View>

    </View>
  );
};

export default Foter;