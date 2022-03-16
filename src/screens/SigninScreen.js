import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {Separator, ToggleButton} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts, Images} from '../contants';
import {Display} from '../utils';
import {AuthenicationService} from '../services';
import LottieView from 'lottie-react-native'; 
import {GeneralAction} from '../actions';

const SigninScreen = ({setToken}) => {
  const navigation = useNavigation();

  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const signIn = async () => {
    setIsLoading(true);
    let user = {
      username,
      password,
    };
    AuthenicationService.login(user).then(response => {
      setIsLoading(false);
      setToken(response?.data);
      if (!response?.status) {
        setErrorMessage(response?.message);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View>
      <Image style={styles.img} source={require('../assets/images/image3.jpg')} />
      </View>

    
      <Text style={styles.orText}>Lets Get Started</Text>
      <TouchableOpacity      onPress={() => navigation.navigate("Tabs")}

       style={styles.facebookButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.FACEBOOK} style={styles.signinButtonLogo} />
          </View>
          <Text style={styles.socialSigninButtonText}>
            Continue with Facebook
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.GOOGLE} style={styles.signinButtonLogo} />
          </View>
          <Text style={styles.socialSigninButtonText}>
          Continue with Google
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appleButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.Apple} style={styles.signinButtonLogo} />
          </View>
          <Text style={styles.socialSigninButtonText}>
          Continue with Apple
          </Text>
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  img:{
    width: Display.setWidth(100),
    height:Display.setHeight(70)


  },
  content: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: Colors.DEFAULT_BLACK,
    flex: 1,
  },
  forgotPasswordContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberMeText: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: "#00233F",
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  forgotPasswordText: {
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: "#00233F",
    fontFamily: Fonts.POPPINS_BOLD,
  },
  signinButton: {
    backgroundColor: "#31D0E6",
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signupContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signupText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_GREEN,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 5,
  },
  orText: {
    fontSize: 20,
    lineHeight: 15 * 1.4,
    color:'#308ad8',
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 5,
    alignSelf: 'center',
    marginTop:20
  },
  facebookButton: {
    backgroundColor: Colors.FABEBOOK_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  appleButton:{
    backgroundColor:'grey',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:8


  },
  googleButton: {
    backgroundColor: Colors.LIGHTCOLOR,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-6
  },
  signinButtonLogo: {
    height: 18,
    width: 18,
  },
  signinButtonLogoContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 2,
    borderRadius: 3,
    position: 'absolute',
    left: 25,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  socialSigninButtonText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 14,
    lineHeight: 13 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: Colors.DEFAULT_RED,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginHorizontal: 20,
    marginTop: 3,
    marginBottom: 10,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    setToken: token => dispatch(GeneralAction.setToken(token)),
  };
};

export default SigninScreen;
