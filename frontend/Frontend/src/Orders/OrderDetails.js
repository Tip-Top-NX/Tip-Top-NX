/* eslint-disable */
import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, Icon } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { getURL } from "../../../axios";

const height = Dimensions.get("window").height;

const OrderProductDetails = ({route,navigation}) => {

    const _id = route.params._id;
    const amount = route.params.amount;
    const deliveryCharge = route.params.deliveryCharge;
    const status = route.params.status;
    const method = route.params.method;
    const orderDate = route.params.orderDate;
    const name = route.params.name;
    const address = route.params.address;

    let total=amount+deliveryCharge;

    return (
        <View style={styles.orderCard}>
            <View style={{flexDirection:"row"}}>
                <Text style={[styles.headingDetails,{marginTop:5}]}>Placed on : {" "}</Text>
                <Text style={[styles.info,{marginTop:5}]}>
                    {orderDate.charAt(8)}
                    {orderDate.charAt(9)}
                    /
                    {orderDate.charAt(5)}
                    {orderDate.charAt(6)}
                    /
                    {orderDate.charAt(0)}
                    {orderDate.charAt(1)}
                    {orderDate.charAt(2)}
                    {orderDate.charAt(3)}
                </Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.headingDetails}>Order No. :</Text>
                <Text style={styles.info}>  {_id}</Text>
            </View>
            <Text style={styles.headingDetails}>Billing details :-</Text>
            <View style={styles.priceBox}>
                <Text style={styles.line}>________________________________</Text>
                <Text style={styles.headingDetails1}>MRP :                        ₹ {amount.toFixed(2)}</Text>
                <Text style={styles.headingDetails1}>Delivery charges :  ₹ {deliveryCharge.toFixed(2)}</Text>
                <Text style={styles.line}>________________________________</Text>
                <Text style={{fontWeight:"bold",fontSize:18,fontFamily:"sans-serif"}}>TOTAL :                ₹ {total.toFixed(2)}</Text>
                <Text style={{fontSize:14,fontFamily:"sans-serif-thin",fontWeight:"bold"}}>(including GST)</Text>
            </View>
            <Text style={styles.line}>_____________________________________________________</Text>
            <Text style={styles.headingDetails}>Shipping Address :</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.headingDetails1}>{address}</Text>
            <Text style={styles.line}>_____________________________________________________</Text>
            <Text style={styles.headingDetails}>Payment mode :</Text>
            <Text style={styles.headingDetails1}>{method}</Text>
            <Text style={styles.line}>_____________________________________________________</Text>
            <Text style={styles.headingDetails}>Any Queries ?</Text>
            <Text style={styles.iconRow}>
                <FontAwesome name="whatsapp" style={styles.whatsapp}/>
                {"  "}8055025499
            </Text>
            <Text style={styles.iconRow}>
                <FontAwesome name="envelope-o" style={styles.email}/>
                {"  "}tiptopnx@gmail.com
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
  orderCard: {
    height: height,
    paddingLeft: 10,
    backgroundColor: "#FFFAFA",
  },
  priceBox:{
    marginLeft:60,
  },
  priceDetails:{
    marginTop:-70
  },
  headingDetails:{
    fontSize:17,
    fontFamily:"sans-serif-thin",
    fontWeight:"bold",
    color:"grey",
  },
  headingDetails1:{
    fontSize:17,
    fontFamily:"sans-serif-thin",
    fontWeight:"bold",
  },
  name:{
    fontSize:19,
    fontFamily:"sans-serif-condensed",
    fontWeight:"bold",
    marginTop:7
  },
  info:{
    fontSize:17,
    fontFamily:"sans-serif",
    fontWeight:"bold",
    color:"black"
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
    fontWeight:"bold"
  },
  iconRow:{
    fontSize:17,
    fontFamily:"sans-serif-thin",
    fontWeight:"bold",
    flexDirection:"row",
    marginTop:5
  },
  whatsapp:{
      fontSize:24,
      color:"green",
  },
  email:{
      fontSize:22,
      color:"#2874A6"
  }
});

export default OrderProductDetails;
