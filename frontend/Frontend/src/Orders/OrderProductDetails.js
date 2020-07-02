/* eslint-disable */
import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { getURL } from "../../../axios";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const OrderProductDetails = ({route,navigation}) => {

    const brand = route.params.brand;
    const name = route.params.name;
    const desc = route.params.desc;
    const discount = route.params.discount;
    const SP = route.params.SP;
    const image = route.params.image;
    const size = route.params.size;
    const price = route.params.price;
    const color=route.params.color;
    const quantity = route.params.quantity;

    return (
        <View style={{backgroundColor:"#f5f5f5"}}>
            <View style={styles.productCard}>
                <Image
                style={styles.imageStyle}
                source={{ uri: getURL(image) }}
                />
                <View style={styles.detailsBox}>
                  <Text style={styles.brandName}>{brand.toUpperCase()}</Text>
                  <Text style={styles.nameDetails}>{name}</Text>
                  <Text style={styles.descDetails}>{desc}</Text>
                  <View style={{ flexDirection: "row",paddingLeft:1}}>
                    <Text style={styles.midStyle}>Size : {size} | </Text>
                    <Text style={styles.midStyle}>Qty : {quantity}</Text>
                  </View> 
                  <Text style={styles.colorStyle}>Color : {color}</Text>
                  <Text style={styles.priceText}>Price details :</Text>
                  <View style={styles.priceBox}>
                    <View style={{flexDirection:"row"}}>
                      <Text style={styles.priceDetails}>MRP :</Text>
                      <Text style={[styles.priceDetails,{marginLeft:75}]}>₹ {price.toFixed(2)}</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                      <Text style={styles.priceDetails}>Discount :</Text>
                      <Text style={[styles.priceDetails,{marginLeft:40}]}>(-)₹ {discount.toFixed(2)}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:"row"}}>
                    <Text style={[styles.brandName,{marginTop:2}]}>TOTAL :</Text>            
                    <Text style={[styles.brandName,{marginTop:2,marginLeft:50}]}>₹ {SP.toFixed(2)}</Text>
                  </View>
                  <Text style={{color:"#818181",fontSize:14}}>(including GST)</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  productCard: {
    height: 300,
    paddingLeft: 8,
    backgroundColor: "#ffffff",
    marginTop:height/2-190,
    flexDirection:"row"
  },
  imageStyle: {
    width: 100,
    height: 130,
    borderWidth: 2,
    borderColor: "#efefef",
    marginTop:10
  },
  detailsBox: {
    width: 100,
    height: 300,
    flex:1,
    paddingLeft:8,
    paddingHorizontal: 5,
    justifyContent:"center"
  },
  brandName: {
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 0.5,
    color:"#5e6269"
  },
  nameDetails: {
    color: "#4c4c4c",
    paddingVertical: 2,
    fontSize:15,
    marginTop:-4
  },
  descDetails: {
    color: "#818181",
    paddingVertical: 2,
    fontSize:14
  },
  midStyle: {
    paddingVertical: 5,
    color:"#818181"
  },
  colorStyle: {
    paddingBottom:5,
    color:"#818181"
  },
  priceBox:{
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:"#818181",
    width:width/2-5,
  },
  priceDetails:{
    color: "#818181",
    paddingTop:2,
    fontSize:15, 
    paddingVertical:3
  },
  priceText:{
    color: "#818181",
    paddingBottom:5,
    fontSize:15,
  }
});

export default OrderProductDetails;
