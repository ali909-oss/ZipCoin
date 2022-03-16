import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import {Colors, Images, Fonts} from '../contants';
import {Display} from '../utils';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    },3500);
  }, []);

  return (
    <LinearGradient
    colors={['#303549', '#DBA84E']}
    style={{flex:1,    height:Display.setHeight(100),
    }}
>
  
    <View style={styles.container}>
     
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.PURE_WHITE}
        translucent
      />
      <Image source={require("../assets/images/Vectorr.png")}resizeMode="contain" style={styles.image} />
      <View style={{marginTop:hp('-40%'),flexDirection:'column',marginLeft:wp('1%')}}>
      <Image source={require("../assets/images/logo3.png")}resizeMode="contain" style={styles.image1} />


      </View>
      <Text style={styles.texta}>Family Oriented Money Transfer</Text>

      <Image source={require("../assets/images/foot.png")}resizeMode="contain" style={styles.image2} />

    </View>
    </LinearGradient>

  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    

  },
  image: {
    height: Display.setHeight(60),
    width: Display.setWidth(60),
    marginTop:hp('10%')
  },
  image1:{
    height: Display.setHeight(60),
    width: Display.setWidth(60),
    

  },
  image2:{
    height: Display.setHeight(50),
    width: Display.setWidth(50),

  },
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 32,
    fontFamily: Fonts.POPPINS_LIGHT,
    
  },
  texta:{
    fontSize:15,
    fontFamily:Fonts.POPPINS_REGULAR,
    color:'#fff',
    textAlign:'center',
    marginTop:hp('-25%')
  }
});

export default SplashScreen;
