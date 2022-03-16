import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Display} from '../utils';
import {Fonts, Colors, Images} from '../contants';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';


const WelcomeCard = ({title, content, image,button}) => {
  return (
    <LinearGradient
    colors={['#303549', '#DBA84E']}
    style={{flex:1}}
    
    
>
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode="contain" />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
      <TouchableOpacity >
      <View style={styles.back}>
      <Text style={styles.btntext}>{button}</Text>
      </View>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Display.setWidth(100),
    height:Display.setHeight(100)
  },
  image: {
    height: Display.setHeight(40),
    width: Display.setWidth(60),
  },
  titleText: {
    fontSize: 22,
    fontFamily: Fonts.POPPINS_BOLD,
    color:'#fff',
    marginTop:26
  },
  contentText: {
    fontSize: 15,
    fontFamily: Fonts.POPPINS_LIGHT,
    textAlign: 'center',
    marginHorizontal: 20,
    color:'#fff'
  },
  back:{
    width:widthPercentageToDP('60%'),
    height:heightPercentageToDP('6%'),
    backgroundColor:'#fff',
    borderRadius:10,
    marginTop:heightPercentageToDP('10%'),
    justifyContent:'center',
    alignItems:'center',
  },
  btntext:{
    color:"#DBA84E",
    fontFamily:Fonts.POPPINS_MEDIUM,
    fontSize:18
  }
});

export default WelcomeCard;
