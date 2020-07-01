/* eslint-disable */
import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { getURL } from "../../../axios";

const OrderProductCard = (props) => {
  let discount=(props.price * props.discountPercentage) / 100;
  let SP = props.price - discount;

  const withDiscount=()=>{
    return(
      <View style={styles.correctedPrice}>
        <Text style={styles.discountedPriceText}>₹ {SP.toFixed(2)}</Text>
        <Text style={styles.originalPriceText}>₹ {props.price}</Text>
        <Text style={styles.discountedPercentText}>
          ({props.discountPercentage}% off)
        </Text>
      </View>
    )
  };

  const withoutDiscount=()=>{
    return(
      <View style={styles.correctedPrice}>
        <Text style={styles.discountedPriceText}>₹ {SP.toFixed(2)}</Text>
      </View> 
    )
  };

  return (
    <TouchableOpacity onPress={()=>props.navigation.navigate("Product Details",
      {
        brand:props.brand,
        name:props.name,
        desc:props.desc,
        discount:discount,
        SP:SP,
        image:props.image,
        size:props.size,
        price:props.price,
        color:props.color,
        quantity:props.quantity
      }
    )}>
      <View style={styles.productCard}>
        <Image
          style={styles.imageStyle}
          source={{ uri: getURL(props.image) }}
        />
        <View style={styles.detailsBox}>
          <View style={styles.details}>
            <Text style={styles.brandName}>{props.brand.toUpperCase()}</Text>
            <Text numberOfLines={1} style={styles.productDetails}>{props.name}</Text>
            <View style={{ flexDirection: "row",marginTop:-5}}>
              <Text style={styles.sizeStyle}>Size : {props.size} | </Text>
              <Text style={styles.colorStyle}>Color : {props.color} | </Text>
              <Text style={styles.qtyStyle}>Qty : {props.quantity}</Text>
            </View>
            <View>
              {props.discountPercentage ? withDiscount() : withoutDiscount()}
            </View>
          </View>
        </View>
        <View style={styles.iconBox}>
          <AntDesign name="right" size={30} color="silver" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productCard: {
    marginVertical: 5,
    height: 150,
    flexDirection: "row",
    paddingLeft: 13,
    backgroundColor: "#ffffff",
    justifyContent:"center",
    alignItems:"center"
  },
  imageStyle: {
    width: 100,
    height: 130,
    borderWidth: 0.5,
    borderColor: "#efefef",
    marginBottom:8,
    marginTop:8,
    marginLeft:8
  },
  detailsBox: {
    width: 200,
    height: 150,
    justifyContent: "center",
    marginLeft:3
  },
  iconBox: {
    width: 40,
    height: 50,
    justifyContent: "center",
    marginLeft: 15,
  },
  details: {
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 7,
  },
  brandName: {
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 0.5,
    color:"#5e6269"
  },
  productDetails: {
    color: "#818181",
    paddingVertical: 10,
    paddingTop: -2,
    fontSize:15
  },
  sizeStyle: {
    paddingVertical: 5,
    color:"#818181"
  },
  colorStyle: {
    paddingVertical: 5,
    color:"#818181"
  },
  qtyStyle: {
    paddingVertical: 5,
    color:"#818181",
    marginLeft:0
  },
  discountedPriceText: {
    fontSize: 15.5,
    marginHorizontal: 8,
    fontWeight: "bold",
    color: "#494c52"
  },
  originalPriceText: {
    fontSize: 15,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#969a9d",
    marginHorizontal: 5,
    marginLeft:-1,
  },
  correctedPrice: {
    flexDirection: "row",
    marginLeft:-6,
    marginTop:7
  },
  discountedPercentText: {
    fontSize: 14,
    color: "#e27070",
    marginHorizontal: 2,
  },
});

export default OrderProductCard;
