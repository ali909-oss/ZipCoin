import React from "react";
import { View,StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <View className={styles.products}>
      {products.map((prod) => (
        <Product key={prod.id} productData={prod} />
      ))}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);

const styles = StyleSheet.create({
    container: {

        backgroundColor:'#B0C4DE',
        height:hp('100%'),
        width:wp('100%')


    },
})