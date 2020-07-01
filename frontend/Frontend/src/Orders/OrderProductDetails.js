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
    const quantity = route.params.quantity;

    return (
        <View style={{backgroundColor:"#FFFAFA",height:height}}>
            <View style={styles.productCard}>
                <View style={{flexDirection:"row"}}>
                    <Image
                    style={styles.imageStyle}
                    source={{ uri: getURL(image) }}
                    />
                    <View style={styles.detailsBox}>
                        <View style={styles.details}>
                            <Text style={styles.brandName}>{brand.toUpperCase()}</Text>
                            <Text style={styles.productNameDetails}>{name}</Text>
                            <Text style={styles.productDescDetails}>{desc}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.sizeStyle}>SIZE : {size}   |   </Text>
                                <Text style={styles.qtyStyle}>QTY : {quantity}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.priceDetails}>
                    <Text style={styles.priceText}>Price details :</Text>
                </View>
                <View style={styles.priceBox}>
                    <Text style={styles.line}>________________________________</Text>
                    <Text style={styles.headingDetails}>MRP :                        ₹ {price.toFixed(2)}</Text>
                    <Text style={styles.headingDetails}>Discount :               (-)₹ {discount.toFixed(2)}</Text>
                    <Text style={styles.line}>________________________________</Text>
                    <Text style={{fontWeight:"bold",fontSize:18,fontFamily:"sans-serif"}}>TOTAL :                ₹ {SP.toFixed(2)}</Text>
                    <Text style={{fontSize:14,fontFamily:"sans-serif-thin",fontWeight:"bold"}}>(including GST)</Text>
                    <Text style={styles.line}>________________________________</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  productCard: {
    marginVertical: 5,
    height: 300,
    paddingLeft: 10,
    backgroundColor: "#F0FFFF",
    borderWidth: 1,
    borderColor: "silver",
    marginTop:height/2-190,
    width:width
  },
  imageStyle: {
    width: 100,
    height: 130,
    borderWidth: 1,
    borderColor: "silver",
    marginBottom:8,
    marginTop:20
  },
  detailsBox: {
    // borderWidth: 1,
    width: 300,
    height: 300,
    justifyContent: "center",
    flex:1,
    marginTop:-70,
    marginLeft:8,
  },
  details: {
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 7,
  },
  brandName: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 2,
    letterSpacing: 0.5,
  },
  productNameDetails: {
    color: "#585858",
    fontSize: 16
  },
  productDescDetails: {
    color: "#585858",
    paddingVertical: 4,
    paddingTop: -2,
    fontSize: 15
  },
  sizeStyle: {
    width: "50%",
    fontFamily:"sans-serif-medium",
    paddingVertical: 5,
    color:"grey",
    fontSize:15
  },
  qtyStyle: {
    width: "50%",
    fontFamily:"sans-serif-medium",
    paddingVertical: 5,
    color:"grey",
    marginLeft:-47,
    fontSize:15
  },
  priceBox:{
      marginLeft:115,
      marginTop:-25
  },
  priceDetails:{
      marginTop:-70
  },
  headingDetails:{
    fontSize:17,
    fontFamily:"sans-serif-thin",
    fontWeight:"bold"
  },
  priceText:{
    fontSize:18,
    fontFamily:"sans-serif-thin",
    fontWeight:"bold"
  },
  line:{
      marginTop:-8,
      marginBottom:2,
      color:"silver",
  }
});

export default OrderProductDetails;
