import React , { useRef } from 'react';
import { View ,Text,StyleSheet,Image,TouchableOpacity,StatusBar} from 'react-native';
import PagerView from 'react-native-pager-view';
import Page from '../components/Page';
import {Display} from '../utils';
import { Fonts } from '../contants';
import LinearGradient from 'react-native-linear-gradient';
import Page2 from '../components/Page2';
import Foter from '../components/Footer';
import Page3 from '../components/Page3';
import { useNavigation } from '@react-navigation/native';

const Onboarding = ({title, content, image,button}) => {
    const pagerRef = useRef(null);

    const handlePageChange = pageNumber => {
      pagerRef.current.setPage(pageNumber);
    };
    const navigation = useNavigation();

  return (
     

    <View style={{ flex: 1 }}>
      <PagerView style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key="1">
        <Page
        
        />
        <Foter
            rightButtonLabel="Next"
            
            rightButtonPress={() => {
                handlePageChange(1);}}
          />
        
      
        </View>
        <View key="2">
        <Page2
        
        />
         <Foter
            rightButtonLabel="Next"
            
            rightButtonPress={() => {
                handlePageChange(2);}}
          />
        
      
        </View>
        <View key="3">
        <Page3
        
        />
         <Foter
            rightButtonLabel="Get Started"
            
            rightButtonPress={() => {
                navigation.navigate('HomeStack');}}
          />
        
      
        </View>
      </PagerView>
    </View>
  );
};

export default Onboarding;
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

})