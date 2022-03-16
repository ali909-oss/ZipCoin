import React from 'react';
import { View, Text,StyleSheet ,Image,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Display } from '../utils';
import { Fonts } from '../contants';
import RoundedButton from './RoundButton';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
const WELCOME_CONTENTS = [
    {

        id:1,
      
        image: require("../assets/images/bro1.png"),
        title: 'Lorem imsum Dolar',
      content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit" ,
    button:'Get Started'
    },
]
const Page2 = ({ backgroundColor, iconName, rightButtonLabel = false,
    rightButtonPress = false }) => {
        const navigation=useNavigation();
  return (
      
    <LinearGradient
        colors={['#303549', '#DBA84E']}
        style={{flex:1}}
        
        
    >
        <View>
         
         {WELCOME_CONTENTS.map(data => {
            return(
                <View style={{justifyContent:'center',alignItems:'center',marginTop:heightPercentageToDP('10%')}}>
                    <Image style={styles.image} source={data.image} resizeMode="contain" />
                    <Text style={styles.titleText}>{data.title}</Text>
      <Text style={styles.contentText}>{data.content}</Text>         
                 </View>

      
           )
         }
         )}
            </View>
           

        </LinearGradient>
  );
};

export default Page2;
const styles=StyleSheet.create({
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
      texta:{
          fontSize:18,
          fontFamily:Fonts.POPPINS_MEDIUM,
          color:'#DBA84E'

      }

})