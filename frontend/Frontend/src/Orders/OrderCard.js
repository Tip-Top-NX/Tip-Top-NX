import React from "react";
import { View, StyleSheet, Text, Dimensions, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import OrderProductCard from "./OrderProductCard";

const width = Dimensions.get("window").width;

const OrderCard = (props) => {
  
  return (
    <View style={styles.orderBox}>
      <View style={{flexDirection:"row",marginTop:-2,paddingVertical:2}}>
        <FontAwesome name="address-card" style={styles.address}/>
        <Text style={{ paddingLeft: 10, paddingBottom: 5,fontSize:16 }}>
          ORDER NUMBER :<Text style={styles.orderNumberText}> {props._id}</Text>
        </Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Order Details",{
            _id:props._id,
            amount:props.amount,
            deliveryCharge:props.deliveryCharge,
            status:props.status,
            method:props.method,
            orderDate:props.orderDate,
            name:props.name,
            address:props.address
        })}>
          <Text style={styles.orderDetails}>Order Details</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={props.contents}
        vertical={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.product._id.toString()}
        renderItem={({ item }) => (
          <OrderProductCard
            brand={item.product.brand}
            name={item.product.name}
            desc={item.product.description}
            discountPercentage={item.product.discountPercentage}
            image={item.product.images[0]}
            size={item.size}
            price={item.price}
            quantity={item.quantity}
            navigation={props.navigation}
          />
        )}
      />
      <View style={{ flexDirection:"row",paddingVertical:4 }}>
        <FontAwesome name="info-circle" style={styles.info}/>
        <Text style={{paddingLeft: 10, paddingBottom: 5,fontSize:17}}>Status : </Text>
        <Text style={(props.status == "Cancelled") ? styles.red : (props.status == "Completed") ? styles.blue : styles.green}>{props.status}</Text>
      </View>
    </View>
  
  );
};

const styles = StyleSheet.create({
  orderBox: {
    justifyContent: "center",
    borderWidth: 0.7,
    width: width,
    borderColor: "grey",
    paddingTop:15,
    marginTop:10,
    marginBottom:5,
    backgroundColor:"#FFFAFA"
  },
  orderNumberText: {
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing:0.2,
    fontFamily:"sans-serif-medium"
  },
  orderDetails:{
    color:"#0CB8EB",
    marginLeft:38,
    fontSize:17,
    marginTop:-1,
    fontWeight: "bold"
  },
  green:{
    fontWeight:"bold",
    color:"limegreen",
    fontSize:17,
    paddingBottom: 5,
    letterSpacing:0.7
  },
  red:{
    fontWeight:"bold",
    color:"red",
    fontSize:17,
    paddingBottom: 5,
    letterSpacing:0.7
  },
  blue:{
    fontWeight:"bold",
    color:"#2874A6",
    fontSize:17,
    paddingBottom: 5,
    letterSpacing:0.7
  },
  info:{
    fontSize:20,
    color:"darkblue",
    marginLeft:10,
    marginTop:1
  },
  address:{
    fontSize:20,
    color:"black",
    marginLeft:11,
    marginTop:1
  }
});

export default OrderCard;
