/* eslint-disable */
import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, Icon } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { getURL } from "../../../axios";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

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
        <View style={{backgroundColor:"#f5f5f5"}}>
          <View style={styles.orderCard}>
              <View style={{flexDirection:"row"}}>
                  <Text style={[styles.headingDetails,{marginTop:5}]}>Placed on : {" "}</Text>
                  <Text style={[styles.info,{marginTop:8}]}>
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
                <Text style={styles.headingDetails}>Order No.  :</Text>
                <Text style={styles.info}>  {_id}</Text>
              </View>
              <Text style={styles.headingDetails}>Bill details :</Text>
              <View style={styles.priceBox}>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.mrpDetails}>MRP :</Text>
                  <Text style={[styles.mrpDetails,{marginLeft:85}]}>₹ {amount.toFixed(2)}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.mrpDetails}>Delivery charges :</Text>
                  <Text style={[styles.mrpDetails,{marginLeft:7}]}>₹ {deliveryCharge.toFixed(2)}</Text>
                </View>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={[styles.info,{marginLeft:83,marginTop:2}]}>TOTAL :</Text>
                <Text style={[styles.info,{marginLeft:63,marginTop:2}]}>₹ {total.toFixed(2)}</Text>
              </View>
              <Text style={[styles.headingDetails,{marginLeft:83,marginTop:-5}]}>(including GST)</Text>
              <View style={[styles.infoBox,{marginTop:9}]}>
                <Text style={styles.headingDetails}>Shipping Address :</Text>
                <Text style={styles.name}>{name.toUpperCase()}</Text>
                <Text style={styles.boxDetails}>{address}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headingDetails}>Payment mode :</Text>
                <Text style={[styles.boxDetails,{marginTop:2}]}>{method}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.headingDetails}>Any Queries ?</Text>
                <Text style={[styles.boxDetails,{marginTop:3}]}>
                    <FontAwesome name="phone" style={styles.phone}/>
                    {"  "}8055025499
                </Text>
                <Text style={styles.boxDetails}>
                    <FontAwesome name="envelope-o" style={styles.email}/>
                    {"  "}tiptopnx@gmail.com
                </Text>
              </View>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  orderCard: {
    height: 454,
    paddingLeft: 10,
    backgroundColor: "#ffffff",
    marginTop:height/2-266
  },
  priceBox:{
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:"#818181",
    width:width/2+15,
    marginLeft:83,
    marginTop:-12
  },
  priceDetails:{
    marginTop:-70
  },
  headingDetails:{
    color: "#818181",
    paddingVertical: 2,
    fontSize:15
  },
  mrpDetails:{
    color:"#666666",
    paddingVertical: 2,
    fontSize:15
  },
  boxDetails:{
    color:"#4c4c4c",
    paddingVertical: 3,
    fontSize:15,
    marginTop:-4
  },
  name:{
    fontWeight: "bold",
    fontSize: 15,
    color:"#5e6269",
    marginTop:4
  },
  info:{
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 0.5,
    color:"#5e6269",
    marginTop:2,
  },
  priceText:{
    fontSize:18,
    fontFamily:"sans-serif-thin",
    fontWeight:"bold"
  },
  phone:{
      fontSize:16,
      color:"black",
  },
  email:{
      fontSize:16,
      color:"black"
  },
  infoBox:{
    borderTopWidth:1,
    borderColor:"#818181",
    paddingVertical:10,
    width:width-20
  }
});

export default OrderProductDetails;
