import React ,{useEffect,useState} from 'react';
import { StyleSheet,View,Image,Text,FlatList,  Button,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {addToCart} from '../redux/Shopping/Shoppingaction'
import { connect } from 'react-redux';


const DATA=[
    {
        user_name:'Ali',
        id:'1',
        user_image:'https://reviewit.pk/wp-content/uploads/2020/04/hasnain-lehri-2-819x1024.jpg',        
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
 
    },
    {
        user_name:'Khurram',
        id:'2',
        user_image:'https://cdn.pixabay.com/photo/2015/06/26/18/40/person-822803_1280.jpg',        
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
    },
    {
        user_name:'Taha',
        id:'3',
        user_image:'https://i.guim.co.uk/img/media/733f8d96ae5603ed6189855b32684edc46aba932/0_543_1535_920/master/1535.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=046c12be3f539c1de8c2db3d337615b0',        
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
    },
    {
        user_name:'Bilal',
        id:'4',
        user_image:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',        
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        accessor: "Add To Cart"
    }

]


const Insta = () => {
   

    return(
        <View style={styles.container}>
            <FlatList
            data={DATA}
           
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <View style={{backgroundColor:'#e1eaed',borderRadius:19}}>
                                <Text style={styles.userName} >{item.user_name}</Text>
                    
<Image
                  style={styles.hImage}
                        source={{
                       uri: item.user_image,
                        }}
                  />

                    
                 <Text style={{fontSize:15,color:'black',marginLeft:wp('8'),marginRight:wp('6'),
        marginTop:hp('2')}}>{item.description}</Text>   
        
        
        <View style={{borderRadius:30,height: hp('10%'),
       width: wp('40%'), marginLeft:wp('30'),
       marginTop:hp('4')}}>
        <Button title="Add To Cart" >{item.accessor}</Button>
        </View>
                    
                </View>
            )
          
          
          }
          />
            
                    
            
                   

                </View>
                
               

         
            


)
}



export default Insta ; 

const styles = StyleSheet.create({
    container:{
       
       backgroundColor: '#e1eaed',
       height: hp('100%'),
       width: wp('100%')
 
    },
    card:{
        backgroundColor:'#fff',
        marginTop:hp('2'),

        

    },
    
    HeaderLeft:{
       flexDirection:'column',
    },
    hImage:{
        height: hp('50%'),
       width: wp('100%'),
       marginTop:hp('2'),


        
     
    },
    userName:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginLeft:wp('3'),
        marginTop:hp('2'),


    }
   
});